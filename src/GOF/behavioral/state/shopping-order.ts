import { IShoppingOrderState } from './interfaces'
import { OrderPending } from './classes/order-pending'

export class ShoppingOrder {
	private _state: IShoppingOrderState = new OrderPending(this)

	get state(): IShoppingOrderState {
		return this._state
	}

	set state(state: IShoppingOrderState) {
		this._state = state
		console.log(`O pedido agora está com o status de ${this._state.getName()}`)
	}

	get stateName(): string {
		return this._state.getName()
	}

	approvePayment(): void {
		this._state.approvePayment()
	}

	rejectPayment(): void {
		this._state.rejectPayment()
	}

	waitPayment(): void {
		this._state.waitPayment()
	}

	shipOrder(): void {
		this._state.shipOrder()
	}
}
