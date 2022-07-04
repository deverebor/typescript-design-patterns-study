/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Order } from '..'
import {
	IShoppingCart,
	ICartItem,
	IPersistency,
	IMessaging,
	ICustomerOrder,
} from '../../../interfaces'

class ShoppinCartMock implements IShoppingCart {
	get items(): Readonly<ICartItem[]> {
		return []
	}
	addItem(newItem: ICartItem): void {}
	removeItem(excludeItem: number): void {}
	totalCart(): number {
		return 0
	}
	totalWithDescount(): number {
		return 0
	}
	isEmptyCart(): boolean {
		return false
	}
	clear(): void {}
}

class MessaginMock implements IMessaging {
	statusMessage(message: string): void {}
}

class PersistencyMock implements IPersistency {
	constructor(private readonly messaging: IMessaging) {}
	processOrder(cartAmount: number): void {}
	saveOrder(): void {}
	closeOrder(): void {}
}

class CustomerMock implements ICustomerOrder {
	getName(): string {
		return ''
	}
	getIdentificationNumber(): string {
		return ''
	}
}

export const createSut = () => {
	const shoppingCartMock = new ShoppinCartMock()
	const messagingMock = new MessaginMock()
	const persistencyMock = new PersistencyMock(messagingMock)
	const customerMock = new CustomerMock()
	const sut = new Order(shoppingCartMock, persistencyMock, customerMock)

	return {
		sut,
		shoppingCartMock,
		messagingMock,
		persistencyMock,
		customerMock,
	}
}
