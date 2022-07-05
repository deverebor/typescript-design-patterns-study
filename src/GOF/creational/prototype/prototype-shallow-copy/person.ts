import { IPrototype } from './interfaces/index'
import { Address } from './address'

export class Person implements IPrototype {
	addresses: Address[] = []

	constructor(public name: string, public age: number) {}

	clone(): IPrototype {
		return Object.create(this)
	}

	addAddress(address: Address) {
		this.addresses.push(address)
	}
}
