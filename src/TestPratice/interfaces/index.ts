export interface ICartItem {
	name: string
	price: number
}

export interface ICustomerOrder {
	getName(): string
	getIdentificationNumber(): string
}

export interface ICustomer {
	firstName: string
	lastName: string
	cpf: string
}

export interface ICustomerEnterprise {
	name: string
	cnpj: string
}

export interface IShoppingCart {
	items: Readonly<ICartItem[]>
	addItem(newItem: ICartItem): void
	removeItem(excludeItem: number): void
	totalCart(): number
	totalWithDescount(): number
	isEmptyCart(): boolean
	clear(): void
}

export interface IMessaging {
	statusMessage(message: string): void
}

export interface IPersistency {
	processOrder(cartAmount: number): void
	saveOrder(): void
	closeOrder(): void
}
