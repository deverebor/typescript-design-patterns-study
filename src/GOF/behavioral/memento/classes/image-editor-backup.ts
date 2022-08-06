import { IMementoImage } from '../interfaces'
import { ImageEditor } from './image-editor'

export class ImageEditorBackup {
	private mementos: IMementoImage[] = []

	constructor(private readonly imageEditor: ImageEditor) {}

	backup() {
		console.log('Backup')
		this.mementos.push(this.imageEditor.save())
	}

	restore() {
		console.log('Restore')
		const mementos = this.mementos.pop()

		if (!mementos) {
			console.log('No mementos to restore')
			return
		}

		this.imageEditor.restore(mementos)
		console.log(`Restored: ${mementos.getName()} backup`)
	}

	showMementos() {
		this.mementos.forEach((memento) => {
			console.log(`Mementos: ${memento.getName()}`)
		})
	}
}
