import { ClientCompany } from '../classes/customer/client-company'
import { IClient } from '../classes/customer/interfaces'
import { CompanyCar } from '../classes/vehicle/company-car'
import { IVehicle } from '../classes/vehicle/interfaces'
import { ICreateClientVehicleFactory } from './interfaces'

export class CreateClientCompanyVehicleFactory
	implements ICreateClientVehicleFactory
{
	createClient(clientName: string, clientLastname: string): IClient {
		return new ClientCompany(clientName, clientLastname)
	}
	createVehicle(
		vehicleName: string,
		clientName: string,
		clientLastname: string,
	): IVehicle {
		const client = this.createClient(clientName, clientLastname)
		return new CompanyCar(vehicleName, client)
	}
}
