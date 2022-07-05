import { IClient } from '../customer/interfaces'
import { IVehicle } from './interfaces'

export class ClientCar implements IVehicle {
	constructor(public carModel: string, private readonly client: IClient) {}

	pickUpClient(): void {
		console.log(
			`The driver of the client car, with the ${this.carModel}, is going to pick up ${this.client.firstName} ${this.client.lastName}`,
		)
	}
}
