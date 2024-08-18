import { SERVER_URL } from '@/shared';
import type { IWorkCardMini } from '@/shared/types';
import { ArrowIcon } from '@/shared/ui/icons';
import { setUrlBeforeImageName } from '@hxh-core/react/dist/helpers';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkCardMini.module.scss';

interface Props {
	data: IWorkCardMini;
}

export const WorkCardMini = ({ data }: Props) => {
	return (
		<Link
			href={data.attributes.link.href}
			target={data.attributes.link.target}
			title={data.attributes.link.label}
			className={styles.workCard}
			itemProp='hasPart'
			itemScope
			itemType='https://schema.org/CreativeWork'
		>
			<meta itemProp='url' content={data.attributes.link.href} />
			<div className={styles.imageWrapper}>
				<Image
					src={setUrlBeforeImageName(
						data.attributes.image.data.attributes.url,
						SERVER_URL,
					)}
					alt={data.attributes.title}
					width={545}
					height={300}
					draggable={false}
					className={styles.image}
				/>
			</div>

			<div className={styles.content}>
				<p className={styles.title} itemProp='name'>
					{data.attributes.title}
				</p>
				<div className={styles.lowerString}>
					<p
						className={styles.tag}
						itemProp='about'
						itemScope
						itemType='https://schema.org/Thing'
					>
						{data.attributes.tag}
					</p>
					<div className={styles.icon}>
						<ArrowIcon />
					</div>
				</div>
				<meta itemProp='description' content={data.attributes.title} />
				<meta
					itemProp='image'
					content={data.attributes.image.data.attributes.url}
				/>
			</div>
		</Link>
	);
};
