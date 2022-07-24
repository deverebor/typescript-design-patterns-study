import { IDeviceContent } from '../device/device-content'

export class RemoteControl {
	constructor(protected device: IDeviceContent) {}

	togglePower() {
		this.device.power = !this.device.power
		console.log(`Power status is: ${this.device.power}`)
	}
}
