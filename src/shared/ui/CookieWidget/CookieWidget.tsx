'use client';

import { LocalStorageService } from '@/services';
import type { ICookie } from '@/shared/types';
import { useEffect, useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { Container } from '../layout';
import styles from './CookieWidget.module.scss';

export interface CookieWidgetProps {
	data: ICookie;
}

export const CookieWidget = ({ data }: CookieWidgetProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const isCookieAgree = () => {
		const isAgreeCookie = LocalStorageService.getValue(
			data.attributes.cookieName,
		);
		return isAgreeCookie === 'true' ? true : false;
	};

	const agreeCookie = () => {
		LocalStorageService.setValue(data.attributes.cookieName, 'true');
		setIsOpen(false);
	};

	useEffect(() => {
		if (!isCookieAgree()) {
			setIsOpen(true);
		}
	}, []);

	return (
		<div className={`${styles.widget} ${isOpen ? styles.open : ''}`}>
			<Container className={styles.container}>
				<p className={styles.text}>
					{data.attributes.text
						? data.attributes.text
						: 'Используя наш веб-сайт, вы соглашаетесь с нашей политикой в отношении файлов cookie.'}
				</p>
				<div className={styles.buttons}>
					{data.attributes.infoButton && (
						<CustomButton.Link
							{...data.attributes.infoButton}
							className={styles.button}
						/>
					)}
					{data.attributes.closeButton ? (
						<CustomButton.Button
							{...data.attributes.closeButton}
							className={styles.button}
							onClick={agreeCookie}
						/>
					) : (
						<CustomButton.Button
							onClick={agreeCookie}
							type='button'
							color='primary'
							size='small'
							className={styles.button}
						>
							Понятно
						</CustomButton.Button>
					)}
				</div>
			</Container>
		</div>
	);
};
