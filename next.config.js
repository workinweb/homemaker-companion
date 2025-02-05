/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

const nextConfig = {
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

    images: {
        domains: ["img.youtube.com", "i.ytimg.com"],
    },
};

export default nextConfig;
