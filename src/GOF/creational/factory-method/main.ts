import { randomNumbers } from './utils/random-numbers'
import { randomVehicle } from './utils/random-vehicle'
import { CarFactory } from './factories/car-factory'

const carFactory = new CarFactory()

const customersName = ['John', 'Jane', 'Jack', 'Jill']

for (let i = 0; i < 10; i++) {
	const vehicle = randomVehicle()
	const customerName = customersName[randomNumbers(customersName.length)]

	vehicle.pickUpClient(customerName)
	vehicle.stop()

	console.log('\n')

	const newCar = carFactory.pickUpClient(
		customerName,
		`Vechicle Number - ${randomNumbers(10)}`,
	)
	newCar.stop()
}
