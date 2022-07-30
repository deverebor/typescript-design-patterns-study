import { ECommerceShoppingCart } from '../classes/ecommerce-shopping-cart'
import { DiscountStrategy } from './discount-strategy'

export class DefaultDiscountStrategy extends DiscountStrategy {
	protected _discount = 0
	totalDiscountedFromCart(cart: ECommerceShoppingCart): number {
		const total = cart.total

		if (total >= 100 && total <= 200) {
			this._discount = 10
		} else if (total >= 200 && total < 300) {
			this._discount = 20
		} else if (total >= 300) {
			this._discount = 30
		}

		return total - total * (this._discount / 100)
	}
}
