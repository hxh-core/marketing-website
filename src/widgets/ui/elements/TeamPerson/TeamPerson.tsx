'use client';

import { SERVER_URL } from '@/shared';
import { getIconFromName } from '@/shared/helpers/lib';
import type { ITeamPerson } from '@/shared/types/ui/elements';
import { CustomButton } from '@/shared/ui';
import { setUrlBeforeImageName } from '@hxh-core/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TeamPerson.module.scss';

interface Props {
	data: ITeamPerson;
}
export const TeamPerson = ({ data }: Props) => {
	return (
		<div className={styles.teamPerson}>
			<div className={styles.contentWrapper}>
				<div className={styles.personImageWrapper}>
					<Image
						src={setUrlBeforeImageName(
							data.attributes.image.data.attributes.url,
							SERVER_URL,
						)}
						className={styles.personImage}
						alt={`${data.attributes.name} - ${data.attributes.job} фото`}
						width={505}
						height={214}
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.name}>
						<p className={styles.personName}>{data.attributes.name}</p>
						<p className={styles.personJob}>{data.attributes.job}</p>
					</div>
					{data.attributes.info.map((text, index) => (
						<div className={styles.labelValue} key={index}>
							<p className={styles.label}>{text.label}</p>
							<p className={styles.value}>{text.value}</p>
						</div>
					))}
					<div className={styles.labelValue}>
						<p className={styles.label}>Контакты</p>
						<div className={styles.contacts}>
							{data.attributes.contacts.map((contact, index) => (
								<Link
									href={contact.href}
									target='_blank'
									className={styles.icon}
									key={index}
									aria-label={contact.label}
								>
									{getIconFromName(contact.socialNetwork)}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			{data.attributes.contactLink && data.attributes.contactLink.children && (
				<CustomButton.Link {...data.attributes.contactLink}></CustomButton.Link>
			)}
		</div>
	);
};
