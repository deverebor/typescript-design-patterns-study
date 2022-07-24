export interface IDeviceContent {
	get name(): string
	get power(): boolean
	set power(power: boolean)
	get volume(): number
	set volume(volume: number)
}
