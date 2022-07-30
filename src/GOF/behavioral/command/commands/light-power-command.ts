import { SmartHouseLight } from '../classes/smart-house-light'
import { ISmartHouseCommand } from './interfaces'

export class LightPowerCommand implements ISmartHouseCommand {
	constructor(private readonly _light: SmartHouseLight) {}

	execute() {
		this._light.on()
	}

	undo() {
		this._light.off()
	}
}
