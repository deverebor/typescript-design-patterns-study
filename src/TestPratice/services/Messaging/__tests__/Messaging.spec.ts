import { Messaging } from '../index'

describe('Messaging class', () => {
	it('should Messaging class have all content from IMessaging interface', () => {
		const sut = new Messaging()

		expect(sut).toHaveProperty('statusMessage')
	})

	it('should statusMessage display messages', () => {
		const sut = new Messaging()
		const statusMessageSpy = jest.spyOn(sut, 'statusMessage')

		sut.statusMessage('Order status: Order received')

		expect(statusMessageSpy).toHaveBeenCalledWith(
			'Order status: Order received'
		)
		expect(statusMessageSpy).toHaveBeenCalledTimes(1)
	})

	it('should statusMessage call console.log to show an message', () => {
		const sut = new Messaging()
		const consoleLogSpy = jest.spyOn(console, 'log')

		sut.statusMessage('Order status: Order received')

		expect(consoleLogSpy).toHaveBeenCalledWith(
			'Order status: Order status: Order received'
		)
		expect(consoleLogSpy).toHaveBeenCalledTimes(1)
	})
})
