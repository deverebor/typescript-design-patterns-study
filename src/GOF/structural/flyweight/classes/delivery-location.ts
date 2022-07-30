import { IDeliveryFlyweight } from '../interfaces'
import { DeliveryLocationDataType } from '../types'

export class DeliveryLocation implements IDeliveryFlyweight {
	constructor(private readonly sharedState: DeliveryLocationDataType) {}

	public delivery(clientName: string, houseNumber: string): void {
		console.log(`${clientName} request one delivery to ${houseNumber}`)
		console.log(
			`Client location: ${this.sharedState.street}, ${this.sharedState.city} \n`,
		)
	}
}
