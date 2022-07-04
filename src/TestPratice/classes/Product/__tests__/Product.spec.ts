import { Product } from '../index'

const createSut = (name: string, price: number): Product => {
	return new Product(name, price)
}
describe('Product class', () => {
	it('should create one Product', () => {
		const name = 'product'
		const price = 10
		const sut = createSut(name, price)

		expect(sut.name).toBe(name)
		expect(sut.name).toBeTruthy()

		expect(sut.price).toBe(price)
		expect(sut.price).toBeTruthy()
	})
})
