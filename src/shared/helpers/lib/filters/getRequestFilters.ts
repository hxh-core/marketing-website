import type { IFilters } from '@/shared/types';
import { Filters } from './Filters';

// 07.09.2024 / v.1.0.0
// Функция принимает объект с опциями фильтрации и возвращает их в виде строки
export const getRequestFilters = (filters: IFilters): string => {
	const newFilters = new Filters(filters.sort, filters.pagination);
	return newFilters.query;
};
