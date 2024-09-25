'use client';

import type { IArticle } from '@/shared/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BreadCrumbs.module.scss';

interface Props {
	type: 'article' | string;
	article?: IArticle;
}

export const BreadCrumbs = ({ type, article }: Props) => {
	// const router = useRouter();
	const path = usePathname().split('/').slice(1);

	if (type === 'article') {
		return (
			<div
				className={styles.breadCrumbs}
				itemScope
				itemType='https://schema.org/BreadcrumbList'
			>
				{/* <button
					type='button'
					className={styles.backButton}
					onClick={() => router.back()}
				>
					<ArrowIcon className={styles.backIcon} />
				</button> */}
				<div className={styles.links}>
					{path.map((item, index) => (
						<div
							className={styles.linkWrapper}
							itemProp='itemListElement'
							itemScope
							itemType='https://schema.org/ListItem'
							key={index}
						>
							<Link
								itemProp='item'
								className={`${styles.link} ${index === path.length - 1 ? styles.active : ''}`}
								href={`${index === 0 ? `/${item}` : `/${path[0]}/${item}`}`}
							>
								{index === 0 && (
									<>
										<span itemProp='name'>Блог</span>
										<meta
											itemProp='position'
											content={(index + 1).toString()}
										/>
									</>
								)}
								{index >= 1 && (
									<>
										<span itemProp='name'>{article?.attributes.title}</span>
										<meta
											itemProp='position'
											content={(index + 1).toString()}
										/>
									</>
								)}
							</Link>
							{index !== path.length - 1 && (
								<div className={styles.divider}>/</div>
							)}
						</div>
					))}
				</div>
			</div>
		);
	}

	return null;
};
