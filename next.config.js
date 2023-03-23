/* eslint-disable linebreak-style */
/** @type {import('next').NextConfig} */



const TerserPlugin = require("terser-webpack-plugin")




const nextConfig = {

    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

}



module.exports = {

    webpack: (config, { isServer }) => {

        if (!isServer) {

            config.optimization.minimize = true

            config.optimization.minimizer = [new TerserPlugin()]
            
            

        }



        return config

    },

}



module.exports = nextConfig

