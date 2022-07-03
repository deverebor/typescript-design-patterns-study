import { Messaging } from './messaging'

export class Percistency {
	private readonly messaging = new Messaging()

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
