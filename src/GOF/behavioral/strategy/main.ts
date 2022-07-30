import { ECommerceShoppingCart } from './classes/ecommerce-shopping-cart'
import { DefaultDiscountStrategy } from './strategies/default-discount-strategy'
import { FivePercentDiscount } from './strategies/five-percent-discount'

const shoppingCart = new ECommerceShoppingCart()

// shoppingCart.discountStrategy = new DefaultDiscountStrategy()
shoppingCart.discountStrategy = new FivePercentDiscount()

shoppingCart.addProduct(
	{ name: 'Product 1', price: 100 },
	{ name: 'Product 2', price: 200 },
	{ name: 'Product 3', price: 300 },
)

shoppingCart.showTotal()
shoppingCart.showTotalWithDiscount()
