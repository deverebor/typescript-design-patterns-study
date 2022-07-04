import { DataBaseClassic } from './db/database-classic'
import { DataBaseModule } from './db/database-module'
import { DataBaseFunction } from './db/database-function'

const myDataBaseFromModuleA = DataBaseFunction

myDataBaseFromModuleA.addUser({ name: 'John', age: 30 })
myDataBaseFromModuleA.addUser({ name: 'Lucas', age: 20 })
myDataBaseFromModuleA.addUser({ name: 'Geisielle', age: 18 })
myDataBaseFromModuleA.showUser()

export { myDataBaseFromModuleA }
