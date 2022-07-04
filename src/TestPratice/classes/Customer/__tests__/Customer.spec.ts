import { sutCustomer, sutCustomerEnterprise } from './Customer.mock'

afterEach(() => {
	jest.clearAllMocks()
})

describe('Customer class', () => {
	it('should create one Customer', () => {
		const firstName = 'John'
		const lastName = 'Doe'
		const cpf = '12345678901'

		const sut = sutCustomer(firstName, lastName, cpf)

		expect(sut).toHaveProperty('firstName', firstName)
		expect(sut).toHaveProperty('lastName', lastName)
		expect(sut).toHaveProperty('cpf', cpf)
	})

	it('should getName and getIdentificationNumber methods return they value in CustomerEnterprise', () => {
		const firstName = 'John'
		const lastName = 'Doe'
		const cpf = '12345678901'
		const sut = sutCustomer(firstName, lastName, cpf)

		expect(sut.getName()).toBe(`${firstName} ${lastName}`)
		expect(sut.getIdentificationNumber()).toBe(cpf)
	})
})

describe('CustomerEnterprise class', () => {
	it('should create one CustomerEnterprise', () => {
		const name = 'John'
		const cnpj = '12345678901'

		const sut = sutCustomerEnterprise(name, cnpj)

		expect(sut).toHaveProperty('name', name)
		expect(sut).toHaveProperty('cnpj', cnpj)
	})

	it('should getName and getIdentificationNumber methods return they value in CustomerEnterprise', () => {
		const name = 'John'
		const cnpj = '12345678901'

		const sut = sutCustomerEnterprise(name, cnpj)

		expect(sut.getName()).toBe(name)
		expect(sut.getIdentificationNumber()).toBe(cnpj)
	})
})
