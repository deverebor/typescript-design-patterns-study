import { RemoteControl } from './remote-control'

export class RemoteControlVolume extends RemoteControl {
	toggleVolumeUp() {
		const oldVolume = this.device.volume
		const currentVolume = (this.device.volume = this.device.volume + 1)
		const deviceName = this.device.name

		console.log(
			`Old volume of ${deviceName} had ${oldVolume} now has ${currentVolume}`,
		)
	}

	toggleVolumeDown() {
		const oldVolume = this.device.volume
		const currentVolume = (this.device.volume = this.device.volume - 1)
		const deviceName = this.device.name

		console.log(
			`Old volume of ${deviceName} had ${oldVolume} now has ${currentVolume}`,
		)
	}
}
