import { SERVER_URL, SITE_NAME, WEBSITE_DOMEN } from '@/shared/constants';
import type { IPage } from '@/shared/types';
import type { Metadata } from 'next/types';

interface GenerateCustomMetadataProps {
	path: string;
	page: IPage;
}

// 07,08.2024 / v.1.0.0
// Функция для получения и генерации мета-тегов
export const generateCustomMetadata = async ({
	page,
	path,
}: GenerateCustomMetadataProps): Promise<Metadata> => {
	// Если нет мета-тегов, то возвращаем стандартные мета-теги

	if (page && page.attributes) {
		return {
			metadataBase: new URL(
				`${WEBSITE_DOMEN}${page.attributes.path ? page.attributes.path : path}`,
			),
			title: page.attributes.metaTitle,
			description: page.attributes.metaDescription
				? page.attributes.metaDescription
				: undefined,
			keywords: page.attributes.metaKeywords
				? page.attributes.metaKeywords
				: undefined,
			openGraph: {
				locale: `${page.attributes.locale}_${page.attributes.locale.toUpperCase()}`,
				alternateLocale: page.attributes.localizations.data.map(
					(localePage) =>
						`${localePage.attributes.locale}_${localePage.attributes.locale.toUpperCase()}`,
				),
				type: page.attributes.type ? page.attributes.type : 'website',
				title: page.attributes.metaTitle,
				description: page.attributes.metaDescription
					? page.attributes.metaDescription
					: undefined,
				siteName: SITE_NAME,
				url: `${WEBSITE_DOMEN}${page.attributes.path ? page.attributes.path : path}`,
				images:
					page.attributes.metaImage &&
					page.attributes.metaImage.data &&
					page.attributes.metaImage.data.length
						? page.attributes.metaImage.data.map((image) => {
								return `${SERVER_URL}${image.attributes.url}`;
							})
						: undefined,
			},
			alternates: {
				canonical: `${WEBSITE_DOMEN}${
					page.attributes.path ? page.attributes.path : path
				}`,
			},
		};
	}

	return {
		metadataBase: new URL(`${WEBSITE_DOMEN}/${path}`),
		title: 'Страница не найдена: 404',
		openGraph: {
			siteName: 'Страница не найдена: 404',
			url: `${WEBSITE_DOMEN}${path}`,
			type: 'website',
		},
		alternates: {
			canonical: `${WEBSITE_DOMEN}${path}`,
		},
	};

	// if (!page || !page.attributes) {
	// 	return {
	// 		metadataBase: new URL(`${CLIENT_URL}/${path}`),
	// 		title: SITE_NAME,
	// 		openGraph: {
	// 			siteName: SITE_NAME,
	// 			url: `${CLIENT_URL}${path}`,
	// 			type: type,
	// 		},
	// 		alternates: {
	// 			canonical: `${CLIENT_URL}${path}`,
	// 		},
	// 	};
	// }

	// return {
	// 	metadataBase: new URL(
	// 		`${CLIENT_URL}/${page.attributes.path ? page.attributes.path : path}`,
	// 	),
	// 	title: page.attributes.metaTitle,
	// 	description: page.attributes.metaDescription
	// 		? page.attributes.metaDescription
	// 		: undefined,
	// 	keywords: page.attributes.metaKeywords
	// 		? page.attributes.metaKeywords
	// 		: undefined,
	// 	openGraph: {
	// 		type: type ? type : 'website',
	// 		title: page.attributes.metaTitle,
	// 		description: page.attributes.metaDescription
	// 			? page.attributes.metaDescription
	// 			: undefined,
	// 		siteName: SITE_NAME,
	// 		url: `${CLIENT_URL}/${page.attributes.path ? page.attributes.path : path}`,
	// 		images: [
	// 			`${CLIENT_URL}/${page.attributes.metaImage ? page.attributes.metaImage.data[0].data.attributes.url : undefined}`,
	// 		],
	// 	},
	// 	alternates: {
	// 		canonical: `${CLIENT_URL}/${
	// 			page.attributes.path ? page.attributes.path : path
	// 		}`,
	// 	},
	// };
};
