import styles from '@/app/styles/pages/NotFound.module.scss';
import { appLinks } from '@/shared';
import { CustomButton } from '@/shared/ui';
import { Container } from '@/shared/ui/layout';

export default function NotFoundPage() {
	return (
		<>
			<Container>
				<div className={`${styles.notFound} ${styles.darkBg}`}>
					<p className={styles.code}>{404}</p>
					<p className={styles.text}>
						<span>Такой страницы не&nbsp;существует.</span>
						<span>
							Возможно, она была удалена, либо в&nbsp;ссылке допущена ошибка
						</span>
					</p>
					<div>
						<CustomButton.Link size='large' href={appLinks.user.main}>
							На главную
						</CustomButton.Link>
					</div>
				</div>
			</Container>
		</>
	);
}
