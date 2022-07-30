import { ISmartHouseCommand } from '../commands/interfaces'
import { SmartHouseAppCommandType } from './types'

export class SmartHouseApp {
	private _commands: SmartHouseAppCommandType = {}

	addCommand(key: string, command: ISmartHouseCommand) {
		const hasRegisteredCommand = this._commands[key]

		if (hasRegisteredCommand) {
			console.log(`Command ${key} already registered`)
			return
		} else {
			this._commands[key] = command
		}
	}

	executeCommand(key: string) {
		const hasRegisteredCommand = this._commands[key]

		if (!hasRegisteredCommand) {
			console.log(`Command ${key} already registered`)
			return
		} else {
			this._commands[key].execute()
		}
	}

	undoCommand(key: string) {
		const hasRegisteredCommand = this._commands[key]

		if (!hasRegisteredCommand) {
			console.log(`Command ${key} already registered`)
			return
		} else {
			this._commands[key].undo()
		}
	}
}
