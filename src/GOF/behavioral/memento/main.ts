import { ImageEditor } from './classes/image-editor'
import { ImageEditorBackup } from './classes/image-editor-backup'

const newIgm = new ImageEditor('/media/image.jpg', 'jpg')
const imgBackup = new ImageEditorBackup(newIgm)

newIgm.convertFormat('png')
imgBackup.backup()
newIgm.convertFormat('gif')
console.log(newIgm)

imgBackup.restore()
console.log(newIgm)
