export abstract class Discount {
	protected discountValue = 0

	applyDiscount(price: number): number {
		return price - price * this.discountValue
	}
}

export class WithoutDiscount extends Discount {}

export class FifityPercentDiscount extends Discount {
	protected readonly discountValue = 0.5
}

export class TenPercentDiscount extends Discount {
	protected readonly discountValue = 0.1
}
