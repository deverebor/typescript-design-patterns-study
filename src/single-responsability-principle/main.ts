import { Order } from './entities/order'
import { ShoppingCart } from './entities/shopping-cart'
import { Percistency } from './services/percistency'
import { Product } from './entities/product'

const shoppingCart = new ShoppingCart()
const percistency = new Percistency()
const order = new Order(shoppingCart, percistency)

shoppingCart.addItem(new Product('Pen', 0.99))
shoppingCart.addItem(new Product('Notebook', 99.99))
shoppingCart.addItem(new Product('Bottle Water', 1.99))

order.finalizeCart()
console.log(order.orderStatus) // Finalized
