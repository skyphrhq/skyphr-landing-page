import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { loadManifestByLabel } from "./loadManifestByLabel.js";
export async function processImage(buffer, filename, schema, useWebP, label, sectionType) {
    const metadata = await sharp(buffer).metadata();
    const { width, height, format } = metadata;
    if (!useWebP && format === "webp") {
        return {
            success: false,
            data: null,
            message: "Uploading WebP is not allowed! with useWebP as False",
        };
    }
    if (!width || !height) {
        return {
            success: false,
            data: null,
            message: "Could not detect image dimensions",
        };
    }
    // Validate dimensions if schema requires it
    if (schema.width && width !== schema.width) {
        return {
            success: false,
            data: null,
            message: `Invalid width: expected ${schema.width}, got ${width}`,
        };
    }
    if (schema.height && height !== schema.height) {
        return {
            success: false,
            data: null,
            message: `Invalid height: expected ${schema.height}, got ${height}`,
        };
    }
    let finalFilename = filename;
    let finalBuffer = buffer;
    if (useWebP && format !== "webp") {
        finalFilename = filename.replace(/\.[^/.]+$/, "") + ".webp";
        finalBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
    }
    const manifestConfig = await loadManifestByLabel(label);
    const baseUploadDir = manifestConfig?.assets?.baseDir;
    let finalUploadDir = baseUploadDir;
    const sectionAssetKey = sectionType?.toLocaleLowerCase();
    const uploadDir = sectionAssetKey ? manifestConfig?.assets?.[sectionAssetKey] : undefined;
    if (uploadDir) {
        finalUploadDir = uploadDir;
    }
    else {
        finalUploadDir = baseUploadDir;
    }
    await fs.mkdir(finalUploadDir, { recursive: true });
    const relativePath = `${finalUploadDir}/${finalFilename}`;
    const absolutePath = path.resolve(process.cwd(), finalUploadDir, finalFilename);
    await fs.writeFile(absolutePath, finalBuffer);
    const finalMetadata = await sharp(finalBuffer).metadata();
    return {
        success: true,
        data: {
            url: relativePath,
            width: finalMetadata.width || width,
            height: finalMetadata.height || height,
        },
        message: "Image processed successfully",
    };
}
