export interface IGoogleAnalytics {
	id: number;
	attributes: {
		gaId: string;
		dataLayerName?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
