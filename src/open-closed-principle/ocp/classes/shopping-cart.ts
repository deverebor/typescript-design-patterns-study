import { ICartItem } from './interfaces'
import { Discount } from './discount'

export class ShoppingCart {
	private readonly _items: ICartItem[] = []

	constructor(private readonly discount: Discount) {}

	get items(): Readonly<ICartItem[]> {
		return this._items
	}

	addItem(newItem: ICartItem): void {
		this._items.push(newItem)
	}

	removeItem(excludeItem: number): void {
		this._items.splice(excludeItem, 1)
	}

	totalCart(): number {
		return +this._items
			.reduce((total, item) => total + item.price, 0)
			.toFixed(2)
	}

	totalWithDescount() {
		return this.discount.applyDiscount(this.totalCart()).toFixed(2)
	}

	isEmptyCart(): boolean {
		return this._items.length === 0
	}

	clear() {
		console.log('Clearing cart...')
		this._items.length = 0
	}
}
