import { Order } from './classes/Order'
import { ShoppingCart } from './classes/ShoppingCart'
import { Persistency } from './services/Persistency'
import { Product } from './classes/Product'
import { TenPercentDiscount } from './classes/Discount'
import { Customer, CustomerEnterprise } from './classes/Customer'
import { Messaging } from './services/Messaging'

const customer = new Customer('John', 'Doe', '123.456.789-00')
const enterpriseCustomer = new CustomerEnterprise(
	'Company',
	'123.456.789/0001-00',
)
const withoutDiscount = new TenPercentDiscount()
const shoppingCart = new ShoppingCart(withoutDiscount)
const message = new Messaging()
const percistency = new Persistency(message)
const order = new Order(shoppingCart, percistency, enterpriseCustomer)

shoppingCart.addItem(new Product('Pen', 0.99))
shoppingCart.addItem(new Product('Notebook', 99.99))
shoppingCart.addItem(new Product('Bottle Water', 1.99))
shoppingCart.addItem(new Product('Coffee', 2.99))

console.log(shoppingCart.totalCart())
order.finalizeCart()
console.log(order.orderStatus) // Finalized
