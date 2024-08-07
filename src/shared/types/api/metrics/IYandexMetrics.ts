export interface IYandexMetrics {
	id: number;
	attributes: {
		tagID: number;
		initParameters: {
			accurateTrackBounce?: boolean | number;
			childIframe?: boolean;
			clickmap?: boolean;
			defer?: boolean;
			trackHash?: boolean;
			trackLinks?: boolean;
			webvisor?: boolean;
			triggerEvent?: boolean;
		};
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
