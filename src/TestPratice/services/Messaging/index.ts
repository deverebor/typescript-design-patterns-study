import { IMessaging } from '../../interfaces'

export class Messaging implements IMessaging {
	statusMessage(message: string): void {
		console.log(`Order status: ${message}`)
	}
}
