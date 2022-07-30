import { DeliveryFactory } from './classes/delivery-factory'
import { deliveryContext } from './helpers'

const factory = new DeliveryFactory()
deliveryContext(
	factory,
	'Johnny Doe',
	'123A',
	'Planeta dos Macacos',
	'Salvador',
)
deliveryContext(
	factory,
	'Adeobaldo Pinto',
	'123A',
	'Planeta dos Macacos',
	'Salvador',
)

console.log(factory.locations)
