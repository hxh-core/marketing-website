export type ISortTypeOption = 'Содержит' | 'Не содержит' | 'Равен' | 'Не равен';

export const strapiSortTypeOption = {
	Содержит: '$in',
	'Не содержит': '$notIn',
	Равен: '$eq',
	'Не равен': '$ne',
};
