'use client';

import { getAnimationStyle } from '@/shared/helpers/lib';
import type { IAccordionBlockProps } from '@/shared/types/ui/blocks';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import { Accordion, Title } from '@/widgets/ui/elements';
import { useState } from 'react';
import styles from './AccordionBlock.module.scss';

interface Props {
	data: IAccordionBlockProps;
	index: number;
}

export const AccordionBlock = ({ data, index }: Props) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<BlockWithTitle id={data.blockId}>
			<Container className={getAnimationStyle(data.animation)} size='medium'>
				<Title title={data.title} index={index} />
				<div className={styles.accordions}>
					{data.data.data.attributes.data.map((accordion, index) => (
						<Accordion
							accordion={accordion}
							key={accordion.id}
							isOpen={index === openIndex}
							setIsOpen={() => setOpenIndex(index)}
						/>
					))}
				</div>
			</Container>
		</BlockWithTitle>
	);
};
