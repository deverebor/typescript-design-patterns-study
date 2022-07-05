import { CreateClientCompanyVehicleFactory } from './factories/client-company-vehicle-factory'
import { CreateClientVehicleFactory } from './factories/client-vehicle-factory'

const companyFactory = new CreateClientCompanyVehicleFactory()
const clientFactory = new CreateClientVehicleFactory()

const firstCar = companyFactory.createVehicle('BMW', 'John', 'Doe')
const secondCar = clientFactory.createVehicle('Mercedes', 'Jane', 'Doe')

firstCar.pickUpClient()
secondCar.pickUpClient()
