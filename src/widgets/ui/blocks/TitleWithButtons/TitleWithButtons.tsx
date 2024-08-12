import bgHeaderImage from '@/data/user/images/Bg image header.webp';
import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITitleWithButtonsProps } from '@/shared/types/ui/blocks';
import { CustomButton } from '@/shared/ui';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { Container } from '@/shared/ui/layout';
import Image from 'next/image';
import styles from './TitleWithButtons.module.scss';

interface Props {
	data: ITitleWithButtonsProps;
	index: number;
}

export const TitleWithButtons = ({ data, index }: Props) => {
	const content = data.data.data.attributes;

	return (
		<div className={styles.mainScreen} id={data.blockId}>
			<div className={styles.bgImageDiv}>
				<Image
					className={styles.bgImage}
					src={bgHeaderImage}
					alt={''}
					width={1920}
					height={1080}
				/>
			</div>
			<Container className={getAnimationStyle(data.animation)} size='medium'>
				<div className={styles.content}>
					<div className={styles.titleWrapper}>
						<HeadingByIndex index={index} props={{ className: styles.title }}>
							{content.title}
						</HeadingByIndex>
						<p className={styles.subtitle}>
							{content.subtitle && content.subtitle}
						</p>
					</div>
					<div className={styles.buttons}>
						{content.buttons &&
							content.buttons.length > 0 &&
							content.buttons.map((link, index) => (
								<div key={index}>
									<CustomButton.Link {...link}></CustomButton.Link>
								</div>
							))}
					</div>
				</div>
			</Container>
		</div>
	);
};
