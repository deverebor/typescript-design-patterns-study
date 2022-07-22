import { IEmailValidator } from '../interfaces'
import isEmail from 'validator/lib/isEmail'

export class EmailValidator implements IEmailValidator {
	validateUserEmail(value: string): boolean {
		return isEmail(value)
	}
}
