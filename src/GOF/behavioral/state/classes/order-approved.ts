import { IShoppingOrderState } from '../interfaces'
import { OrderPending } from './order-pending'
import { ShoppingOrder } from '../shopping-order'
import { OrderRejected } from './order-rejected'

export class OrderApproved implements IShoppingOrderState {
	private name = 'OrderApproved'

	constructor(private order: ShoppingOrder) {}

	getName(): string {
		return this.name
	}
	approvePayment(): void {
		console.log('O pedido já está com o status de pagamento aprovado')
	}
	rejectPayment(): void {
		this.order.state = new OrderRejected(this.order)
	}
	waitPayment(): void {
		this.order.state = new OrderPending(this.order)
	}
	shipOrder(): void {
		console.log('Enviando o pedido para o cliente.')
	}
}
