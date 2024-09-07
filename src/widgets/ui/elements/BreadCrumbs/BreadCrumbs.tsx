'use client';

import type { IArticle } from '@/shared/types';
import { ArrowIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './BreadCrumbs.module.scss';

interface Props {
	type: 'article' | string;
	article?: IArticle;
}

export const BreadCrumbs = ({ type, article }: Props) => {
	const router = useRouter();
	const path = usePathname().split('/').slice(1);

	if (type === 'article') {
		return (
			<div className={styles.breadCrumbs}>
				<button
					type='button'
					className={styles.backButton}
					onClick={() => router.back()}
				>
					<ArrowIcon className={styles.backIcon} />
				</button>
				<div className={styles.links}>
					{path.map((item, index) => (
						<div className={styles.linkWrapper} key={index}>
							<Link
								className={`${styles.link} ${index === path.length - 1 ? styles.active : ''}`}
								href={`${index === 0 ? `/${item}` : `/${path[0]}/${item}`}`}
							>
								{index === 0 && 'Блог'}
								{index >= 1 && article?.attributes.title}
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
