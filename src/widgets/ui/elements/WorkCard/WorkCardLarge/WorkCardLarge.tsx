import type { IWorkCardLarge } from '@/shared/types';
import styles from './WorkCardLarge.module.scss';

interface Props {
	data: IWorkCardLarge;
}

export const WorkCardLarge = ({ data }: Props) => {
	return <div className={styles.workCard}>WorkCardLarge</div>;
};
