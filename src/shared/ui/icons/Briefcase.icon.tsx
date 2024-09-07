import type { IconType } from '@/shared/types/ui/shared';

export const BriefcaseIcon = ({ className, color }: IconType) => {
	return (
		<svg
			viewBox='0 0 20 19'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M10 10V10.01M1 7C1 6.46957 1.21071 5.96086 1.58579 5.58579C1.96086 5.21071 2.46957 5 3 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V7Z'
				stroke='url(#paint0_linear_1923_3115)'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1 11C3.79158 12.4067 6.87403 13.1394 10 13.1394C13.126 13.1394 16.2084 12.4067 19 11'
				stroke='url(#paint1_linear_1923_3115)'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_1923_3115'
					x1='1'
					y1='9.5'
					x2='19'
					y2='9.5'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#DDECFF' />
					<stop offset='1' stopColor='#BADAFF' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_1923_3115'
					x1='1'
					y1='12.0697'
					x2='19'
					y2='12.0697'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#DDECFF' />
					<stop offset='1' stopColor='#BADAFF' />
				</linearGradient>
			</defs>
		</svg>
	);
};
