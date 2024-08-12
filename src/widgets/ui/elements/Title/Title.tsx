import type { ITitle } from '@/shared/types/ui/elements';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { ArrowIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './Title.module.scss';

interface TitleProps {
	title?: ITitle;
	index: number;
}

export const Title = ({ title, index }: TitleProps) => {
	if (!title || !title.label) {
		return;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<HeadingByIndex
					index={index}
					props={{
						className: styles.title,
						dangerouslySetInnerHTML: { __html: title.label },
					}}
				/>
				{title.link && title.link.label && (
					<Link
						className={styles.link}
						href={title.link.href}
						target={title.link.target}
					>
						<span>{title.link.label}</span>
						<ArrowIcon className={styles.icon} />
					</Link>
				)}
			</div>
		</div>
	);
};
