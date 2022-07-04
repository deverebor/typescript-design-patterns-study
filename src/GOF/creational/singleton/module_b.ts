import { DataBaseClassic } from './db/database-classic'
import { DataBaseModule } from './db/database-module'
import { DataBaseFunction } from './db/database-function'
import { myDataBaseFromModuleA } from './module_a'

const myDataBaseFromModuleB = DataBaseFunction

myDataBaseFromModuleB.addUser({ name: 'Socrates', age: 30 })
myDataBaseFromModuleB.addUser({ name: 'Marx', age: 20 })
myDataBaseFromModuleB.addUser({ name: 'Madame Currie', age: 18 })
myDataBaseFromModuleB.showUser()

console.log(myDataBaseFromModuleA === myDataBaseFromModuleB)
