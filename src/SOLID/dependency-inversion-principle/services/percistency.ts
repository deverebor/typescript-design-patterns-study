import { IMessaging, IPercistency } from '../classes/interfaces'

export class Percistency implements IPercistency {
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
