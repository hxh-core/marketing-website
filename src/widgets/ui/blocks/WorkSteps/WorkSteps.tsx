import { getAnimationStyle } from '@/shared/helpers/lib';
import type { IWorkStepsBlockProps } from '@/shared/types';
import { StepDocumentIcon } from '@/shared/ui/icons';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { HelpText, Title } from '../../elements';
import styles from './WorkSteps.module.scss';

interface Props {
	index: number;
	data: IWorkStepsBlockProps;
}

export const WorkSteps = ({ data, index }: Props) => {
	const content = data.data.data.attributes.data;
	return (
		<BlockWithTitle
			className={`${getAnimationStyle(data.animation)} ${styles.workStepsBlock}`}
			id={data.blockId}
		>
			<Container>
				<Title index={index} title={data.title} />
				<div className={styles.steps}>
					{content.map((step) => (
						<div
							className={`${styles.step} ${step.color === 'secondary' ? styles.secondary : styles.primary}`}
							key={step.id}
						>
							<div
								className={styles.stepTitle}
								dangerouslySetInnerHTML={{ __html: step.label }}
							></div>
							<div className={styles.stepDescription}>
								<div dangerouslySetInnerHTML={{ __html: step.value }}></div>
								{step.helpText && (
									<HelpText text={step.helpText} className={styles.helpText} />
								)}
							</div>
							<StepDocumentIcon className={styles.stepIcon} />
						</div>
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
