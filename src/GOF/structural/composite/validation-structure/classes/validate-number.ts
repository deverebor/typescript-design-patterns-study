import { ValidateComponent } from '../interface/validate-component'

export class ValidateNumberLeaf extends ValidateComponent {
	public validate(value: unknown): boolean {
		if (typeof value !== 'string') return false
		return /\d+/.test(value)
	}
}
