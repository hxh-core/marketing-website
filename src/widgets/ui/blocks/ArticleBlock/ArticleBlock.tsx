'use client';

import { SERVER_URL } from '@/shared';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { IArticleBlockProps } from '@/shared/types/ui/blocks/IArticleBlockProps';
import { CalendarIcon, EyeIcon } from '@/shared/ui/icons';
import { Container } from '@/shared/ui/layout';
import { setUrlBeforeImageName } from '@hxh-core/react/dist/helpers';
import Image from 'next/image';
import { AuthorMiniCard, BreadCrumbs } from '../../elements';
import styles from './ArticleBlock.module.scss';

interface Props {
	data: IArticleBlockProps;
}

export const ArticleBlock = ({ data }: Props) => {
	const content = data.data.data.attributes;

	return (
		<article
			className={`${styles.articleBlock} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
			itemScope
			itemType='https://schema.org/Article'
		>
			<Container>
				<BreadCrumbs type='article' article={data.data.data} />
				<h1 className={styles.title}>{content.title}</h1>
				<div className={styles.articleContainer}>
					<div className={styles.articleInfo}>
						<div className={styles.articleInfoWrapper}>
							<CalendarIcon className={styles.grayIcon} />
							<meta itemProp='dateCreated' content={content.createdAt} />
							<meta itemProp='dateModified' content={content.updatedAt} />
							<time
								itemProp='datePublished'
								dateTime={content.publishedAt}
								className={styles.articleInfoText}
							>
								{new Date(content.publishedAt).toLocaleDateString('ru')}
							</time>
						</div>
						<p className={styles.upperDivider}>|</p>
						<div className={styles.articleInfoWrapper}>
							<EyeIcon className={`${styles.grayIcon} ${styles.eyeIcon}`} />
							<p className={styles.articleInfoText}>{content.viewsCount}</p>
						</div>
					</div>
					<div className={styles.articleImageWrapper}>
						<Image
							src={setUrlBeforeImageName(
								content.preview.data.attributes.url,
								SERVER_URL,
							)}
							alt={content.title}
							width={800}
							height={360}
							quality={100}
							className={styles.articleImage}
						/>
						<meta
							itemProp='image'
							content={setUrlBeforeImageName(
								content.preview.data.attributes.url,
								SERVER_URL,
							)}
						/>
					</div>
					<div
						itemProp='articleBody'
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: content.content }}
					></div>
					<div
						className={styles.authorCard}
						itemScope
						itemType='https://schema.org/Person'
					>
						<AuthorMiniCard
							author={content.author.data}
							article={data.data.data}
							showMoreAuthorArticles
						/>
					</div>
				</div>
			</Container>
		</article>
	);
};
