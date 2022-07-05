import { IClient } from './interfaces'

export class Client implements IClient {
	constructor(public firstName: string, public lastName: string) {}
}
