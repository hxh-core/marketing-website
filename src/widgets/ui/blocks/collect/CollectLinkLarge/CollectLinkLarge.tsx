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
					<h3 className={styles.title}>{content.title}</h3>
					<p className={styles.description}>{content.description}</p>
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
