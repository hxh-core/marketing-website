import { getAnimationStyle } from '@/shared/helpers/lib';
import { ICollectLinkMiniBlockProps } from '@/shared/types';
import { CustomButton } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import { InfinityScrollText } from '@/widgets/ui/elements';
import styles from './CollectLinkMini.module.scss';

interface Props {
	data: ICollectLinkMiniBlockProps;
}
export const CollectLinkMini = ({ data }: Props) => {
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
							<h3 className={styles.title}>{content.title}</h3>
							<div className={styles.lower}>
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
				</div>
			</div>
			{content.infinityBar && <InfinityScrollText text={content.infinityBar} />}
		</div>
	);
};
