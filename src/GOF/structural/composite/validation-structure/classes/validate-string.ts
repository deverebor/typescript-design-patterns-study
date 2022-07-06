import { ValidateComponent } from '../interface/validate-component'

export class ValidateStringLeaf extends ValidateComponent {
	public validate(value: unknown): boolean {
		if (typeof value !== 'string') return false
		return true
	}
}
