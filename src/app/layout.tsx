import favicon128 from '@/data/user/favicon/favicon-128x128.png';
import favicon32 from '@/data/user/favicon/favicon-32x32.png';
import favicon64 from '@/data/user/favicon/favicon-64x64.png';
import faviconSvg from '@/data/user/favicon/favicon.svg';
import { REVALIDATE_TIME, ZEN_VERIFICATION } from '@/shared';
import type { Metadata } from 'next';
import './styles';

export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = {
	creator: 'HxH Marketing',
	icons: [
		{
			url: faviconSvg.src,
			type: 'image/svg+xml',
			sizes: '32x32',
		},
		{
			url: favicon32.src,
			type: 'image/png',
			sizes: '32x32',
		},
		{
			url: favicon64.src,
			type: 'image/png',
			sizes: '64x64',
		},
		{
			url: favicon128.src,
			type: 'image/png',
			sizes: '128x128',
		},
	],
	verification: {
		other: {
			'zen-verification': ZEN_VERIFICATION,
		},
	},
	// openGraph: {
	// 	images: [poster.src],
	// },
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<meta name='color-scheme' content='only dark' />
			<meta
				name='theme-color'
				media='(prefers-color-scheme: light)'
				content='141414'
			/>
			<meta
				name='theme-color'
				media='(prefers-color-scheme: dark)'
				content='141414'
			/>

			{children}
		</html>
	);
}
