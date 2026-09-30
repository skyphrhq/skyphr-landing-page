import { CloseAllViteServers, sharedViteServerCache } from "../helper/scripts.helper.js";
import { regenerateAllMarkdown } from "../markdown/markdownExport.js";
import { loadManifest } from "./loadManifest.js";
// Rebuilds every post's markdown file and the index from the saved JSON files.
// Usage: pnpm run regenerate-markdown:dev [label]
async function RegenerateMarkdown() {
    const label = process.argv[2];
    try {
        const manifests = (await loadManifest()).filter((manifest) => (label ? manifest.label === label : manifest.markdown));
        if (manifests.length === 0) {
            throw new Error(label ? `Manifest file not found for label: ${label}` : 'No manifest has a "markdown" block');
        }
        for (const manifest of manifests) {
            const result = await regenerateAllMarkdown(manifest);
            console.log(`✅ ${manifest.label}: regenerated markdown for ${result.posts} post(s)`);
        }
    }
    finally {
        await CloseAllViteServers(sharedViteServerCache);
    }
}
RegenerateMarkdown().catch((error) => {
    console.error("\n❌ Markdown regeneration failed\n");
    console.error(error);
    process.exit(1);
});
