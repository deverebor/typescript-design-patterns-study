import { IMealComposite } from '../interfaces/index'

export abstract class AbstractMeal implements IMealComposite {
	constructor(private _name: string, private _price: number) {}

	getPrice(): number {
		return this._price
	}
}
