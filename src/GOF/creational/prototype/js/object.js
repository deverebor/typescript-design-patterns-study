const personPrototype = {
	firstName: 'John',
	lastName: 'Doe',
	age: 50,

	fullName() {
		return `${this.firstName} ${this.lastName}`
	},
}

const anotherPerson = Object.create(personPrototype)
anotherPerson.firstName = 'Jane'

console.log(anotherPerson)
console.log(anotherPerson.firstName)
console.log(anotherPerson.fullName())
