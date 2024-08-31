/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: 'ru',
		locales: ['ru', 'en'],
		localeDetection: false,
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
