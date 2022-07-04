import { IMessaging, IPersistency } from '../../interfaces'

export class Persistency implements IPersistency {
	constructor(private readonly messaging: IMessaging) {}

	processOrder(cartAmount: number): void {
		this.messaging.statusMessage(
			`Your order with total of R$${cartAmount} has been processed.`
		)
	}

	saveOrder(): void {
		this.messaging.statusMessage('Your order has been confirmed.')
	}

	closeOrder(): void {
		this.messaging.statusMessage('Your order has been completed.')
	}
}
