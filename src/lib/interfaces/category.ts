import type { Product } from './product';

export interface Category {
	id: string;
	name: string;
	description: string;
	readonly products: Product[];
}
