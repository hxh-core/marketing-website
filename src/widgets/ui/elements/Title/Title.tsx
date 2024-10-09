import type { ITitle } from '@/shared/types/ui/elements';
import { HeadingByIndex } from '@/shared/ui/helpers';
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
				{title.subtitle && (
					<div
						className={styles.subtitle}
						dangerouslySetInnerHTML={{ __html: title.subtitle }}
					></div>
				)}
			</div>
		</div>
	);
};
