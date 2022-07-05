import { IClient } from '../../classes/customer/interfaces'
import { IVehicle } from '../../classes/vehicle/interfaces'

export interface ICreateClientVehicleFactory {
	createClient(clientName: string, clientLastname: string): IClient
	createVehicle(
		vehicleName: string,
		clientName: string,
		clientLastname: string,
	): IVehicle
}
