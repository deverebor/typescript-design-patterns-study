import { IPrototype } from './interfaces/index'

export class Address implements IPrototype {
	constructor(public street: string, public streetNumber: number) {}

	clone(): Address {
		return new Address(this.street, this.streetNumber)
	}
}
