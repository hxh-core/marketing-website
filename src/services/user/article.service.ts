import { API_URL, REVALIDATE_TIME } from '@/shared';
import { getRequestFilters } from '@/shared/helpers/lib/filters';
import { IArticle, IArticlesFilters } from '@/shared/types';
import type { DataWithMeta } from '@/shared/types/api';

// 07.09.2024
// Article service / v.1.0.0
export class ArticleService {
	static async getAllArticles({ pagination, sort, type }: IArticlesFilters) {
		const query = getRequestFilters({ pagination, sort });
		const typeQuery = type ? `&filters[type][$eq]=${type}` : '';
		try {
			const articles = await fetch(`${API_URL}/article?${query}${typeQuery}`, {
				method: 'GET',
				next: {
					revalidate: REVALIDATE_TIME,
				},
			});

			const responseJson: DataWithMeta<IArticle[]> = await articles.json();
			return responseJson;
		} catch (error) {
			throw new Error(`Error get all articles.\nFile: PageService.ts`, {
				cause: error,
			});
		}
	}
}
