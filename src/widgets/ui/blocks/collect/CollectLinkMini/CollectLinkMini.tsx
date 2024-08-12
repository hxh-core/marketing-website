import { getAnimationStyle } from '@/shared/helpers/lib';
import { ICollectLinkMiniBlockProps } from '@/shared/types';
import { CustomButton } from '@/shared/ui';
import { HeadingByIndex } from '@/shared/ui/helpers';
import { Container } from '@/shared/ui/layout';
import { InfinityScrollText } from '@/widgets/ui/elements';
import styles from './CollectLinkMini.module.scss';

interface Props {
	data: ICollectLinkMiniBlockProps;
	index: number;
}
export const CollectLinkMini = ({ data, index }: Props) => {
	const content = data.data.data.attributes;

	return (
		<div
			className={`${styles.collectLinkMini} ${getAnimationStyle(data.animation)}`}
			id={data.blockId}
		>
			<div className={styles.collectLinkOutline}>
				<div className={styles.collectLinkMiniWrapper}>
					<div className={styles.collectLinkContent}>
						<Container>
							<HeadingByIndex
								index={index}
								props={{
									className: styles.title,
									dangerouslySetInnerHTML: { __html: content.title },
								}}
							/>
							<div className={styles.lower}>
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
				</div>
			</div>
			{content.infinityBar && <InfinityScrollText text={content.infinityBar} />}
		</div>
	);
};
