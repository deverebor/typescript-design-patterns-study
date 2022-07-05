import { Client } from '../classes/customer/client'
import { IClient } from '../classes/customer/interfaces'
import { ClientCar } from '../classes/vehicle/client-car'
import { IVehicle } from '../classes/vehicle/interfaces'
import { ICreateClientVehicleFactory } from './interfaces'

export class CreateClientVehicleFactory implements ICreateClientVehicleFactory {
	createClient(clientName: string, clientLastname: string): IClient {
		return new Client(clientName, clientLastname)
	}

	createVehicle(
		vehicleName: string,
		clientName: string,
		clientLastname: string,
	): IVehicle {
		const client = this.createClient(clientName, clientLastname)
		return new ClientCar(vehicleName, client)
	}
}
