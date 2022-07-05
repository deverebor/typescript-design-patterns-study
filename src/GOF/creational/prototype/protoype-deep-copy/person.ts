import { IPrototype } from './interfaces/index'
import { Address } from './address'

export class Person implements IPrototype {
	addresses: Address[] = []

	constructor(public name: string, public age: number) {}

	clone(): Person {
		const newPerson = new Person(this.name, this.age)
		newPerson.addresses = this.addresses.map((address) => address.clone())
		return newPerson
	}

	addAddress(address: Address) {
		this.addresses.push(address)
	}
}
