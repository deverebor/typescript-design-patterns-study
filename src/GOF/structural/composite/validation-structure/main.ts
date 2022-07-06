import { ValidateEmailLeaf } from './classes/validate-email'
import { ValidateNumberLeaf } from './classes/validate-number'
import { ValidateStringLeaf } from './classes/validate-string'
import { ValidateComposite } from './classes/validation-composite'

const validateEmail = new ValidateEmailLeaf()
const validateNumber = new ValidateNumberLeaf()
const validateString = new ValidateStringLeaf()

const validateComposite = new ValidateComposite()
validateComposite.addValidations(validateEmail, validateString, validateNumber)
console.log(validateComposite.validate('1@1'))
