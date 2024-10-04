import { getIconFromName, getPriceCurrencyFormat } from '@/shared/helpers/lib';
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

const getServicePriceType = (price: IServicePrice) => {
	if ('amount' in price) {
		return price;
	} else {
		return price;
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
			itemScope
			itemType='http://schema.org/Service'
		>
			<div className={styles.header}>
				<div className={styles.titleWrapper}>
					<div className={styles.iconWrapper}>
						{getIconFromName(data.attributes.icon, styles.previewIcon)}
					</div>
					<p itemProp='name' className={styles.title}>
						{data.attributes.title}
					</p>
				</div>
				{data.attributes.slug && data.attributes.slug.href && (
					<Link
						href={data.attributes.slug.href}
						aria-label={data.attributes.slug.label}
						target={data.attributes.slug.target}
						className={styles.linkIcon}
						itemProp='url'
					>
						<ArrowIcon className={styles.arrowLinkIcon} />
					</Link>
				)}
			</div>
			<div className={styles.content}>
				<div
					itemProp='description'
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.attributes.description }}
				></div>
				<div className={styles.footer}>
					<div className={styles.button}>
						<CustomButton.Link
							{...data.attributes.button}
							itemProp='url'
							className={styles.button}
						></CustomButton.Link>
					</div>
					{data.attributes.oldPrice && (
						<p className={styles.oldPrice}>
							<s>{getServicePrice(data.attributes.oldPrice)}</s>
						</p>
					)}
					{data.attributes.price && (
						<p
							className={styles.price}
							itemProp='offers'
							itemScope
							itemType='https://schema.org/Offer'
						>
							{'amount' in data.attributes.price && (
								<meta
									itemProp='price'
									content={data.attributes.price.amount.toString()}
								/>
							)}
							<meta
								itemProp='priceCurrency'
								content={getPriceCurrencyFormat(data.attributes.price.currency)}
							/>
							{getServicePrice(data.attributes.price)}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};
