import { Car } from '../vehicle/car'
import { IVehicle } from '../vehicle/interface'
import { VehicleFactory } from './vehicle-factory'

export class CarFactory extends VehicleFactory {
	createVehicle(vehicleName: string): IVehicle {
		return new Car(vehicleName)
	}
}
