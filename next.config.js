const sourcebit = require('sourcebit');
const sourcebitConfig = require('./sourcebit.js');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

sourcebit.fetch(sourcebitConfig);

module.exports = withBundleAnalyzer({
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    env: {
        NEXT_AWS_ACCESS_KEY_ID: process.env.NEXT_AWS_ACCESS_KEY_ID,
        NEXT_AWS_SECRET_ACCESS_KEY: process.env.NEXT_AWS_SECRET_ACCESS_KEY,
        NEXT_ESCROW_EMAIL: process.env.NEXT_ESCROW_EMAIL,
        NEXT_URL: process.env.NEXT_URL,
        NEXT_STRIPE_API_PUBLIC: process.env.NEXT_STRIPE_API_PUBLIC,
        NEXT_STRIPE_API_SECRET: process.env.NEXT_STRIPE_API_SECRET
    },
    eslint: {
        // Allow production builds to successfully complete even if your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    webpack: (config, { dev }) => {
        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack recompiles the app and refreshes the whole page.
        // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
        // function to update the content on the page without refreshing the
        // whole page
        config.watchOptions.ignored.push('/content/');

        return config;
    }
});
