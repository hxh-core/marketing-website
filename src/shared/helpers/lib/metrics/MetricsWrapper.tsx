import {
	IGoogleAnalytics,
	IGoogleTagManager,
	IYandexMetrics,
} from '@/shared/types';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { YandexMetricaProvider } from 'next-yandex-metrica';

interface YandexMetricaProps {
	children: React.ReactNode;
	yandexMetrics?: IYandexMetrics;
	googleAnalytics?: IGoogleAnalytics;
	googleTagManager?: IGoogleTagManager;
}

// 19.07.2024 / v.1.0.2
// Компонент для установки Метрик
export const MetricsWrapper = ({
	children,
	googleAnalytics,
	googleTagManager,
	yandexMetrics,
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
				{children}
			</>
		);
	}

	return <>{children}</>;
};
