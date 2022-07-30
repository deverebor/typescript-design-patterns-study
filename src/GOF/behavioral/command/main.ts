import { SmartHouseLight } from './classes/smart-house-light'
import { SmartHouseApp } from './invokers/smart-house-app'
import { LightPowerCommand } from './commands/light-power-command'
import { LightIntensityCommand } from './commands/light-intensity-command'

const bedRoomLight = new SmartHouseLight('Bedroom Light')
const bathroomLight = new SmartHouseLight('Bathroom Light')

const bedRoomLightCommand = new LightPowerCommand(bedRoomLight)
const bedRoomLightIntensityCommand = new LightIntensityCommand(bedRoomLight)

const bathroomLightCommand = new LightPowerCommand(bathroomLight)

const smartHouseApp = new SmartHouseApp()

smartHouseApp.addCommand('lightPower', bedRoomLightCommand)
smartHouseApp.addCommand('lightIntensity', bedRoomLightIntensityCommand)

smartHouseApp.executeCommand('lightPower')
smartHouseApp.undoCommand('lightPower')

for (let i = 0; i < 5; i++) {
	smartHouseApp.executeCommand('lightIntensity')
}

smartHouseApp.addCommand('lightPower2', bathroomLightCommand)
smartHouseApp.executeCommand('lightPower2')
smartHouseApp.undoCommand('lightPower2')
