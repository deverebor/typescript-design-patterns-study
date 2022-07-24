import { controlsActions } from './helper'
import { Television } from './device/television'
import { JunkyBox } from './device/junkybox'
import { RemoteControl } from './remote-control/remote-control'
import { RemoteControlVolume } from './remote-control/remote-control-volume'

const television = new Television()
const junkyBox = new JunkyBox()

const junkyBoxRemoteControl = new RemoteControl(junkyBox)
const televisionRemoteControl = new RemoteControlVolume(television)

controlsActions(junkyBoxRemoteControl)
controlsActions(televisionRemoteControl)
