import fs from "fs/promises";
import path from "path";
import { CreateCustomViteServer, sharedViteServerCache, validateManifestConfig } from "../helper/scripts.helper.js";
import { SKYPHR_CMS_JSON_CONFIG_ALLOWED_EXPORT_TYPES } from "../constant/common.constant.js";
import { ThrowForeignKeysError, ThrowMissingKeysError } from "../helper/error.helper.js";
const CONFIG_FOLDER = path.resolve(process.cwd(), "skyphr-cms-config");
export const loadManifestByLabel = async (labelId) => {
    try {
        const configFolder = await fs.readdir(CONFIG_FOLDER);
        const foreignFile = configFolder.filter((file) => !file.endsWith(".config.json"));
        if (foreignFile.length > 0) {
            throw new Error(`Foreign files found in config folder: ${foreignFile.join(", ")}
      
      Only The file ending with .config.json are allowed`);
        }
        const configFiles = configFolder.filter((file) => file.endsWith(".config.json"));
        const allManifests = await Promise.all(configFiles.map(async (file) => {
            const filePath = path.resolve(CONFIG_FOLDER, file);
            const rowFileData = await fs.readFile(filePath, "utf-8");
            const config = JSON.parse(rowFileData);
            validateManifestConfig(config, file);
            return config;
        }));
        const selectedManifestFile = allManifests.find((m) => m.label === labelId) || null;
        if (!selectedManifestFile) {
            throw new Error(`Manifest file not found for label: ${labelId}`);
        }
        validateManifestConfig(selectedManifestFile, labelId);
        const viteServer = await CreateCustomViteServer(selectedManifestFile.baseEntryPoint, sharedViteServerCache);
        const pageSectionConfig = await Promise.all(selectedManifestFile.sections.map(async (section) => {
            const modulePath = path.resolve(process.cwd(), selectedManifestFile.baseEntryPoint, section.module);
            // Load the component file via Vite to handle CSS imports and aliases correctly
            const moduleData = await viteServer.ssrLoadModule(modulePath);
            // Find the schema and the component dynamically
            // E.g., looking for something ending in "Schema" or exactly matching known schema exports
            const exportedKeys = Object.keys(moduleData);
            const foreignKeys = exportedKeys.filter((key) => !SKYPHR_CMS_JSON_CONFIG_ALLOWED_EXPORT_TYPES.has(key));
            if (foreignKeys.length > 0) {
                throw new Error(ThrowForeignKeysError({ foreignKeys, modulePath }));
            }
            const schemaKey = exportedKeys.find((item) => item === "Schema");
            if (!schemaKey) {
                throw new Error(ThrowMissingKeysError({ missingKey: "Schema", modulePath }));
            }
            const componentKey = exportedKeys.find((item) => item === "UIComponent");
            if (!componentKey) {
                throw new Error(ThrowMissingKeysError({ missingKey: "UIComponent", modulePath }));
            }
            return {
                ...section,
                schema: moduleData[schemaKey],
                component: moduleData[componentKey],
            };
        }));
        return {
            ...selectedManifestFile,
            sections: pageSectionConfig,
        };
    }
    catch (error) {
        throw error;
    }
};
