import { ICartItem } from './interfaces'

export class Product implements ICartItem {
	constructor(public name: string, public price: number) {}
}
