describe('Primitive Values', () => {
	it('should test jest jest assertions', () => {
		const num = 10

		expect(num).toBe(10)
		expect(num).toEqual(10)

		expect(num).not.toBeNull()
		expect(num).toBeTruthy()

		expect(num).toBeGreaterThan(9)
		expect(num).toBeLessThan(11)

		expect(num).toBeCloseTo(10, 1)
		expect(num).toHaveProperty('toString')
	})
})

describe('Objects', () => {
	it('should test jest assertions with objects', () => {
		const person = { name: 'Lucas', age: 40 }
		const anotherPerson = { ...person }

		expect(person).toEqual(anotherPerson)
		expect(person).toHaveProperty('name')
		expect(person).toHaveProperty('name', 'Lucas')

		expect(person.name).toBe('Lucas')
	})
})
