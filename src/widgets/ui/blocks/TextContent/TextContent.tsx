import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITextContentBigBlockProps } from '@/shared/types';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { CalendarIcon } from '@/shared/ui/icons';
import { Container } from '@/shared/ui/layout';
import styles from './TextContent.module.scss';

interface Props {
	data: ITextContentBigBlockProps;
	index: number;
}

export const TextContent = ({ data, index }: Props) => {
	const content = data.data.data;

	return (
		<div
			className={`${styles.textContent} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			<Container>
				<HeadingByIndex index={index} props={{ className: styles.title }}>
					{data.title.label}
				</HeadingByIndex>
				<div className={styles.date}>
					<CalendarIcon className={styles.dateIcon} />
					<time
						dateTime={content.attributes.publishDate}
						className={styles.dateText}
					>
						{new Date(content.attributes.publishDate).toLocaleDateString('ru')}
					</time>
				</div>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content.attributes.content }}
				></div>
			</Container>
		</div>
	);
};
