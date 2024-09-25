import { ISortTypeOption, strapiSortTypeOption } from '@/shared/types';

// 09.09.2024 / v.1.0.0
export const getSortType = (sortTypeOption?: ISortTypeOption) => {
	if (!sortTypeOption || !sortTypeOption.length) {
		return null;
	}

	return strapiSortTypeOption[sortTypeOption];
};

export const getSortQuery = (
	sortTypes: string[],
	sortField: string,
	sortTypeOption: string | null,
): string | null => {
	if (!sortTypeOption || !sortTypeOption.length) {
		return null;
	}

	const sortQuery: string[] = [];

	sortTypes.forEach((sortType, index) => {
		sortQuery.push(
			`filters[${sortField}][${sortTypeOption}][${index}]=${sortType}`,
		);
	});

	return sortQuery.join('&');
};
