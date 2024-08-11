import { getAnimationStyle } from '@/shared/helpers/lib';
import { ICollectLinkLargeBlockProps } from '@/shared/types';
import { CustomButton } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import styles from './CollectLinkLarge.module.scss';

interface Props {
	data: ICollectLinkLargeBlockProps;
}

export const CollectLinkLarge = ({ data }: Props) => {
	const content = data.data.data.attributes;

	return (
		<div
			className={`${styles.collectLinkLarge} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			<Container>
				<div className={styles.collectLinkContent}>
					<h3
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: content.title }}
					></h3>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: content.description }}
					></div>
					<div>
						<CustomButton.Link
							className={styles.button}
							{...content.button}
						></CustomButton.Link>
					</div>
				</div>
			</Container>
		</div>
	);
};
