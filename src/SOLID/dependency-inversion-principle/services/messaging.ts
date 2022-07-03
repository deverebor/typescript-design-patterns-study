import { IMessaging } from '../classes/interfaces/index'

export class Messaging implements IMessaging {
	statusMessage(message: string): void {
		console.log(`Order status: ${message}`)
	}
}
