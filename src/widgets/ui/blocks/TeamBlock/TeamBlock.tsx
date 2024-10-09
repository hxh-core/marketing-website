import { getAnimationStyle } from '@/shared/helpers/lib';
import type { ITeamBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { TeamPerson, Title } from '@/widgets/ui/elements';
import styles from './TeamBlock.module.scss';

interface Props {
	data: ITeamBlockProps;
	index: number;
}

export const TeamBlock = ({ data, index }: Props) => {
	const content = data.data.data;

	return (
		<BlockWithTitle
			title={data.title}
			id={data.blockId}
			className={getAnimationStyle(data.animation)}
		>
			<Container size='medium'>
				<Title title={data.title} index={index} />
				<div className={styles.team}>
					{content.map((person, index) => (
						<TeamPerson key={person.id} data={person} />
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
