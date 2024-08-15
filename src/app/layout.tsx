import favicon128 from '@/data/user/favicon/favicon-128x128.png';
import favicon32 from '@/data/user/favicon/favicon-32x32.png';
import favicon64 from '@/data/user/favicon/favicon-64x64.png';
import faviconSvg from '@/data/user/favicon/favicon.svg';
import {
	CookieService,
	FooterService,
	MetricsService,
	NavigationService,
} from '@/services';
import { REVALIDATE_TIME, ZEN_VERIFICATION } from '@/shared';
import { ClientRootLayout } from '@/widgets/lib';
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
	// Get default info
	const navigation = await NavigationService.getNavigation();
	const newsMessages = await NavigationService.getNewsMessages();
	const footer = await FooterService.getFooter();
	const cookie = await CookieService.getCookie();

	// Get analytics
	const yandexMetrics = await MetricsService.getYandexMetrics();
	const googleAnalytics = await MetricsService.getGoogleAnalytics();
	const googleTagManager = await MetricsService.getGoogleTagManager();

	return (
		<html lang='ru'>
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

			<ClientRootLayout
				footerProps={footer.data}
				navProps={navigation.data}
				newsProps={newsMessages.data}
				cookie={cookie.data}
				analytics={{
					yandex:
						yandexMetrics && yandexMetrics.data
							? yandexMetrics.data
							: undefined,
					googleAnalytics:
						googleAnalytics && googleAnalytics.data
							? googleAnalytics.data
							: undefined,
					googleTagManager:
						googleTagManager && googleTagManager.data
							? googleTagManager.data
							: undefined,
				}}
			>
				{children}
			</ClientRootLayout>
		</html>
	);
}
