import { IEmailValidator, IFunctionValidator } from '../interfaces'

export function validateEmailClass(
	emailValidator: IEmailValidator,
	userEmail: string,
) {
	if (emailValidator.validateUserEmail(userEmail)) {
		console.log(`User email: (${userEmail}) is valid`)
	} else {
		console.log(`User email: (${userEmail}) is invalid`)
	}
}

export function validateEmail(
	emailValidator: IFunctionValidator,
	userEmail: string,
) {
	if (emailValidator(userEmail)) {
		console.log(`User email: (${userEmail}) is valid`)
	} else {
		console.log(`User email: (${userEmail}) is invalid`)
	}
}
