import { DeliveryLocation } from '../classes/delivery-location'

export type DeliveryLocationDataType = {
	readonly street: string
	readonly city: string
}

export type LocationsDictionaryType = { [key: string]: DeliveryLocation }
