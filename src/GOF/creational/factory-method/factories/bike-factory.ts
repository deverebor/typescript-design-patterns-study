import { Bike } from '../vehicle/bike'
import { IVehicle } from '../vehicle/interface'
import { VehicleFactory } from './vehicle-factory'

export class BikeFactory extends VehicleFactory {
	createVehicle(vehicleName: string): IVehicle {
		return new Bike(vehicleName)
	}
}
