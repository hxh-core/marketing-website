'use client';

import type { IArticle } from '@/shared/types';
import horizontalFingerAnimation from '@/shared/ui/icons/lottie/HorizontalFinger.icon.json';
import dynamic from 'next/dynamic';
import 'swiper/css';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import styles from './ArticlesCarousel.module.scss';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface Props {
	articles: IArticle[];
}

export const ArticlesCarousel = ({ articles }: Props) => {
	return (
		<div className={styles.scrollHorizontalContainer}>
			<Swiper
				wrapperClass={styles.swiperWrapper}
				className={styles.articlesSwiperWrapper}
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
				{articles.map((article) => (
					<SwiperSlide className={`${styles.articleCard}`} key={article.id}>
						<ArticleCard article={article} />
						{/* <p className={styles.title}>{article.attributes.title}</p>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{
								__html: article.attributes.content,
							}}
						></div> */}
					</SwiperSlide>
				))}
			</Swiper>
			<Lottie
				alt='Horizontal scroll'
				className={styles.fingerAnimation}
				animationData={horizontalFingerAnimation}
				loop
			/>
		</div>
	);
};
