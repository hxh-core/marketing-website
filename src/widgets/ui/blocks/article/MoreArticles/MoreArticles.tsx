import { ArticleService } from '@/services';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { IMoreArticlesBlockProps } from '@/shared/types';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { Title } from '../../../elements';
import { ArticlesCarousel } from '../ArticlesCarousel/ArticlesCarousel';
import styles from './MoreArticles.module.scss';

interface Props {
	data: IMoreArticlesBlockProps;
	index: number;
	currentArticleId?: number;
}

export const MoreArticles = async ({
	data,
	index,
	currentArticleId,
}: Props) => {
	const moreArticles = await ArticleService.getAllArticles({
		pagination: {
			pageSize: data.data.limit,
		},
		sort: [{ value: data.data.sortField, type: data.data.sort }],
		type: data.data.type,
	});

	return (
		<BlockWithTitle
			title={data.title}
			className={`${getAnimationStyle(data.animation)} ${styles.moreArticles}`}
			id={data.blockId}
		>
			<Container>
				<Title title={data.title} index={index} />
				{currentArticleId ? (
					<ArticlesCarousel
						articles={moreArticles.data.filter(
							(article) => article.id === currentArticleId,
						)}
					/>
				) : (
					<ArticlesCarousel articles={moreArticles.data} />
				)}
			</Container>
		</BlockWithTitle>
	);
};
