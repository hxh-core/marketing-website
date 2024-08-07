import { API_URL, REVALIDATE_TIME } from '@/shared';
import type {
	DataWithoutMeta,
	IGoogleAnalytics,
	IGoogleTagManager,
	IYandexMetrics,
} from '@/shared/types';

// 07.08.2024
// Metrics service / v.1.0.0
export class MetricsService {
	static async getYandexMetrics() {
		const request = new Request(
			`${API_URL}/yandex-metrika?populate[0]=initParameters`,
			{
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			},
		);

		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<IYandexMetrics> =
				await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(
				'Error get yandex metrics.\nFile: metrics.service.ts:30',
				{
					cause: error,
				},
			);
		}
	}

	static async getGoogleAnalytics() {
		const request = new Request(`${API_URL}/google-analytics`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});

		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<IGoogleAnalytics> =
				await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(
				'Error get google analytics.\nFile: metrics.service.ts:53',
				{
					cause: error,
				},
			);
		}
	}

	static async getGoogleTagManager() {
		const request = new Request(`${API_URL}/google-tag-manager`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});

		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<IGoogleTagManager> =
				await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(
				'Error get google tag manager.\nFile: metrics.service.ts:76',
				{
					cause: error,
				},
			);
		}
	}
}
