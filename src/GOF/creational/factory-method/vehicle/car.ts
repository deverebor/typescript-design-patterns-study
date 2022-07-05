import { IVehicle } from './interface'

export class Car implements IVehicle {
	constructor(private carModel: string) {}

	pickUpClient(clientName: string): void {
		console.log(`Car ${this.carModel} is picking up ${clientName}`)
	}
	stop(): void {
		console.log(`Car ${this.carModel} stopped`)
	}
}
