import { MainDishBuilder } from './classes/MainDishBuilder'

const mainDishBuilder = new MainDishBuilder()

const notVeganMeal = mainDishBuilder.buildDesert().buildBeverage().meal

console.log(notVeganMeal)
console.log(`Valor da caixa: ${notVeganMeal.getPrice()}`)

mainDishBuilder.reset()

const veganMeal = mainDishBuilder.buildVeganMeal().buildDesert().meal

console.log(veganMeal)
console.log(`Valor da caixa: ${veganMeal.getPrice()}`)
