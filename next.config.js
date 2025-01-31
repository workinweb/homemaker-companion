/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    webpack: (cfg) => {
        cfg.resolve.alias.canvas = false;
        return cfg;
    },

    env: {
        CLOUDINARTY_URL: "https://api.cloudinary.com/v1_1/dub477vzt/upload",
        CLOUDINARY_CLOUDNAME: "dub477vzt",
        CLOUDINARY_API_KEY: "763641954252769",
        CLOUDINARY_API_SECRET: "Qs2_7_dklt-9I8yskgkoSqELxhA",
        JOB_APPLICATION_PASSWORD: "3vanH0meC4re.2024",
        CLOUDINARY_PDF_FOLDER: "mypdf",
        CLOUDINARY_UPLOAD_PRESET: "ul1f0lm9",
        PDF_WEB_VIEWER:
            "demo:1710681536042:7f35457d0300000000af0fc23717fd3c3adcfabc1ffcbff08dbd9b9428",
        RESEND_API_KEY: "re_bk97hei7_CEzFhTfxUCbUcMbBB1fRYEc1",
        GOOGLE_CLOUD_API_KEY: "AIzaSyDwFMHUzK4CWPQh-WRwH4oSRa7Xa9MEPPk",
    },

    eslint: {
        dirs: [
            "utils",
            "pages",
            "apps",
            "components",
            "modules",
            "trcp",
            "server",
            "src/utils",
            "src/apps",
            "src/components",
            "src/modules",
            "src/trcp",
            "src/server",
        ],
    },

    reactStrictMode: false,

    // Enable production compression
    compress: true,

    // Enable webpack optimization
    webpack: (config, { dev, isServer }) => {
        // Production optimizations only
        if (!dev) {
            config.optimization = {
                minimize: true,
                splitChunks: {
                    chunks: "all",
                    minSize: 20000,
                    maxSize: 244000,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            chunks: "all",
                            name: "framework",
                            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: 30,
                            minChunks: 2,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }
        return config;
    },
};

export default config;
