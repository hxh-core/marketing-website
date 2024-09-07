import type { IconType } from '@/shared/types/ui/shared';

export const ClockIcon = ({ className, color }: IconType) => {
	return (
		<svg
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g clipPath='url(#clip0_1923_3124)'>
				<path
					d='M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10Z'
					stroke='url(#paint0_linear_1923_3124)'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10 5V10L13 13'
					stroke='url(#paint1_linear_1923_3124)'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<linearGradient
					id='paint0_linear_1923_3124'
					x1='1'
					y1='10'
					x2='19'
					y2='10'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#DDECFF' />
					<stop offset='1' stopColor='#BADAFF' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_1923_3124'
					x1='10'
					y1='9'
					x2='13'
					y2='9'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#DDECFF' />
					<stop offset='1' stopColor='#BADAFF' />
				</linearGradient>
				<clipPath id='clip0_1923_3124'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};
