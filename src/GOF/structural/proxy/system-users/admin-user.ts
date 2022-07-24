import { ISystemUser, SystemUserAddressType } from './interfaces'

export class AdminUser implements ISystemUser {
	constructor(
		public firstName: string,
		public lastName: string,
		public userName: string,
	) {}

	getAddresses(): Promise<SystemUserAddressType[]> {
		return new Promise((resolve) => {
			return setTimeout(() => {
				return resolve([
					{
						street: 'São Marcos',
						city: 'Salvador',
						houseNumber: 13,
					},
					{
						street: 'Periperi',
						city: 'Salvador',
						houseNumber: 25,
					},
				])
			}, 2000)
		})
	}
}
