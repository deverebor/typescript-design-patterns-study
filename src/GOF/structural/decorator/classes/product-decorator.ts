import { IProduct } from '../interfaces'

export class ProductDecorator implements IProduct {
	constructor(protected product: IProduct) {}

	get price(): number {
		return this.product.price
	}

	get name(): string {
		return this.product.name
	}
}
