import { Order } from './classes/order'
import { ShoppingCart } from './classes/shopping-cart'
import { Percistency } from './services/percistency'
import { Product } from './classes/product'
import { TenPercentDiscount } from './classes/discount'

const withoutDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(withoutDiscount)
const percistency = new Percistency()
const order = new Order(shoppingCart, percistency)

shoppingCart.addItem(new Product('Pen', 0.99))
shoppingCart.addItem(new Product('Notebook', 99.99))
shoppingCart.addItem(new Product('Bottle Water', 1.99))
shoppingCart.addItem(new Product('Coffee', 2.99))

console.log(shoppingCart.totalCart())
order.finalizeCart()
console.log(order.orderStatus) // Finalized
