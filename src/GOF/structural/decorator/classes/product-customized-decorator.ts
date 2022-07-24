import { ProductDecorator } from './product-decorator'

export class ProductCustomizedDecorator extends ProductDecorator {
	get price(): number {
		return this.product.price + 50
	}
	get name(): string {
		return `${this.product.name} customized`
	}
}
