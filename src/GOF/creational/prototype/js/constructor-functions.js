function Person(firstName, lastName, age) {
	this.firstName = firstName
	this.lastName = lastName
	this.age = age
}

const personPrototype = {
	firstName: 'John',
	lastName: 'Doe',
	age: 50,

	fullName() {
		return `${this.firstName} ${this.lastName}`
	},
}

Person.prototype = Object.create(personPrototype)
Person.prototype.constructor = Person

function Employee(firstName, lastName, age, jobTitle) {
	Person.call(this, firstName, lastName, age)
	this.jobTitle = jobTitle
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

const firstPerson = new Person('John', 'Doe', 50)

console.log(firstPerson)
console.log(firstPerson.fullName())

const firstEmployee = new Employee('Adeobaldo', 'Korkmaz', 50, 'Developer')

console.log(firstEmployee)
console.log(firstEmployee.fullName())
