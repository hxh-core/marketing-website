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
		<div
			className={`${styles.accordion} ${getIsOpen(isOpen)}`}
			onClick={setIsOpen}
		>
			<div className={styles.upper}>
				<p className={styles.title}>{accordion.ask}</p>
				<ArrowIcon className={styles.icon} />
			</div>
			<div
				className={styles.hiddenContent}
				style={
					isOpen ? { height: content.current?.scrollHeight } : { height: 0 }
				}
			>
				<div className={styles.divider}></div>
				<p className={styles.content} ref={content}>
					{accordion.answer}
				</p>
			</div>
		</div>
	);
};
