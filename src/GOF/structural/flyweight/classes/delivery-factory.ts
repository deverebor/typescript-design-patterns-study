import { IDeliveryFlyweight } from '../interfaces'
import { DeliveryLocationDataType, LocationsDictionaryType } from '../types'
import { DeliveryLocation } from './delivery-location'

export class DeliveryFactory {
	private _locations: LocationsDictionaryType = {}

	private createKey(data: DeliveryLocationDataType): string {
		return Object.values(data)
			.map((item) => item.replace(/,/g, '').toLocaleLowerCase())
			.join('-')
	}

	createLocation(sharedState: DeliveryLocationDataType): IDeliveryFlyweight {
		const key = this.createKey(sharedState)

		if (!this._locations[key]) {
			this._locations[key] = new DeliveryLocation(sharedState)
		}

		return this._locations[key]
	}

	get locations(): LocationsDictionaryType {
		return this._locations
	}
}
