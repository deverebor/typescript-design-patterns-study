import { ProductComposite } from './classes/product-composite'
import { ProductLeaf } from './classes/product-leaf'

const short = new ProductLeaf('Short', 10)
const shirt = new ProductLeaf('Shirt', 20)
const jacket = new ProductLeaf('Jacket', 50)

const productBox = new ProductComposite()
productBox.addProduct(short, shirt, jacket)

console.log(productBox)
console.log(productBox.getPrice())

const hat = new ProductLeaf('Hat', 5)
const glasses = new ProductLeaf('Glasses', 15)

const anotherProductBox = new ProductComposite()
anotherProductBox.addProduct(hat, glasses)

productBox.addProduct(anotherProductBox)

console.log(productBox)
console.log(productBox.getPrice())
