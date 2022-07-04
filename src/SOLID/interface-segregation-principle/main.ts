import { Order } from './classes/order'
import { ShoppingCart } from './classes/shopping-cart'
import { Percistency } from './services/percistency'
import { Product } from './classes/product'
import { TenPercentDiscount } from './classes/discount'
import { Customer, CustomerEnterprise } from './classes/customer'

const customer = new Customer('John', 'Doe', '123.456.789-00')
const enterpriseCustomer = new CustomerEnterprise(
	'Company',
	'123.456.789/0001-00',
)
const withoutDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(withoutDiscount)
const percistency = new Percistency()
const order = new Order(shoppingCart, percistency, enterpriseCustomer)

shoppingCart.addItem(new Product('Pen', 0.99))
shoppingCart.addItem(new Product('Notebook', 99.99))
shoppingCart.addItem(new Product('Bottle Water', 1.99))
shoppingCart.addItem(new Product('Coffee', 2.99))

console.log(shoppingCart.totalCart())
order.finalizeCart()
console.log(order.orderStatus) // Finalized
