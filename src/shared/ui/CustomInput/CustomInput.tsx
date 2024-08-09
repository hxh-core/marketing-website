'use client';

import type { ICustomInput } from '@/shared/types/ui/shared';
import InputMask from '@mona-health/react-input-mask';
import { useId } from 'react';
import styles from './CustomInput.module.scss';

// 12.07.2024
// Custom Input component / v.1.0.1
export const CustomInput = ({
	inputProps,
	label,
	error,
	mask,
}: ICustomInput) => {
	const id = useId();
	return (
		<label
			htmlFor={id}
			className={`${styles.inputWrapper} ${error ? styles.error : ''}`}
		>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
					{error && (
						<span className={styles.error}>{error.message?.toString()}</span>
					)}
				</label>
			)}
			{mask ? (
				<InputMask
					{...inputProps}
					className={styles.input}
					id={id}
					mask={mask}
				/>
			) : (
				<input {...inputProps} className={styles.input} id={id} />
			)}
		</label>
	);
};
