export type SystemUserAddressType = {
	street: string
	city: string
	houseNumber: number
}

export interface ISystemUser {
	firstName: string
	lastName: string
	userName: string

	getAddresses(): Promise<SystemUserAddressType[]>
}
