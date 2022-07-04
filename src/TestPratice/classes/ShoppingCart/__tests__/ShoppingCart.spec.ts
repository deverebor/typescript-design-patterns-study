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

const createSut = () => {
	const discountMock = createDiscountMock()
	const sut = new ShoppingCart(discountMock)

	return { sut, discountMock }
}

const createSutWithProducts = () => {
	const { sut, discountMock } = createSut()
	const cartItem1 = createCartItem('Product 1', 10)
	const cartItem2 = createCartItem('Product 2', 20)

	sut.addItem(cartItem1)
	sut.addItem(cartItem2)

	return { sut, discountMock }
}

describe('ShoppingCart class', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})
	it('should be and empty cart when no product is created', () => {
		const { sut } = createSut()

		expect(sut.isEmptyCart()).toBe(true)
	})

	it('should has two cartItems', () => {
		const { sut } = createSutWithProducts()

		expect(sut.items.length).toBe(2)
	})

	it('should ShoppingCart has total and totalWithDiscount', () => {
		const { sut } = createSutWithProducts()

		expect(sut.totalCart()).toBe(30)
		expect(sut.totalWithDescount()).toBe(30)
	})

	it('should call applyDiscount once when totalWithDiscount is called', () => {
		const { sut, discountMock } = createSutWithProducts()
		const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount')

		sut.totalWithDescount()

		expect(discountMockSpy).toHaveBeenCalledTimes(1)
	})

	it('should call applyDiscount with totalWithDiscount when totalCart is called', () => {
		const { sut, discountMock } = createSutWithProducts()
		const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount')

		sut.totalWithDescount()

		expect(discountMockSpy).toHaveBeenCalledWith(sut.totalCart())
	})

	it('should add products and clear cart', () => {
		const { sut } = createSutWithProducts()

		expect(sut.items.length).toBe(2)
		expect(sut.isEmptyCart()).toBe(false)

		sut.clear()

		expect(sut.items.length).toBe(0)
		expect(sut.isEmptyCart()).toBe(true)
	})

	it('should add remove products', () => {
		const { sut } = createSutWithProducts()

		expect(sut.items.length).toBe(2)

		sut.removeItem(0)

		expect(sut.items.length).toBe(1)

		sut.removeItem(0)

		expect(sut.items.length).toBe(0)
		expect(sut.isEmptyCart()).toBe(true)
	})
})
