import { StaticImageData } from "next/image";

export interface Country {
	value: string;
	label: StaticImageData;
}

export interface packageDataInterface {
	months: string;
	removedPrice: number;
	price: number;
	perMonth: number;
}
