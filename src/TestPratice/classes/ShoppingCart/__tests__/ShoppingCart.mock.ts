import { ShoppingCart } from '..'
import { Discount } from '../../Discount'
import { ICartItem } from '../../../interfaces/'

const createDiscountMock = () => {
	class DiscountMock extends Discount {}
	return new DiscountMock()
}

const createCartItem = (name: string, price: number) => {
	class CartItemMock implements ICartItem {
		constructor(public name: string, public price: number) {}
	}

	return new CartItemMock(name, price)
}

export const createSut = () => {
	const discountMock = createDiscountMock()
	const sut = new ShoppingCart(discountMock)

	return { sut, discountMock }
}

export const createSutWithProducts = () => {
	const { sut, discountMock } = createSut()
	const cartItem1 = createCartItem('Product 1', 10)
	const cartItem2 = createCartItem('Product 2', 20)

	sut.addItem(cartItem1)
	sut.addItem(cartItem2)

	return { sut, discountMock }
}
