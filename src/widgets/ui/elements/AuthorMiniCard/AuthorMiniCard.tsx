import { SERVER_URL } from '@/shared';
import type { IArticle, IAuthor } from '@/shared/types';
import { BriefcaseIcon, UpdateIcon } from '@/shared/ui/icons';
import { setUrlBeforeImageName } from '@hxh-core/react/dist/helpers';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AuthorMiniCard.module.scss';

interface Props {
	author: IAuthor;
	article?: IArticle;
	showMoreAuthorArticles?: boolean;
}

export const AuthorMiniCard = ({
	author,
	article,
	showMoreAuthorArticles,
}: Props) => {
	return (
		<div className={styles.articleMiniCard}>
			<Image
				src={setUrlBeforeImageName(
					author.attributes.photo.data.attributes.url,
					SERVER_URL,
				)}
				width={100}
				height={100}
				draggable={false}
				className={styles.authorPhoto}
				alt={author.attributes.name}
			/>
			<meta
				itemProp='image'
				content={setUrlBeforeImageName(
					author.attributes.photo.data.attributes.url,
					SERVER_URL,
				)}
			/>
			<div className={styles.authorInfo}>
				<p className={styles.authorName} itemProp='name'>
					{author.attributes.name}
				</p>
				<div className={styles.authorMoreInfo}>
					<div className={styles.authorInfoCard}>
						<BriefcaseIcon className={styles.authorInfoIcon} />
						<p itemProp='jobTitle' className={styles.authorInfoText}>
							{author.attributes.job}
						</p>
					</div>
					{article && article.attributes && article.attributes.updatedAt && (
						<div className={styles.authorInfoCard}>
							<UpdateIcon className={styles.authorInfoIcon} />
							<time
								dateTime={article.attributes.updatedAt}
								className={styles.authorInfoText}
							>{`Дата обновления: ${new Date(
								article.attributes.updatedAt,
							).toLocaleDateString('ru', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}`}</time>
						</div>
					)}
				</div>
			</div>
			{showMoreAuthorArticles &&
				author &&
				author.attributes.articles &&
				author.attributes.articles.data.length &&
				author.attributes.articles.data.filter(
					(item) => item.attributes.publishedAt && item.id !== article?.id,
				).length > 0 && (
					<div className={styles.authorInfo}>
						<p className={styles.authorName}>Другие статьи этого автора</p>
						<div className={styles.authorMoreInfo}>
							{author.attributes.articles.data
								.filter(
									(item) =>
										item.attributes.publishedAt && item.id !== article?.id,
								)
								.slice(0, 3)
								.map((article) => (
									<Link
										href={article.attributes.page.data?.attributes.path!}
										key={article.id}
										className={styles.moreArticleLink}
									>
										{article.attributes.title}
									</Link>
								))}
						</div>
					</div>
				)}
		</div>
	);
};
