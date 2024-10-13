'use client';

import styles from '@/app/styles/pages/NotFound.module.scss';
import { TelegramService } from '@/services';
import { appLinks } from '@/shared';
import { CustomButton } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string; message?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Отправка ошибки в Телеграм
		TelegramService.sendSiteError({
			error,
			info: {
				'User agent': navigator.userAgent,
			},
		});
	}, []);

	return (
		<>
			<Container>
				<div className={`${styles.notFound} ${styles.darkBg}`}>
					<p className={styles.code}>{500}</p>
					<p className={styles.text}>
						<span>Что-то пошло не&nbsp;так</span>
						<span>
							<Link href={appLinks.contacts.vk.writeMessage} target='_blank'>
								Свяжитесь
							</Link>{' '}
							с нами и сообщите об ошибке
						</span>
					</p>
					<div className={styles.buttons}>
						<div>
							<CustomButton.Button size='large' onClick={reset}>
								Перезагрузить
							</CustomButton.Button>
						</div>
						<div>
							<CustomButton.Link
								size='large'
								color='secondary'
								href={appLinks.user.main}
							>
								На главную
							</CustomButton.Link>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
