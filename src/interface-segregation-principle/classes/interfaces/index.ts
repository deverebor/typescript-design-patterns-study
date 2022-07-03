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
