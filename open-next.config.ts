import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

// Pages are prerendered at build time and served from Workers static assets.
// Content from Contentful refreshes on each deploy. To enable runtime ISR
// (`revalidate`), switch to the R2 incremental cache:
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
