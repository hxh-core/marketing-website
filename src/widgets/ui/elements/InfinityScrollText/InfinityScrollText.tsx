import styles from './InfinityScrollText.module.scss';

interface Props {
	text: string;
}

// 08.08.2024
// Компонент принимает строку с разделителем |
const DELIMITER = '|';

export const InfinityScrollText = ({ text }: Props) => {
	const getTextArray = text.split(DELIMITER);
	return (
		<div className={styles.scrollText}>
			<div className={styles.scrollContainer}>
				{[...new Array(20)].map(() => {
					return getTextArray.map((text, index) => (
						<p className={styles.text} key={index}>
							{text}
						</p>
					));
				})}
			</div>
		</div>
	);
};
