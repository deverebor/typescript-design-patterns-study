import { IVehicle } from './interface'

export class Bike implements IVehicle {
	constructor(private bikeModel: string) {}

	pickUpClient(clientName: string): void {
		console.log(`Bike ${this.bikeModel} is picking up ${clientName}`)
	}

	stop(): void {
		console.log(`Bike ${this.bikeModel} stopped`)
	}
}
