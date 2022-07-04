import { IMealComposite } from '../interfaces'

export class MealBox implements IMealComposite {
	private readonly _children: IMealComposite[] = []

	getPrice(): number {
		return this._children.reduce((acc, meal) => acc + meal.getPrice(), 0)
	}

	addMeal(...meal: IMealComposite[]): void {
		meal.forEach((item) => this._children.push(item))
	}
}
