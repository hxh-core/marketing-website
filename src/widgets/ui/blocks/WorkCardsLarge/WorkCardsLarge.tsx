import { getAnimationStyle } from '@/shared/helpers/lib';
import { IWorksLargeProps } from '@/shared/types';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { Title, WorkCardLarge } from '../../elements';
import styles from './WorkCardsLarge.module.scss';

interface Props {
	data: IWorksLargeProps;
	index: number;
}

export const WorkCardsLarge = ({ data, index }: Props) => {
	const content = data.data.data;

	return (
		<BlockWithTitle id={data.blockId}>
			<Container className={getAnimationStyle('from-bottom-to-top')}>
				<Title title={data.title} index={index} />
				<div className={styles.workCardsLarge}>
					{content.map((work, index) => (
						<WorkCardLarge key={index} data={work} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
