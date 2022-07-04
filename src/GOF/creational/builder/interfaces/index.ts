export interface IMealComposite {
	getPrice(): number
}

export interface IMealBuilder {
	buildMeal(): this
	buildBeverage(): this
	buildDesert(): this
	buildVeganMeal(): this
}
