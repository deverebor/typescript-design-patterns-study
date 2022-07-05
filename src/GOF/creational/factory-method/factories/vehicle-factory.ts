import { IVehicle } from '../vehicle/interface/index'

export abstract class VehicleFactory {
	abstract createVehicle(vehicleName: string): IVehicle

	pickUpClient(clientName: string, vehicleName: string): IVehicle {
		const car = this.createVehicle(vehicleName)

		car.pickUpClient(clientName)

		return car
	}
}
