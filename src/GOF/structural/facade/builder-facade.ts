import { MainDishBuilder } from '../../creational/builder/classes/MainDishBuilder'

export class BuilderFacade {
	// Facede from the builder pattern: ./src/GOF/creational/builder
	private mainDishBuilder = new MainDishBuilder()
	private veganDishBuilder = new MainDishBuilder()

	makeNotVeganMealMenuOne() {
		const notVeganMealOrderOne = this.mainDishBuilder
			.buildDesert()
			.buildBeverage().meal

		console.log(notVeganMealOrderOne)
		console.log(`Valor da caixa: ${notVeganMealOrderOne.getPrice()}`)
	}

	makeNotVeganMealMenuTwo() {
		this.mainDishBuilder.reset()

		const notVeganMealOrderTwo = this.mainDishBuilder.buildBeverage().meal

		console.log(notVeganMealOrderTwo)
		console.log(`Valor da caixa: ${notVeganMealOrderTwo.getPrice()}`)
	}

	makeVeganMealMenuOne() {
		this.veganDishBuilder.reset()

		const veganMeal = this.veganDishBuilder.buildVeganMeal().buildDesert().meal

		console.log(veganMeal)
		console.log(`Valor da caixa: ${veganMeal.getPrice()}`)
	}
}
