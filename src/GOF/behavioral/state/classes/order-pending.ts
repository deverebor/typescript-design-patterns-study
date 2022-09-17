import { IShoppingOrderState } from '../interfaces'
import { OrderApproved } from './order-approved'
import { ShoppingOrder } from '../shopping-order'
import { OrderRejected } from './order-rejected'

export class OrderPending implements IShoppingOrderState {
	private name = 'OrderPending'

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name
	}
	approvePayment(): void {
		this.order.state = new OrderApproved(this.order)
	}
	rejectPayment(): void {
		this.order.state = new OrderRejected(this.order)
	}
	waitPayment(): void {
		console.log('O pedido já está com o status de pagamento pendente')
	}
	shipOrder(): void {
		console.log(
			'O pedido não pode ser enviado pois o pagamento não foi aprovado.',
		)
	}
}
