import { ECommerceShoppingCart } from '../classes/ecommerce-shopping-cart'

export class DiscountStrategy {
	protected _discount = 0

	totalDiscountedFromCart(cart: ECommerceShoppingCart): number {
		return cart.total
	}
}
