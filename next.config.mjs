/** @type {import('next').NextConfig} */
const nextConfig = {
webpack(config){
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
    });
    return config;
},
reactStrictMode: true,
images : {
  domains : ['s3-alpha-sig.figma.com'] // <== Domain name
}
};


export default nextConfig;
