import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

// Static-assets incremental cache: no R2/KV needed — the whole site is
// prerendered article pages served from the Worker's ASSETS binding.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache
});
