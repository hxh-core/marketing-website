import bgPhoto from '@/data/user/images/blue-gradient.webp';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITitleWithImageBlockProps } from '@/shared/types';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import styles from './TitleWithImage.module.scss';

interface Props {
	index: number;
	data: ITitleWithImageBlockProps;
}

export const TitleWithImage = ({ data, index }: Props) => {
	const content = data.data.data;
	return (
		<div
			className={`${styles.titleWithImageBlock} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			<Image
				src={bgPhoto}
				width={1920}
				height={1080}
				alt='Background photo'
				draggable={false}
			/>
			<Container>
				<HeadingByIndex index={index} props={{ className: styles.title }}>
					{content.attributes.title}
				</HeadingByIndex>
			</Container>
			<Image
				src={''}
				alt=''
				width={1000}
				height={630}
				className={styles.rightImage}
				draggable={false}
			/>
		</div>
	);
};
