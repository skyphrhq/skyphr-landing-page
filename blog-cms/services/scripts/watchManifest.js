import chokidar from "chokidar";
import path from "path";
import { validateManifest } from "./validateManifest.js";
const CONFIG_FOLDER = path.resolve(process.cwd(), "skyphr-cms-config");
let isValidating = false;
const watchingComponentsPath = new Set();
//  Now We will create an Chokidar Config For the components
const componentsChokidarWatcher = chokidar.watch([], {
    persistent: true,
    ignoreInitial: true,
});
componentsChokidarWatcher.on("all", async (event, filePath) => {
    console.log(`\n📦 Module changed: ${event}`);
    console.log(`📄 ${filePath}\n`);
    await WatchManifest();
});
// Now We have Completed the initial setup , now we will create an function that will add the new file when the config file change and the validateManifest()  will give us new files
async function syncComponentsWatchers(newFilePaths) {
    // We will add all the non existing files in to the chokidar watch config
    for (const filePath of newFilePaths) {
        if (!watchingComponentsPath.has(filePath)) {
            await componentsChokidarWatcher.add(filePath);
            watchingComponentsPath.add(filePath);
            console.log(`➕ Started Watching: ${filePath}`);
        }
    }
    // Now Lets say One File Got Removed Then we have to remove that file from the chokidar watcher history
    for (const filePath of watchingComponentsPath) {
        if (!newFilePaths.has(filePath)) {
            await componentsChokidarWatcher.unwatch(filePath);
            watchingComponentsPath.delete(filePath);
            console.log(`➖ Removed The File From The Watcher: ${filePath}`);
        }
    }
}
async function WatchManifest() {
    if (isValidating)
        return;
    isValidating = true;
    console.clear();
    console.log("🔍 Validating Manifests...\n");
    try {
        const modulesPaths = await validateManifest();
        console.log("\n✅ All manifests are valid");
        console.log("\n📦 Syncing component watchers...\n");
        await syncComponentsWatchers(modulesPaths);
        console.log(`\n👀 Watching ${watchingComponentsPath.size} component files\n`);
    }
    catch (error) {
        console.error("\n❌ Manifest validation failed\n");
        console.error(error);
        process.exitCode = 1;
    }
    finally {
        isValidating = false;
    }
}
const configureWatcher = chokidar.watch(CONFIG_FOLDER, {
    persistent: true,
    ignoreInitial: true,
});
configureWatcher.on("all", async (event, filePath) => {
    console.log(`\n ⚙️  Config File Changed : ${event}`);
    console.log(`\n 📄  Config File Path : ${filePath}\n`);
    await WatchManifest();
});
WatchManifest().catch((error) => {
    console.error(error);
    process.exit(1);
});
console.log(`👀 Watching config folder: ${CONFIG_FOLDER}`);
