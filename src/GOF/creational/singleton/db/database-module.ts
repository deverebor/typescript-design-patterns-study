import { User } from '../interfaces'

/*
  Singleton using module pattern
*/

const users: User[] = []

export const DataBaseModule = {
	addUser(user: User) {
		users.push(user)
	},

	removeUser(index: number) {
		users.splice(index, 1)
	},

	showUser() {
		for (const user of users) {
			console.log(user)
		}
	},
}
