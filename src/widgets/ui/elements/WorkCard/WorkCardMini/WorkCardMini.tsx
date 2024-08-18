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
		>
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
				<p className={styles.title}>{data.attributes.title}</p>
				<div className={styles.lowerString}>
					<p className={styles.tag}>{data.attributes.tag}</p>
					<div className={styles.icon}>
						<ArrowIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};
