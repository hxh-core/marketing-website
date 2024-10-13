import { SERVER_URL, WEBSITE_DOMEN } from '@/shared/constants';
import { IPage } from '@/shared/types';
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
	if (
		page &&
		page.attributes &&
		page.attributes.type &&
		page.attributes.type === 'article'
	) {
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
			authors:
				page.attributes.author && page.attributes.author.data
					? [
							{
								name: page.attributes.author?.data.attributes.name,
								url: page.attributes.author?.data.attributes.url,
							},
						]
					: undefined,
			openGraph: {
				publishedTime:
					page.attributes.article && page.attributes.article.data
						? page.attributes.article?.data.attributes.publishedAt
						: undefined,
				modifiedTime:
					page.attributes.article && page.attributes.article.data
						? page.attributes.article?.data.attributes.updatedAt
						: undefined,
				type: page.attributes.type ? page.attributes.type : 'website',
				title: page.attributes.metaTitle,
				description: page.attributes.metaDescription
					? page.attributes.metaDescription
					: undefined,
				url: `${WEBSITE_DOMEN}${page.attributes.path ? page.attributes.path : path}`,
				images:
					page.attributes.metaImage &&
					page.attributes.metaImage.data &&
					page.attributes.metaImage.data.length
						? page.attributes.metaImage.data.map((image) => {
								return {
									url: `${SERVER_URL}${image.attributes.url}`,
									type: image.attributes.mime,
									alt: image.attributes.alternativeText,
									height: image.attributes.height,
									width: image.attributes.width,
								};
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
				type: page.attributes.type ? page.attributes.type : 'website',
				title: page.attributes.metaTitle,
				description: page.attributes.metaDescription
					? page.attributes.metaDescription
					: undefined,
				url: `${WEBSITE_DOMEN}${page.attributes.path ? page.attributes.path : path}`,
				images:
					page.attributes.metaImage &&
					page.attributes.metaImage.data &&
					page.attributes.metaImage.data.length
						? page.attributes.metaImage.data.map((image) => {
								return {
									url: `${SERVER_URL}${image.attributes.url}`,
									type: image.attributes.mime,
									alt: image.attributes.alternativeText,
									height: image.attributes.height,
									width: image.attributes.width,
								};
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

	// Если нет мета-тегов, то возвращаем стандартные мета-теги
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
};
