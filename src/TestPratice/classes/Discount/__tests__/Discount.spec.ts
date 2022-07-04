import {
	Discount,
	WithoutDiscount,
	FifityPercentDiscount,
	TenPercentDiscount,
} from '..'

const createSut = (className: new () => Discount): Discount => {
	return new className()
}

describe('Discount abstract class', () => {
	it('should have no discount', () => {
		const sut = createSut(WithoutDiscount)
		const value = 100

		expect(sut.applyDiscount(value)).toBeCloseTo(value)
	})

	it('should applay fifity percent descount', () => {
		const sut = createSut(FifityPercentDiscount)
		const value = 150.5
		const discountValue = 0.5
		const expected = value - value * discountValue

		expect(sut.applyDiscount(value)).toBeCloseTo(expected)
	})

	it('should applay ten percent descount', () => {
		const sut = createSut(TenPercentDiscount)
		const value = 150.5
		const discountValue = 0.1
		const expected = value - value * discountValue

		expect(sut.applyDiscount(value)).toBeCloseTo(expected)
	})
})
