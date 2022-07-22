import { IFunctionValidator } from '../interfaces'
import isEmail from 'validator/lib/isEmail'

export const functionValidateEmail: IFunctionValidator = (
	value: string,
): boolean => {
	return isEmail(value)
}
