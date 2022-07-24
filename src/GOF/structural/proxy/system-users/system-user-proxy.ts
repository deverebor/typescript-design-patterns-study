import { AdminUser } from './admin-user'
import { ISystemUser, SystemUserAddressType } from './interfaces'

export class SystemUserProxy implements ISystemUser {
	private realUser: ISystemUser | null = null
	private realUserAddresses: SystemUserAddressType[] | null = null

	constructor(
		public firstName: string,
		public lastName: string,
		public userName: string,
	) {}

	private createUser(): ISystemUser {
		if (this.realUser === null) {
			this.realUser = new AdminUser(
				this.firstName,
				this.lastName,
				this.userName,
			)
		}

		return this.realUser
	}

	async getAddresses(): Promise<SystemUserAddressType[]> {
		this.realUser = this.createUser()

		if (this.realUserAddresses === null) {
			this.realUserAddresses = await this.realUser.getAddresses()
		}

		return this.realUserAddresses
	}
}
