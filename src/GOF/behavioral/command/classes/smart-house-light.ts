export class SmartHouseLight {
	private _isOn = false
	private _intensity = 50

	constructor(public name: string) {}

	get powerStatus(): string {
		return this._isOn ? 'On' : 'Off'
	}

	on(): boolean {
		this._isOn = true
		console.log(`\n${this.name} is ${this.powerStatus}`)

		return this._isOn
	}

	off(): boolean {
		this._isOn = false
		console.log(`${this.name} is ${this.powerStatus}\n`)

		return this._isOn
	}

	increaseIntensity(): number {
		if (this._intensity > 100) return this._intensity
		return (this._intensity += 1)
	}

	decreaseIntensity(): number {
		if (this._intensity <= 0) return this._intensity
		return (this._intensity -= 1)
	}
}
