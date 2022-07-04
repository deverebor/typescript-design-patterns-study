import { Persistency } from '../index'
import { Messaging } from '../../../../SOLID/liskov-subistitution-principle/services/messaging'

describe('Persistency Class', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should Persistency class have all content from IPersistency and messaging varaible in constructor', () => {
		const messaging = new Messaging()
		const sut = new Persistency(messaging)

		expect(sut).toHaveProperty('processOrder')
		expect(sut).toHaveProperty('saveOrder')
		expect(sut).toHaveProperty('closeOrder')
		expect(sut).toHaveProperty('messaging')
	})

	it('should processOrder return undefined', () => {
		const messaging = new Messaging()
		const persistency = new Persistency(messaging)

		expect(persistency.processOrder(10)).toBeUndefined()
	})

	it('should processOrder show cartAmount in statusMessage', () => {
		const messaging = new Messaging()
		const persistency = new Persistency(messaging)
		const processOrderSpy = jest.spyOn(messaging, 'statusMessage')

		persistency.processOrder(10)

		expect(processOrderSpy).toHaveBeenCalledWith(
			'Your order with total of R$10 has been processed.'
		)
		expect(processOrderSpy).toHaveBeenCalledTimes(1)
	})

	it('should processOrder be called with cartAmount parameter', () => {
		const messaging = new Messaging()
		const persistency = new Persistency(messaging)
		const processOrderSpy = jest.spyOn(persistency, 'processOrder')

		persistency.processOrder(10)

		expect(processOrderSpy).toHaveBeenCalledWith(10)
		expect(processOrderSpy).toHaveBeenCalledTimes(1)
	})

	it('should saveOrder return undefined', () => {
		const messaging = new Messaging()
		const sut = new Persistency(messaging)

		expect(sut.saveOrder()).toBeUndefined()
	})

	it('should  saveOrder use statusMessage from Messaging class', () => {
		const messaging = new Messaging()
		const sut = new Persistency(messaging)
		const saveOrderSpy = jest.spyOn(messaging, 'statusMessage')

		sut.saveOrder()

		expect(saveOrderSpy).toHaveBeenCalledTimes(1)
		expect(saveOrderSpy).toHaveBeenCalledWith('Your order has been confirmed.')
	})

	it('should closeOrder return undefined', () => {
		const messaging = new Messaging()
		const sut = new Persistency(messaging)

		expect(sut.closeOrder()).toBeUndefined()
	})

	it('should  closeOrder use statusMessage from Messaging class', () => {
		const messaging = new Messaging()
		const sut = new Persistency(messaging)
		const closeOrderSpy = jest.spyOn(messaging, 'statusMessage')

		sut.closeOrder()

		expect(closeOrderSpy).toHaveBeenCalledTimes(1)
		expect(closeOrderSpy).toHaveBeenCalledWith('Your order has been completed.')
	})
})
