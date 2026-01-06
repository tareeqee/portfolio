/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Static export enable karein taake HTML files ban saken
    output: 'export',

    // 2. GitHub Pages images optimize nahi kar sakta, isliye ise true rakhein
    images: {
        unoptimized: true,
    },

    // 3. Aapki repository ka naam 'portfolio' hai, isliye ye zaroori hai
    basePath: '/portfolio',

    // Optional: Agar aap assets (CSS/JS) ke liye bhi path set karna chahte hain
    assetPrefix: '/portfolio',
};

export default nextConfig;