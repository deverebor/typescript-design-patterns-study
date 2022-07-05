import { IClient } from './interfaces'

export class ClientCompany implements IClient {
	constructor(public firstName: string, public lastName: string) {}
}
