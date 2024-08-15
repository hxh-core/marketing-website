// 16.08.2024
// Local cookie service / v.1.0.0
export class LocalStorageService {
	static getValue(name: string) {
		return localStorage.getItem(name);
	}

	static setValue(name: string, value: string) {
		localStorage.setItem(name, value);
	}
}
