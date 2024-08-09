'use client';

import { getAnimationStyle } from '@/shared/helpers/lib';
import { IAdvantagesBlockProps } from '@/shared/types';
import horizontalFingerAnimation from '@/shared/ui/icons/lottie/HorizontalFinger.icon.json';
import { BlockWithTitle, Container } from '@/shared/ui/layout';
import dynamic from 'next/dynamic';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Title } from '../../elements';
import styles from './Advantages.module.scss';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface Props {
	data: IAdvantagesBlockProps;
}

const getAdvantageStyles = (isSelected?: boolean, isBig?: boolean) => {
	return `${styles.advantage} ${isSelected ? styles.selected : ''} ${
		isBig ? styles.big : ''
	}`;
};

export const Advantages = ({ data }: Props) => {
	return (
		<BlockWithTitle
			className={`${getAnimationStyle(data.animation)} ${styles.advantages}`}
			id={data.blockId}
		>
			<Container>
				<Title title={data.title} />
				<div className={styles.scrollHorizontalContainer}>
					<Swiper
						wrapperClass={styles.swiperWrapper}
						className={styles.advantagesSwiperWrapper}
						spaceBetween={30}
						slidesPerView={'auto'}
						direction='horizontal'
						allowTouchMove={true}
						mousewheel={{
							enabled: true,
							forceToAxis: true,
						}}
						modules={[Mousewheel]}
					>
						{data.data.map((advantage) => (
							<SwiperSlide
								className={`${styles.advantageCard} ${getAdvantageStyles(advantage.isSelected, advantage.isBig)}`}
								key={advantage.id}
							>
								<p className={styles.title}>{advantage.title}</p>
								<p className={styles.description}>{advantage.description}</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<Lottie
					alt='Horizontal scroll'
					className={styles.fingerAnimation}
					animationData={horizontalFingerAnimation}
					loop
				/>
			</Container>
		</BlockWithTitle>
	);
};
