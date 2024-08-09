import type { ICustomInput } from '@/shared/types';
import type { ErrorOption } from 'react-hook-form';

interface ValidatePhoneProps {
	input: ICustomInput;
	value: string;
}

export interface ValidatePhoneReturnValue {
	isValid: boolean;
	error: ErrorOption;
}

// 09.08.2024
// Функция для валидации телефона / v.1.0.0
export const validatePhone = ({
	input,
	value,
}: ValidatePhoneProps): ValidatePhoneReturnValue => {
	if (input.mask && input.inputProps?.type === 'tel') {
		const maskDigitsOnly = input.mask.replace(/\D/g, '');
		const valueDigitsOnly = value.replace(/\D/g, '');
		console.log(maskDigitsOnly, valueDigitsOnly);
		const isValid = maskDigitsOnly.length === valueDigitsOnly.length;

		console.log(isValid);

		if (!isValid) {
			return {
				isValid,
				error: {
					message: 'Поле обязательно для заполнения',
					type: 'validate',
				},
			};
		}
	}

	return {
		isValid: true,
		error: {},
	};
};
