import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants'

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false
}

const IsPreviewEnv = process.env.PREVIEW_ENV === 'true'

function createConfig(phase: string, { defaultConfig }: { defaultConfig: NextConfig }): NextConfig {
  return {
    ...defaultConfig,
    ...nextConfig,
    productionBrowserSourceMaps: IsPreviewEnv,
    experimental: {
      serverSourceMaps: phase === PHASE_DEVELOPMENT_SERVER
    }
  }
}

export default createConfig
