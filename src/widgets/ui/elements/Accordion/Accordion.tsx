'use client';

import type { IAccordion } from '@/shared/types/ui/elements';
import { ArrowIcon } from '@/shared/ui/icons';
import { useRef } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
	accordion: IAccordion;
	isOpen: boolean;
	setIsOpen: () => void;
};

const getIsOpen = (isOpen: boolean) => (isOpen ? styles.open : '');

export const Accordion = ({ accordion, isOpen, setIsOpen }: AccordionProps) => {
	const content = useRef<HTMLDivElement>(null);

	return (
		<div className={`${styles.accordion} ${getIsOpen(isOpen)}`}>
			<button type='button' onClick={setIsOpen} className={styles.upperButton}>
				<p className={styles.title}>{accordion.ask}</p>
				<ArrowIcon className={styles.icon} />
			</button>
			<div
				className={styles.hiddenContent}
				style={
					isOpen ? { height: content.current?.scrollHeight } : { height: 0 }
				}
			>
				<div className={styles.divider}></div>
				<div
					className={styles.content}
					ref={content}
					dangerouslySetInnerHTML={{ __html: accordion.answer }}
				></div>
			</div>
		</div>
	);
};
