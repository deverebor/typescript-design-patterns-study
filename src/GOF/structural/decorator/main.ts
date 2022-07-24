import { ProductBrandDecorator } from './classes/product-brand-decorator'
import { ProductCustomizedDecorator } from './classes/product-customized-decorator'
import { Shoes } from './products/shoes'

const shoes = new Shoes()
const shoesBranded = new ProductBrandDecorator(shoes)
const customizedShoes = new ProductCustomizedDecorator(shoesBranded)

console.log(shoes.price, shoes.name)
console.log(shoesBranded.price, shoesBranded.name)
console.log(customizedShoes.price, customizedShoes.name)
