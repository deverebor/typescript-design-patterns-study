import { IShoppingOrderState } from '../interfaces'
import { ShoppingOrder } from '../shopping-order'

export class OrderRejected implements IShoppingOrderState {
	private name = 'OrderRejected'

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name
	}
	approvePayment(): void {
		console.log('Não é possível aprovar o pagamento de um pedido rejeitado')
	}
	rejectPayment(): void {
		console.log('Não é possível recusar o pagamento de um pedido rejeitado')
	}
	waitPayment(): void {
		console.log(
			'Não é possível mover o pagamento para pendente um pedido rejeitado',
		)
	}
	shipOrder(): void {
		console.log('Não é possível enviar um pedido rejeitado')
	}
}
