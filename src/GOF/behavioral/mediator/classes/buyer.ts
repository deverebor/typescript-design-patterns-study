import { Mediator } from './mediator'

export class Buyer {
	constructor(private _mediator: Mediator) {}

	showProducts(): void {
		this._mediator.showProducts()
	}
	buyProduct(id: string): void {
		this._mediator.buyProduct(id)
	}
}
