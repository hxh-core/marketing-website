/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		additionalData: `@import "./src/styles/_colors.scss"; @import "./src/styles/_mixins.scss"; @import "./src/styles/_functions.scss"; @import "./src/styles/_variables.scss";`,
	},
	images: {
		remotePatterns: [
			{
				protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
				hostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
			},
			{
				protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
				hostname: '*',
			},
		],
	},
};

export default nextConfig;
