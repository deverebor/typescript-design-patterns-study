type ICartItem = { name: string; price: number }
type IOrderStatus = 'open' | 'pending' | 'approved' | 'closed'

export class ShoppingCart {
	private readonly _items: ICartItem[] = []
	private _orderStatus: IOrderStatus = 'open'

	get items(): Readonly<ICartItem[]> {
		return this._items
	}

	get orderStatus(): IOrderStatus {
		return this._orderStatus
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

	isEmptyCart(): boolean {
		return this._items.length === 0
	}

	statusMessage(message: string): void {
		console.log(`Order status: ${message}`)
	}

	processOrder(): void {
		this._orderStatus = 'pending'
		this.statusMessage(
			`Your order with total of $${this.totalCart()} has been processed.`
		)
	}

	saveOrder(): void {
		this._orderStatus = 'approved'
		this.statusMessage('Your order has been confirmed.')
	}

	closeOrder(): void {
		this._orderStatus = 'closed'
		this.statusMessage('Your cart has been cleared.')
		this._items.length = 0
	}

	finalizeCart(): void {
		if (this.isEmptyCart()) {
			console.log('Cart is empty')
			return
		}

		console.log(this.orderStatus) // open
		this.processOrder()
		console.log(this.orderStatus) // pending
		this.saveOrder()
		console.log(this.orderStatus) // approved
		this.closeOrder()
		console.log(this.orderStatus) // closed
	}
}

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ name: 'Pen', price: 0.99 })
shoppingCart.addItem({ name: 'Notebook', price: 99.99 })
shoppingCart.addItem({ name: 'Bottle Water', price: 1.99 })

console.log(shoppingCart.items)
shoppingCart.finalizeCart()
