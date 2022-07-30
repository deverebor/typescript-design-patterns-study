import { SmartHouseLight } from '../classes/smart-house-light'
import { ISmartHouseCommand } from './interfaces'

export class LightIntensityCommand implements ISmartHouseCommand {
	constructor(private readonly _light: SmartHouseLight) {}

	execute() {
		console.log(
			`${this._light.name} intensity is ${this._light.increaseIntensity()}`,
		)
	}

	undo() {
		console.log(
			`${this._light.name} intensity is ${this._light.decreaseIntensity()}`,
		)
	}
}
