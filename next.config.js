/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

const nextConfig = {
    webpack: (cfg) => {
        cfg.resolve.alias.canvas = false;
        return cfg;
    },

    experimental: {
        reactCompiler: true,
    },

    eslint: {
        dirs: [
            "utils",
            "apps",
            "components",
            "modules",
            "sections",
            "src/utils",
            "src/sections",
            "src/apps",
            "src/components",
            "src/modules",
        ],
    },

    reactStrictMode: false,
};

export default nextConfig;
