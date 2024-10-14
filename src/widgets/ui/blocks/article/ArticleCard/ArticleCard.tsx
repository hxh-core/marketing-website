'use client';

import { SERVER_URL } from '@/shared';
import type { IArticle } from '@/shared/types';
import { FireIcon } from '@/shared/ui/icons';
import { setUrlBeforeImageName } from '@hxh-core/react/dist/helpers';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleCard.module.scss';

const DATE_DIVISION = 1000 * 60 * 60 * 24;

interface Props {
	article: IArticle;
}

export const ArticleCard = ({ article }: Props) => {
	const publishedDays =
		(+new Date() - +new Date(article.attributes.publishedAt)) / DATE_DIVISION;

	return (
		<Link
			href={article.attributes.page.data?.attributes.path || ''}
			className={styles.articleCard}
		>
			<div className={styles.upper}>
				<Image
					src={setUrlBeforeImageName(
						article.attributes.preview.data.attributes.url,
						SERVER_URL,
					)}
					width={380}
					height={200}
					alt={article.attributes.title}
					draggable={false}
					className={styles.preview}
				/>
				<div className={styles.articleContent}>
					<p className={styles.title}>{article.attributes.title}</p>
					<p className={styles.description}>{article.attributes.description}</p>
				</div>
			</div>
			<div className={styles.lower}>
				<time dateTime={article.attributes.publishedAt} className={styles.date}>
					{new Date(article.attributes.publishedAt).toLocaleDateString('ru', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</time>
				{publishedDays < 60 && (
					<div className={styles.tag}>
						<FireIcon className={styles.fireIcon} />
						<p className={styles.tagText}>Новое</p>
					</div>
				)}
				{publishedDays > 60 && (
					<div className={styles.tag}>
						<FireIcon className={styles.fireIcon} />
						<p className={styles.tagText}>Популярное</p>
					</div>
				)}
			</div>
		</Link>
	);
};
