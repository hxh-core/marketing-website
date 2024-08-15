'use client';

import { HelpIcon } from '@/shared/ui/icons';
import styles from './HelpText.module.scss';

interface HelpTextProps {
	text: string;
	className?: string;
}

export const HelpText = ({ text, className }: HelpTextProps) => {
	return (
		<button
			aria-label={text.replace(/(<([^>]+)>)/gi, ' ')}
			className={`${styles.helpText} ${className ? className : ''}`}
		>
			<div className={styles.helpIconWrapper}>
				<HelpIcon ariaLabel={text} className={styles.helpIcon} />
			</div>
			<div
				className={styles.helpTextWrapper}
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
		</button>
	);
};
