import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Static export enable karein
    output: 'export',

    // 2. Images optimization ko disable karein (GitHub Pages support nahi karta)
    images: {
        unoptimized: true,
    },

    // 3. Apni repository ka naam yahan likhein (Slash ke sath)
    // Aapki repo ka naam 'portfolio' hai to:
    basePath: '/portfolio',
};

export default withSentryConfig(nextConfig, {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
}, {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});