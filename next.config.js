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
            "src/pages",
            "src/apps",
            "src/components",
            "src/modules",
            "src/trcp",
            "src/server",
        ],
    },
};

export default config;
