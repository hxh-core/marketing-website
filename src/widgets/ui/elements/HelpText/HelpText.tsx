'use client';

import { HelpIcon } from '@/shared/ui/icons';
import styles from './HelpText.module.scss';

interface HelpTextProps {
	text: string;
	className?: string;
}

export const HelpText = ({ text, className }: HelpTextProps) => {
	const replaceText = text.replace(/(<([^>]+)>)/gi, ' ');

	if (!replaceText || text === '<p></p>') {
		return;
	}

	return (
		<button
			aria-label={replaceText}
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
