import path from "path";
import { createServer } from "vite";
import { SKYPHR_CMS_JSON_CONFIG_ALLOWED_KEYS } from "../constant/common.constant.js";
export const sharedViteServerCache = new Map();
export async function CreateCustomViteServer(baseEntryPoint, viteServerCache) {
    const normalizedBaseEntry = path.resolve(process.cwd(), baseEntryPoint);
    const cachedServer = viteServerCache.get(normalizedBaseEntry);
    if (cachedServer) {
        return cachedServer;
    }
    const viteServer = await createServer({
        configFile: false,
        server: { middlewareMode: true, hmr: false, ws: false },
        appType: "custom",
        optimizeDeps: {
            noDiscovery: true,
            include: [],
        },
        resolve: {
            alias: {
                "@": normalizedBaseEntry,
            },
        },
    });
    viteServerCache.set(normalizedBaseEntry, viteServer);
    return viteServer;
}
export async function CloseAllViteServers(viteServerCache) {
    await Promise.all([...viteServerCache.values()].map((server) => server.close()));
    viteServerCache.clear();
}
export function validateManifestConfig(config, fileName) {
    const fileContext = fileName ? ` in ${fileName}` : "";
    if (!config || typeof config !== "object") {
        throw new Error(`Invalid manifest config${fileContext}: expected an object`);
    }
    const manifest = config;
    const foreignKeys = Object.keys(manifest).filter((key) => !SKYPHR_CMS_JSON_CONFIG_ALLOWED_KEYS.includes(key));
    if (foreignKeys.length > 0) {
        throw new Error(`Invalid manifest config${fileContext}: expected keys to be ${SKYPHR_CMS_JSON_CONFIG_ALLOWED_KEYS.join(", ")}. Received: ${foreignKeys.join(", ")}`);
    }
    // name
    if (typeof manifest.name !== "string" || manifest.name.trim().length === 0) {
        throw new Error(`Invalid "name"${fileContext}: expected a non-empty string`);
    }
    // outDir
    if (typeof manifest.outDir !== "string" || manifest.outDir.trim().length === 0) {
        throw new Error(`Invalid "outDir"${fileContext}: expected a non-empty string`);
    }
    // baseEntryPoint
    if (typeof manifest.baseEntryPoint !== "string" || manifest.baseEntryPoint.trim().length === 0) {
        throw new Error(`Invalid "baseEntryPoint"${fileContext}: expected a non-empty string`);
    }
    // useWebp
    if (typeof manifest.useWebp !== "boolean") {
        throw new Error(`Invalid "useWebp"${fileContext}: expected a boolean`);
    }
    // sections
    if (!Array.isArray(manifest.sections)) {
        throw new Error(`Invalid "sections"${fileContext}: expected an array`);
    }
    manifest.sections.forEach((section, index) => {
        if (!section || typeof section !== "object") {
            throw new Error(`Invalid section at index ${index}${fileContext}: expected an object`);
        }
        if (typeof section.name !== "string" || section.name.trim().length === 0) {
            throw new Error(`Invalid section.name at index ${index}${fileContext}: expected a non-empty string`);
        }
        if (typeof section.module !== "string" || section.module.trim().length === 0) {
            throw new Error(`Invalid section.module at index ${index}${fileContext}: expected a non-empty string`);
        }
        if (section.markdown !== undefined && typeof section.markdown !== "string") {
            throw new Error(`Invalid section.markdown at index ${index}${fileContext}: expected a string`);
        }
    });
    // markdown (optional)
    if (manifest.markdown !== undefined) {
        if (!manifest.markdown || typeof manifest.markdown !== "object") {
            throw new Error(`Invalid "markdown"${fileContext}: expected an object`);
        }
        ["outDir", "indexFile", "urlBase"].forEach((key) => {
            const value = manifest.markdown?.[key];
            if (typeof value !== "string" || value.trim().length === 0) {
                throw new Error(`Invalid "markdown.${key}"${fileContext}: expected a non-empty string`);
            }
        });
    }
}
