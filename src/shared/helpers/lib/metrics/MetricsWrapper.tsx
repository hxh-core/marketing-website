import {
	IGoogleAnalytics,
	IGoogleTagManager,
	IVkPixel,
	IYandexMetrics,
} from '@/shared/types';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { YandexMetricaProvider } from 'next-yandex-metrica';
import Script from 'next/script';

interface YandexMetricaProps {
	children: React.ReactNode;
	yandexMetrics?: IYandexMetrics;
	googleAnalytics?: IGoogleAnalytics;
	googleTagManager?: IGoogleTagManager;
	vkPixel?: IVkPixel;
}

// 19.07.2024 / v.1.0.2
// Компонент для установки Метрик
export const MetricsWrapper = ({
	children,
	googleAnalytics,
	googleTagManager,
	yandexMetrics,
	vkPixel,
}: YandexMetricaProps) => {
	if (process.env.NODE_ENV === 'production') {
		if (yandexMetrics && yandexMetrics.attributes) {
			return (
				<>
					{googleAnalytics && (
						<GoogleAnalytics
							gaId={googleAnalytics.attributes.gaId}
							dataLayerName={googleAnalytics.attributes.dataLayerName}
						/>
					)}
					{googleTagManager && (
						<GoogleTagManager
							gtmId={googleTagManager.attributes.gtmId}
							auth={googleTagManager.attributes.auth}
							dataLayerName={googleTagManager.attributes.dataLayerName}
							preview={googleTagManager.attributes.preview}
						/>
					)}
					<YandexMetricaProvider
						initParameters={{
							defer: true,
							...yandexMetrics.attributes.initParameters,
						}}
						tagID={yandexMetrics.attributes.tagID}
					>
						{vkPixel && vkPixel.attributes.vkPixel && (
							<Script
								id='vk-metrics'
								dangerouslySetInnerHTML={{
									__html: `var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "${vkPixel.attributes.vkPixel}", type: "pageView", start: (new Date()).getTime()});
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
						{children}
					</YandexMetricaProvider>
				</>
			);
		}

		return (
			<>
				{googleAnalytics && (
					<GoogleAnalytics
						gaId={googleAnalytics.attributes.gaId}
						dataLayerName={googleAnalytics.attributes.dataLayerName}
					/>
				)}
				{googleTagManager && (
					<GoogleTagManager
						gtmId={googleTagManager.attributes.gtmId}
						auth={googleTagManager.attributes.auth}
						dataLayerName={googleTagManager.attributes.dataLayerName}
						preview={googleTagManager.attributes.preview}
					/>
				)}
				{vkPixel && vkPixel.attributes.vkPixel && (
					<Script
						id='vk-metrics'
						dangerouslySetInnerHTML={{
							__html: `var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "${vkPixel.attributes.vkPixel}", type: "pageView", start: (new Date()).getTime()});
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
				{children}
			</>
		);
	}

	return <>{children}</>;
};
