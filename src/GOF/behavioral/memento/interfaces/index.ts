export type ImageExtensionType = 'png' | 'jpg' | 'gif'

export interface IMementoImage {
	getName(): string
	getDate(): Date
}
