import { ImageExtensionType, IMementoImage } from '../interfaces'
import { ConcreteMemento } from './concrete-memento'

export class ImageEditor {
	constructor(private filePath: string, private fileFormat: string) {}

	convertFormat(format: ImageExtensionType) {
		this.fileFormat = format
		this.filePath = this.filePath.replace(/\.[^/.]+$/, `.${format}`)
	}

	save(): Readonly<IMementoImage> {
		const date = new Date()
		return new ConcreteMemento(
			date.toISOString(),
			date,
			this.filePath,
			this.fileFormat,
		)
	}

	restore(memento: IMementoImage) {
		const concreteMemento = memento as ConcreteMemento

		this.filePath = concreteMemento.getFilePath()
		this.fileFormat = concreteMemento.getFileFormat()
	}
}
