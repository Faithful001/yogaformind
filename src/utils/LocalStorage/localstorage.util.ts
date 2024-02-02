export class localStorageClass {
	public static getFromStorage(name: string) {
		const data = localStorage.getItem(name);
		const parsedData = data && JSON.parse(data);
		return parsedData;
	}

	public static addToStorage(name: string, value: any) {
		const stringifiedValue = JSON.stringify(value);
		const data = localStorage.setItem(name, stringifiedValue);
		return data;
	}

	public static removeFromStorage(name: string) {
		const data = localStorage.removeItem(name);
		return data;
	}
}
