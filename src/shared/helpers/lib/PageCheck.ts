import { WEBSITE_DOMEN } from '@/shared';
import type { DataWithMeta, IPage } from '@/shared/types';
import { notFound } from 'next/navigation';

// 13.10.2024 / v.1.0.0
// Класс для проверки страницы на ошибки
export class PageCheck {
	static isPageHasError = (pageData: DataWithMeta<IPage[]>) => {
		// Проверка на 404
		if (!pageData.data[0] || !pageData.data[0].attributes.path) {
			notFound();
		}

		// Проверка на 500
		if (
			!pageData.data[0] ||
			!pageData.data[0].attributes ||
			!pageData.data[0].attributes.blocks.length ||
			pageData.data[0].attributes.blocks.length === 0
		) {
			console.log('error');
			throw new Error(
				`Missing blocks on page ${WEBSITE_DOMEN}${pageData.data[0].attributes.path}`,
			);
		}

		return false;
	};
}
