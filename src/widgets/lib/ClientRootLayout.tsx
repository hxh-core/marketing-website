'use client';

import { MetricsWrapper } from '@/shared/helpers/lib/metrics';
import {
	IGoogleAnalytics,
	IGoogleTagManager,
	IYandexMetrics,
} from '@/shared/types';
import type {
	IFooter,
	INavigation,
	INewsMessages,
} from '@/shared/types/ui/elements';
import { Footer, Navigation } from '@/shared/ui';

interface ClientLayoutProps {
	children: React.ReactNode;
	navProps: INavigation;
	newsProps: INewsMessages;
	footerProps: IFooter;
	analytics?: {
		yandex?: IYandexMetrics;
		googleAnalytics?: IGoogleAnalytics;
		googleTagManager?: IGoogleTagManager;
	};
}

export const ClientRootLayout = ({
	children,
	footerProps,
	navProps,
	newsProps,
	analytics,
}: ClientLayoutProps) => {
	return (
		<body>
			<MetricsWrapper
				yandexMetrics={analytics ? analytics.yandex : undefined}
				googleAnalytics={analytics ? analytics.googleAnalytics : undefined}
				googleTagManager={analytics ? analytics.googleTagManager : undefined}
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
				<Footer data={footerProps} />
			</MetricsWrapper>
		</body>
	);
};
