import { IECommerceProduct } from '../interfaces'
import { DiscountStrategy } from '../strategies/discount-strategy'

export class ECommerceShoppingCart {
	private _products: IECommerceProduct[] = []
	private _discountStrategy: DiscountStrategy = new DiscountStrategy()

	addProduct(...products: IECommerceProduct[]) {
		products.forEach((product) => this._products.push(product))
	}

	get products(): IECommerceProduct[] {
		return this._products
	}

	get total(): number {
		return this._products.reduce(
			(acc: number, product: IECommerceProduct) => acc + product.price,
			0,
		)
	}

	get totalWithDiscount(): number {
		return this._discountStrategy.totalDiscountedFromCart(this)
	}

	set discountStrategy(discount: DiscountStrategy) {
		this._discountStrategy = discount
	}

	showTotal(): void {
		console.log(`Cart total: ${this.total}`)
	}

	showTotalWithDiscount(): void {
		console.log(
			`Total with discount: ${this._discountStrategy.totalDiscountedFromCart(
				this,
			)}`,
		)
	}
}
