import { IClient } from '../customer/interfaces'
import { IVehicle } from './interfaces'

export class CompanyCar implements IVehicle {
	constructor(public carModel: string, private readonly client: IClient) {}

	pickUpClient(): void {
		console.log(
			`The driver of the companies, with ${this.carModel}, is going to pick up ${this.client.firstName} ${this.client.lastName}`,
		)
	}
}
