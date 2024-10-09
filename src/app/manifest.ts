import favicon128 from '@/data/user/favicon/favicon-128x128.png';
import favicon32 from '@/data/user/favicon/favicon-32x32.png';
import favicon64 from '@/data/user/favicon/favicon-64x64.png';
import faviconSvg from '@/data/user/favicon/favicon.svg';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'HxH Agency',
		short_name: 'HxH Agency',
		description: 'HxH Agency',
		start_url: '/',
		display: 'standalone',
		background_color: '#141414',
		theme_color: '#141414',
		orientation: 'portrait-primary',
		icons: [
			{
				src: faviconSvg.src,
				type: 'image/svg+xml',
				sizes: '32x32',
			},
			{
				src: favicon32.src,
				type: 'image/png',
				sizes: '32x32',
			},
			{
				src: favicon64.src,
				type: 'image/png',
				sizes: '64x64',
			},
			{
				src: favicon128.src,
				type: 'image/png',
				sizes: '128x128',
			},
		],
	};
}
