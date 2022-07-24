import { RemoteControl } from '../remote-control/remote-control'
import { RemoteControlVolume } from '../remote-control/remote-control-volume'

export function controlsActions(
	abstraction: RemoteControl | RemoteControlVolume,
) {
	abstraction.togglePower()

	if (abstraction instanceof RemoteControlVolume) {
		abstraction.toggleVolumeUp()
		abstraction.toggleVolumeUp()
		abstraction.toggleVolumeUp()
		abstraction.toggleVolumeUp()
		abstraction.toggleVolumeUp()
		abstraction.toggleVolumeDown()
		abstraction.toggleVolumeDown()
		abstraction.toggleVolumeDown()
		abstraction.toggleVolumeDown()
	}
}
