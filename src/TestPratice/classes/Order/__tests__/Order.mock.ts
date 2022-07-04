/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Order } from '..'
import {
	IOrderShoppingCart,
	ICustomerOrder,
	IPersistency,
} from '../../../interfaces'

class ShoppinCartMock implements IOrderShoppingCart {
	totalWithDescount(): number {
		return 0
	}
	isEmptyCart(): boolean {
		return false
	}
	clear(): void {}
}

class PersistencyMock implements IPersistency {
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
	const persistencyMock = new PersistencyMock()
	const customerMock = new CustomerMock()
	const sut = new Order(shoppingCartMock, persistencyMock, customerMock)

	return {
		sut,
		shoppingCartMock,
		persistencyMock,
		customerMock,
	}
}
