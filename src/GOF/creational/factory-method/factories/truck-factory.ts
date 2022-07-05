import { Truck } from '../vehicle/truck'
import { IVehicle } from '../vehicle/interface'
import { VehicleFactory } from './vehicle-factory'

export class TruckFactory extends VehicleFactory {
	createVehicle(vehicleName: string): IVehicle {
		return new Truck(vehicleName)
	}
}
