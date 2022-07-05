import { IVehicle } from './interface'

export class Truck implements IVehicle {
	constructor(private truckModel: string) {}

	pickUpClient(clientName: string): void {
		console.log(`Truck ${this.truckModel} is picking up ${clientName}`)
	}
	stop(): void {
		console.log(`Truck ${this.truckModel} stopped`)
	}
}
