import { createSut } from './Order.mock'

describe('Order class', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})
	it('should not finalizeCart when cart is empty', () => {
		const { sut, shoppingCartMock } = createSut()

		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, 'isEmptyCart')
			.mockReturnValueOnce(true)

		sut.finalizeCart()

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
		expect(sut.orderStatus).toBe('open')
	})

	it('should finalizeCart when cart is not empty', () => {
		const { sut, shoppingCartMock } = createSut()

		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, 'isEmptyCart')
			.mockReturnValueOnce(false)

		sut.finalizeCart()

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
		expect(sut.orderStatus).toBe('closed')
	})

	it('should call process method when finalize order is called', () => {
		const { sut, shoppingCartMock, persistencyMock } = createSut()

		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, 'totalWithDescount')
			.mockReturnValueOnce(10)

		const persistencyMockSpy = jest.spyOn(persistencyMock, 'processOrder')

		sut.finalizeCart()

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
		expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
	})

	it('should call process method and change orderStatus', () => {
		const { sut, persistencyMock } = createSut()

		const persistencyMockSpy = jest.spyOn(persistencyMock, 'processOrder')

		sut.process()

		expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
		expect(sut.orderStatus).toBe('pending')
	})

	it('should call save method and change orderStatus', () => {
		const { sut, persistencyMock } = createSut()

		const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder')

		sut.save()

		expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
		expect(sut.orderStatus).toBe('approved')
	})

	it('should close method call cart.clear()', () => {
		const { sut, shoppingCartMock, persistencyMock } = createSut()

		const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear')
		const persistencyMockSpy = jest.spyOn(persistencyMock, 'closeOrder')

		sut.close()

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
		expect(persistencyMockSpy).toHaveBeenCalledTimes(1)
		expect(sut.orderStatus).toBe('closed')
	})

	it('should finalizeCart send console.log with customer name and identification number', () => {
		const { sut, customerMock, shoppingCartMock } = createSut()

		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, 'totalWithDescount')
			.mockReturnValueOnce(10)

		const customerGetNameMockSpy = jest
			.spyOn(customerMock, 'getName')
			.mockReturnValueOnce('Adeobaldo Pinto')

		const customerGetIdentificationNumberMockSpy = jest
			.spyOn(customerMock, 'getIdentificationNumber')
			.mockReturnValueOnce('123123123123')

		const finalizeCartSpy = jest.spyOn(console, 'log')

		sut.finalizeCart()

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
		expect(customerGetNameMockSpy).toHaveBeenCalledTimes(1)
		expect(customerGetIdentificationNumberMockSpy).toHaveBeenCalledTimes(1)
		expect(finalizeCartSpy).toHaveBeenCalledWith(
			'The client is Adeobaldo Pinto and his credentials are 123123123123',
		)
	})
})
