import type { ITitle } from '@/shared/types/ui/elements';
import { ArrowIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './Title.module.scss';

interface TitleProps {
	title?: ITitle;
}

export const Title = ({ title }: TitleProps) => {
	if (!title || !title.label) {
		return;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: title.label }}
				></h3>
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
