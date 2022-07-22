import { validateEmailClass, validateEmail } from './helper'
import { EmailValidator } from './validator/email-validator-classic'
import { functionValidateEmail } from './validator/email-validator-function'

const email = 'jhondoe@email.com'

validateEmailClass(new EmailValidator(), email)
validateEmail(functionValidateEmail, email)
