import { getAnimationStyle } from '@/shared/helpers/lib';
import { IWorksMiniProps } from '@/shared/types';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { Title, WorkCardMini } from '../../elements';
import styles from './WorkCardsMini.module.scss';

interface Props {
	data: IWorksMiniProps;
}

export const WorkCardsMini = ({ data }: Props) => {
	const content = data.data.data;

	return (
		<BlockWithTitle id={data.blockId}>
			<Container className={getAnimationStyle('from-bottom-to-top')}>
				<Title title={data.title} />
				<div className={styles.workCardsMini}>
					{content.map((work, index) => (
						<WorkCardMini key={index} data={work} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
