import { getIconFromName } from '@/shared/helpers/lib';
import { IService, IServicePrice } from '@/shared/types/ui/elements';
import { CustomButton } from '@/shared/ui';
import { ArrowIcon } from '@/shared/ui/icons';
import Link from 'next/link';
import styles from './ServiceCard.module.scss';

interface Props {
	data: IService;
}

const getServicePrice = (price: IServicePrice) => {
	if (!price) {
		return 'По договоренности';
	}

	switch (price.state) {
		case 'Фикс':
			return `${price.amount.toLocaleString('ru')}${price.currency}`;
		case 'От':
			return `От ${price.amount.toLocaleString('ru')}${price.currency}`;
		case 'По договоренности':
		default:
			return 'По договоренности';
	}
};

const getServiceCardTheme = (
	color: 'primary' | 'secondary',
	transition?: boolean,
) => {
	switch (color) {
		case 'primary':
			return transition
				? `${styles.primary} ${styles.primaryTransition}`
				: styles.primary;
		case 'secondary':
			return transition
				? `${styles.secondary} ${styles.secondaryTransition}`
				: styles.secondary;
		default:
			return transition
				? `${styles.primary} ${styles.primaryTransition}`
				: styles.primary;
	}
};

export const ServiceCard = ({ data }: Props) => {
	return (
		<div
			className={`${styles.serviceCard} ${getServiceCardTheme(data.attributes.color, data.attributes.hoverTransition)}`}
		>
			<div className={styles.header}>
				<div className={styles.titleWrapper}>
					<div className={styles.iconWrapper}>
						{getIconFromName(data.attributes.icon, styles.previewIcon)}
					</div>
					<p className={styles.title}>{data.attributes.title}</p>
				</div>
				{data.attributes.slug && (
					<Link href={data.attributes.slug} className={styles.linkIcon}>
						<ArrowIcon className={styles.arrowLinkIcon} />
					</Link>
				)}
			</div>
			<div className={styles.content}>
				<p className={styles.description}>{data.attributes.description}</p>
				<div className={styles.footer}>
					<div className={styles.button}>
						<CustomButton.Link {...data.attributes.button}></CustomButton.Link>
					</div>
					{data.attributes.oldPrice && (
						<p className={styles.oldPrice}>
							<s>{getServicePrice(data.attributes.oldPrice)}</s>
						</p>
					)}
					<p className={styles.price}>
						{getServicePrice(data.attributes.price)}
					</p>
				</div>
			</div>
		</div>
	);
};
