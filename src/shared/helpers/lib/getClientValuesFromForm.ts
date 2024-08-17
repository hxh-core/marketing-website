import type { ICollectDataFormBlockProps } from '@/shared/types';

interface ClientValues {
	[key: string]: string;
}

// 17.08.2024 / v1.0.0
// Функция приводит данные с форм сбора к читабельному виду
export const getClientValuesFromForm = (
	form: ICollectDataFormBlockProps,
	client: ClientValues,
): ClientValues => {
	// Приведение значений к читабельному виду
	const clientValues: ClientValues = {};

	for (let key of form.data.data.attributes.inputs) {
		if (key.label) {
			clientValues[key.label] = client[key.inputProps.name!];
			continue;
		} else {
			clientValues[key.inputProps.name!] = client[key.inputProps.name!];
		}
	}

	return clientValues;
};
