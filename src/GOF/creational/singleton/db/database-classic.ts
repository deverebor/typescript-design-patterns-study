import { User } from '../interfaces'

/*
  Singleton using class pattern
*/

export class DataBaseClassic {
	private static _instance: DataBaseClassic
	private users: User[] = []

	private constructor() {}

	static get instance(): DataBaseClassic {
		if (!DataBaseClassic._instance) {
			DataBaseClassic._instance = new DataBaseClassic()
		}
		return DataBaseClassic._instance
	}

	addUser(user: User) {
		this.users.push(user)
	}

	removeUser(index: number) {
		this.users.splice(index, 1)
	}

	showUser() {
		for (const user of this.users) {
			console.log(user)
		}
	}
}
