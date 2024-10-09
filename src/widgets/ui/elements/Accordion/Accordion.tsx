'use client';

import type { IAccordion } from '@/shared/types/ui/elements';
import { ArrowIcon } from '@/shared/ui/icons';
import { getNeedStyle } from '@hxh-core/react/dist/helpers';
import { useRef } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
	accordion: IAccordion;
	isOpen: boolean;
	setIsOpen: () => void;
};

export const Accordion = ({ accordion, isOpen, setIsOpen }: AccordionProps) => {
	const content = useRef<HTMLDivElement>(null);

	return (
		<button
			className={`${styles.accordion} ${getNeedStyle({
				isActive: isOpen,
				styles: styles,
				needStyle: styles.open,
			})}`}
			type='button'
			onClick={setIsOpen}
			itemScope
			itemType='https://schema.org/Question'
		>
			<div className={styles.upperButton}>
				<p className={styles.title} itemProp='name'>
					{accordion.ask}
				</p>
				<ArrowIcon className={styles.icon} />
			</div>
			<div
				className={styles.hiddenContent}
				style={
					isOpen ? { height: content.current?.scrollHeight } : { height: 0 }
				}
				itemScope
				itemProp='acceptedAnswer'
				itemType='https://schema.org/Answer'
			>
				<div className={styles.divider}></div>
				<div
					itemProp='text'
					className={styles.content}
					ref={content}
					dangerouslySetInnerHTML={{ __html: accordion.answer }}
				></div>
			</div>
		</button>
	);
};
