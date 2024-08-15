import type { IconType } from '@/shared/types/ui/shared';

export const HelpIcon = ({ className, ariaLabel }: IconType) => {
	return (
		<svg
			viewBox='0 0 16 16'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			aria-label={ariaLabel}
		>
			<path
				d='M8 5V8M8 11H8.0075M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z'
				stroke='#A7A7A7'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
