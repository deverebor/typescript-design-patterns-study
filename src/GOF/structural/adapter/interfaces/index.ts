export interface IFunctionValidator {
	(userEmail: string): boolean
}

export interface IEmailValidator {
	validateUserEmail: IFunctionValidator
}
