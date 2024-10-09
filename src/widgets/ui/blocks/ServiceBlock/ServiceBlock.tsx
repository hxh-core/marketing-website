import { getAnimationStyle } from '@/shared/helpers/lib';
import { IServiceBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { ServiceCard, Title } from '@/widgets/ui/elements';
import styles from './ServiceBlock.module.scss';

interface Props {
	data: IServiceBlockProps;
	index: number;
}

export const ServiceBlock = ({ data, index }: Props) => {
	const content = data.data.data;

	return (
		<BlockWithTitle
			title={data.title}
			id={data.blockId}
			className={getAnimationStyle('from-bottom-to-top')}
		>
			<Container>
				<Title title={data.title} index={index} />
				<div className={styles.services}>
					{content.map((service, index) => (
						<ServiceCard key={index} data={service} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
