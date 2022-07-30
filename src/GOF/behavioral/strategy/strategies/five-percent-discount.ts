import { ECommerceShoppingCart } from '../classes/ecommerce-shopping-cart'
import { DiscountStrategy } from './discount-strategy'

export class FivePercentDiscount extends DiscountStrategy {
	protected _discount = 0

	totalDiscountedFromCart(cart: ECommerceShoppingCart): number {
		const total = cart.total

		if (total >= 150) {
			this._discount = 5
		}

		return total - total * (this._discount / 100)
	}
}
