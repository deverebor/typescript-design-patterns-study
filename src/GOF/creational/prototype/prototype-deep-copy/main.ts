import { Person } from './person'
import { Address } from './address'

const address = new Address('Main Street', 123)

const firstPerson = new Person('John', 30)
firstPerson.addAddress(address)

const secondPerson = firstPerson.clone()

firstPerson.addresses[0].street = 'New Street'

secondPerson.name = 'Adeobaldo'

console.log(secondPerson)
console.log(secondPerson.name)
console.log(secondPerson.addresses)

console.log('\n')

console.log(firstPerson)
console.log(firstPerson.name)
console.log(firstPerson.addresses)
