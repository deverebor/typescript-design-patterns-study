import { BikeFactory } from '../factories/bike-factory'
import { CarFactory } from '../factories/car-factory'
import { randomNumbers } from '../utils/random-numbers'
import { IVehicle } from '../vehicle/interface'
import { TruckFactory } from '../factories/truck-factory'

export function randomVehicle(): IVehicle {
	const carFactory = new CarFactory()
	const bikeFactory = new BikeFactory()
	const truckFactory = new TruckFactory()

	const vehicleOne = carFactory.createVehicle('Monza')
	const vehicleTwo = carFactory.createVehicle('Caravan')

	const vehicleThree = bikeFactory.createVehicle('Caloi')
	const vehicleFour = bikeFactory.createVehicle('BMC')

	const vehicleFive = truckFactory.createVehicle('Volvo')
	const vehicleSix = truckFactory.createVehicle('Scania')

	const vehicles = [
		vehicleOne,
		vehicleTwo,
		vehicleThree,
		vehicleFour,
		vehicleFive,
		vehicleSix,
	]

	return vehicles[randomNumbers(vehicles.length)]
}
