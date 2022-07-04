import { Percistency } from '../services/percistency'
import { ICustomerOrder } from './interfaces'
import { ShoppingCart } from './shopping-cart'
import { IOrderStatus } from './types'

export class Order {
	private _orderStatus: IOrderStatus = 'open'

	constructor(
		private readonly cart: ShoppingCart,
		private readonly percistency: Percistency,
		private readonly customer: ICustomerOrder,
	) {}

	get orderStatus(): IOrderStatus {
		return this._orderStatus
	}

	process() {
		this._orderStatus = 'pending'
		this.percistency.processOrder(this.cart.totalWithDescount())
	}

	save() {
		this._orderStatus = 'approved'
		this.percistency.saveOrder()
	}

	close() {
		this._orderStatus = 'closed'
		this.percistency.closeOrder()
		this.cart.clear()
	}

	finalizeCart(): void {
		if (this.cart.isEmptyCart()) {
			console.log('Cart is empty')
			return
		}

		this.process()
		this.save()
		this.close()
		console.log(
			`The client is ${this.customer.getName()} and his credentials are ${this.customer.getIdentificationNumber()}`,
		)
	}
}
