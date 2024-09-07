import { API_URL, REVALIDATE_TIME } from '@/shared';
import type { DataWithMeta } from '@/shared/types/api';
import type { IPage } from '@/shared/types/ui/pages';

const queryParams = [
	// Title with Buttons
	'populate[blocks][populate][0]=data.buttons',
	// Reviews
	'populate[blocks][populate][1]=title.link',
	'populate[blocks][populate][2]=reviews.author.avatar',
	// Accordions
	'populate[blocks][populate][3]=data.data',
	// Team
	'populate[blocks][populate][4]=data.contacts',
	'populate[blocks][populate][5]=data.info',
	'populate[blocks][populate][6]=data.image',
	'populate[blocks][populate][7]=data.contactLink',
	// Forms
	'populate[blocks][populate][8]=data.inputs.inputProps',
	'populate[blocks][populate][9]=data.button',
	// Services
	'populate[blocks][populate][10]=data.price',
	'populate[blocks][populate][11]=data.oldPrice',
	'populate[blocks][populate][12]=data.link',
	'populate[blocks][populate][13]=data.slug',
	// Page meta settings
	'populate=metaImage',
	'pagination[pageSize]=1000',
];
// 10.07.2024
// Page service / v.1.0.0
export class PageService {
	static async getPageData(slug: string) {
		const request = new Request(`${API_URL}/pages?filters[path]=${slug}`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});
		try {
			const response = await fetch(request);
			const responseJson: DataWithMeta<IPage[]> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(`Error get page ${slug}.\nFile: PageService.ts:45`, {
				cause: error,
			});
		}
	}

	static async getAllPagesData() {
		const request = new Request(`${API_URL}/pages?${queryParams.join('&')}`, {
			method: 'GET',
			next: {
				revalidate: REVALIDATE_TIME,
			},
		});
		try {
			const response = await fetch(request);
			const responseJson: DataWithMeta<IPage[]> = await response.json();
			return responseJson;
		} catch (error) {
			throw new Error(`Error get all pages.\nFile: PageService.ts:63`, {
				cause: error,
			});
		}
	}
}
