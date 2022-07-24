import { IProduct } from '../interfaces'

export class Shoes implements IProduct {
	private _price = 90
	private _name = 'Shoes'

	get price(): number {
		return this._price
	}

	get name(): string {
		return this._name
	}
}
