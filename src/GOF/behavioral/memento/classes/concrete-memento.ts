import { IMementoImage } from '../interfaces'

export class ConcreteMemento implements IMementoImage {
	constructor(
		private name: string,
		private date: Date,
		private filePath: string,
		private fileFormat: string,
	) {}

	getName(): string {
		return this.name
	}

	getDate(): Date {
		return this.date
	}

	getFilePath(): string {
		return this.filePath
	}

	getFileFormat(): string {
		return this.fileFormat
	}
}
