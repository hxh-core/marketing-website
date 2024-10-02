'use client';

import { MetricsWrapper } from '@/shared/helpers/lib/metrics';
import {
	IGoogleAnalytics,
	IGoogleTagManager,
	IYandexMetrics,
} from '@/shared/types';
import type {
	ICookie,
	IFooter,
	INavigation,
	INewsMessages,
} from '@/shared/types/ui/elements';
import { CookieWidget, Footer, Navigation } from '@/shared/ui';
import Script from 'next/script';

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
		vk?: number;
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
			>
				<Navigation
					data={navProps}
					news={newsProps}
					options={{
						hideByHeight: true,
						scrollHeight: 30,
					}}
				/>
				{analytics?.vk && (
					<Script
						id='vk-metrics'
						dangerouslySetInnerHTML={{
							__html: `var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "${analytics.vk}", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");`,
						}}
					></Script>
				)}
				<main className='main'>{children}</main>
				{cookie && <CookieWidget data={cookie} />}
				<Footer data={footerProps} />
			</MetricsWrapper>
		</body>
	);
};
