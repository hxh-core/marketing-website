export interface IGoogleTagManager {
	id: number;
	attributes: {
		gtmId: string;
		dataLayerName?: string;
		auth?: string;
		preview?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}
