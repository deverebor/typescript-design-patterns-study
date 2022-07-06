import { ValidateComponent } from '../interface/validate-component'

export class ValidateEmailLeaf extends ValidateComponent {
	public validate(value: unknown): boolean {
		return typeof value === 'string' && value.includes('@')
	}
}
