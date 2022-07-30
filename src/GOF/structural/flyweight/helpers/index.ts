import { DeliveryFactory } from '../classes/delivery-factory'

export function deliveryContext(
	factory: DeliveryFactory,
	clientName: string,
	houseNumber: string,
	street: string,
	city: string,
) {
	const location = factory.createLocation({ street, city })

	location.delivery(clientName, houseNumber)
}
