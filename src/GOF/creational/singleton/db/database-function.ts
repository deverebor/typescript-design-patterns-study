import { User } from '../interfaces'

/*
  Singleton using immediately invoke function pattern
*/

export const DataBaseFunction = (() => {
	const users: User[] = []

	return {
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
})()
