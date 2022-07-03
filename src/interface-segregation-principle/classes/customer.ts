import { ICustomer, ICustomerEnterprise, ICustomerOrder } from './interfaces'

export class Customer implements ICustomer, ICustomerOrder {
	firstName: string
	lastName: string
	cpf: string

	constructor(firstName: string, lastName: string, cpf: string) {
		this.firstName = firstName
		this.lastName = lastName
		this.cpf = cpf
	}

	getName(): string {
		return `${this.firstName} ${this.lastName}`
	}

	getIdentificationNumber(): string {
		return this.cpf
	}
}

export class CustomerEnterprise implements ICustomerEnterprise, ICustomerOrder {
	name: string
	cnpj: string

	constructor(name: string, cnpj: string) {
		this.name = name
		this.cnpj = cnpj
	}

	getName(): string {
		return this.name
	}

	getIdentificationNumber(): string {
		return this.cnpj
	}
}
