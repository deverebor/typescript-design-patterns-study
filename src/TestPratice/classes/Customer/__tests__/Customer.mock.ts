import { Customer, CustomerEnterprise } from '..'

export const sutCustomer = (
	firstName: string,
	lastName: string,
	cpf: string
): Customer => {
	return new Customer(firstName, lastName, cpf)
}

export const sutCustomerEnterprise = (
	name: string,
	cnpj: string
): CustomerEnterprise => {
	return new CustomerEnterprise(name, cnpj)
}
