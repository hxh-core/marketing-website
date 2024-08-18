import { getIconFromName } from '@/shared/helpers/lib';
import type { IFooter } from '@/shared/types/ui/elements';
import Link from 'next/link';
import { CustomButton } from '../CustomButton/CustomButton';
import { Container } from '../layout';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';

interface FooterProps {
	data: IFooter;
}

export const Footer = ({ data }: FooterProps) => {
	return (
		<footer
			className={`${styles.footer}`}
			id='footer'
			itemScope
			itemType='https://schema.org/Organization'
		>
			<div className={styles.upper}>
				<Container size='medium' className={styles.upperContainer}>
					<div className={styles.logo}>
						<Logo
							logo={data.attributes.logo.name}
							color={data.attributes.logo.color}
						/>
						{data.attributes.logo.description && (
							<p className={styles.description} itemProp='description'>
								{data.attributes.logo.description}
							</p>
						)}
					</div>
					<div className={styles.pages}>
						{data.attributes.pages.map((page) => (
							<Link
								href={page.href}
								className={styles.pageLink}
								key={page.id}
								target={page.target}
							>
								{page.label}
							</Link>
						))}
					</div>
					{data.attributes.text && (
						<div className={styles.text}>
							<p className={styles.textTitle}>{data.attributes.text.label}</p>
							<CustomButton.Link
								{...data.attributes.text.link}
							></CustomButton.Link>
						</div>
					)}
				</Container>
			</div>
			{data.attributes.moreLinks && data.attributes.moreLinks.length !== 0 && (
				<div className={styles.medium}>
					<Container size='medium' className={styles.mediumContainer}>
						{data.attributes.moreLinks.map((link) => (
							<Link
								href={link.href}
								target={link.target}
								className={styles.mediumLink}
								key={link.id}
								aria-label={link.label}
							>
								{link.label}
							</Link>
						))}
					</Container>
				</div>
			)}
			<div className={styles.lower}>
				<Container size='medium' className={styles.lowerContainer}>
					<p className={styles.copyright} itemProp='copyrightYear'>
						{data.attributes.copyrightText}
					</p>
					<div className={styles.contacts}>
						{data.attributes.contacts.map((contact) => (
							<Link
								href={contact.href}
								target='_blank'
								className={styles.icon}
								key={contact.id}
								aria-label={contact.label}
							>
								{getIconFromName(contact.socialNetwork, '', 'dark')}
							</Link>
						))}
					</div>
				</Container>
			</div>
		</footer>
	);
};
