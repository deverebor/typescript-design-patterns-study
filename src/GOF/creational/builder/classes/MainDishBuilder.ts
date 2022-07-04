import { IMealBuilder } from '../interfaces/index'
import { Beans } from './Beans'
import { Meat } from './Meat'
import { Rice } from './Rice'
import { MealBox } from './MealBox'
import { Beverage } from './Beverage'
import { Dessert } from './Dessert'

export class MainDishBuilder implements IMealBuilder {
	private _meal: MealBox = new MealBox()

	reset() {
		this._meal = new MealBox()
		return this
	}

	buildMeal(): this {
		const rice = new Rice('Arroz', 10)
		const beans = new Beans('Feijão', 20)
		const meat = new Meat('Carne', 30)

		this._meal.addMeal(rice, beans, meat)

		return this
	}

	buildBeverage(): this {
		const beverage = new Beverage('Refrigerante', 5)

		this._meal.addMeal(beverage)

		return this
	}

	buildDesert(): this {
		const desert = new Dessert('Picolé de Amendoim', 16)

		this._meal.addMeal(desert)

		return this
	}

	buildVeganMeal(): this {
		const rice = new Rice('Arroz', 10)
		const beans = new Beans('Feijão', 20)

		this._meal.addMeal(rice, beans)

		return this
	}

	get meal(): MealBox {
		return this._meal
	}
}
