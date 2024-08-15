import { API_URL, REVALIDATE_TIME } from '@/shared';
import type { DataWithoutMeta } from '@/shared/types/api';
import type { ICookie } from '@/shared/types/ui/elements';

// 16.08.2024
// Cookie service / v.1.0.0
export class CookieService {
	static async getCookie() {
		const request = new Request(`${API_URL}/cookie?populate=*`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});
		try {
			const response = await fetch(request);
			const responseJson: DataWithoutMeta<ICookie> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error('Error get cookie.\nFile: cookie.service.ts:20', {
				cause: error,
			});
		}
	}
}
