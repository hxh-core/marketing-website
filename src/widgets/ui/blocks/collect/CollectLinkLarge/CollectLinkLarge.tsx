import { getAnimationStyle } from '@/shared/helpers/lib';
import { ICollectLinkLargeBlockProps } from '@/shared/types';
import { CustomButton } from '@/shared/ui';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { Container } from '@/shared/ui/layout';
import styles from './CollectLinkLarge.module.scss';

interface Props {
	data: ICollectLinkLargeBlockProps;
	index: number;
}

export const CollectLinkLarge = ({ data, index }: Props) => {
	const content = data.data.data.attributes;

	return (
		<div
			className={`${styles.collectLinkLarge} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			<Container>
				<div className={styles.collectLinkContent}>
					<HeadingByIndex
						index={index}
						props={{
							className: styles.title,
							dangerouslySetInnerHTML: {
								__html: content.title,
							},
						}}
					/>
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
