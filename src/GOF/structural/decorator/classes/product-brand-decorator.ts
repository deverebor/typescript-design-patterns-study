import { ProductDecorator } from './product-decorator'

export class ProductBrandDecorator extends ProductDecorator {
	get price(): number {
		return this.product.price + 20
	}
	get name(): string {
		return `${this.product.name} branded`
	}
}
