import { IDeviceContent } from './device-content'

export class JunkyBox implements IDeviceContent {
	private _volume = 0
	private _power = false
	private _name = 'JunkyBox'

	get name(): string {
		return this._name
	}
	get volume(): number {
		return this._volume
	}
	set volume(newVolume: number) {
		if (newVolume < 0) return
		if (newVolume > 100) return

		this._volume = newVolume
	}
	get power(): boolean {
		return this._power
	}
	set power(power: boolean) {
		this._power = power
	}
}
