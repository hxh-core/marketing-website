'use client';

import { MetricsWrapper } from '@/shared/helpers/lib/metrics';
import {
	IGoogleAnalytics,
	IGoogleTagManager,
	IVkPixel,
	IYandexMetrics,
} from '@/shared/types';
import type {
	ICookie,
	IFooter,
	INavigation,
	INewsMessages,
} from '@/shared/types/ui/elements';
import { CookieWidget, Footer, Navigation } from '@/shared/ui';

interface ClientLayoutProps {
	children: React.ReactNode;
	navProps: INavigation;
	newsProps: INewsMessages;
	footerProps: IFooter;
	cookie?: ICookie;
	analytics?: {
		yandex?: IYandexMetrics;
		googleAnalytics?: IGoogleAnalytics;
		googleTagManager?: IGoogleTagManager;
		vk?: IVkPixel;
	};
}

export const ClientRootLayout = ({
	children,
	footerProps,
	navProps,
	newsProps,
	analytics,
	cookie,
}: ClientLayoutProps) => {
	return (
		<body>
			<MetricsWrapper
				yandexMetrics={analytics ? analytics.yandex : undefined}
				googleAnalytics={analytics ? analytics.googleAnalytics : undefined}
				googleTagManager={analytics ? analytics.googleTagManager : undefined}
				vkPixel={analytics ? analytics.vk : undefined}
			>
				<Navigation
					data={navProps}
					news={newsProps}
					options={{
						hideByHeight: true,
						scrollHeight: 30,
					}}
				/>
				<main className='main'>{children}</main>
				{cookie && <CookieWidget data={cookie} />}
				<Footer data={footerProps} />
				<script
					src='https://widget.gravi.org/code/index.js'
					data-grv-id='1204'
					data-grv-key='10ot0h9xhvm229fj9p'
					defer
				></script>
			</MetricsWrapper>
		</body>
	);
};
