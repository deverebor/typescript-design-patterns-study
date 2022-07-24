import { SystemUserProxy } from '../system-users/system-user-proxy'

export async function createUser(
	firstName: string,
	lastName: string,
	userName: string,
): Promise<void> {
	const user = new SystemUserProxy(firstName, lastName, userName)

	console.log('This will wait for 2 seconds...')
	console.log(await user.getAddresses())
	console.log('This will repeat again cached...')

	for (let i = 0; i < 5; i++) {
		console.log(await user.getAddresses())
	}
}
