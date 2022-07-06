import { ValidateComponent } from '../interface/validate-component'

export class ValidateComposite extends ValidateComponent {
	private readonly children: ValidateComponent[] = []

	public validate(value: unknown): boolean {
		for (const child of this.children) {
			const validation = child.validate(value)
			if (!validation) return false
		}
		return true
	}

	addValidations(...validations: ValidateComponent[]): void {
		validations.forEach((validation) => this.children.push(validation))
	}
}
