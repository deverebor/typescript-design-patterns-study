import { Buyer } from './classes/buyer'
import { Mediator } from './classes/mediator'
import { Seller } from './classes/seller'

const mediator = new Mediator()

const sellerOne = new Seller()
sellerOne.addProduct(
	{ id: '1', name: 'Product 1', price: 10 },
	{ id: '2', name: 'Product 2', price: 20 },
	{ id: '3', name: 'Product 3', price: 30 },
)

const sellerTwo = new Seller()
sellerTwo.addProduct(
	{ id: '4', name: 'Product 4', price: 40 },
	{ id: '5', name: 'Product 5', price: 50 },
	{ id: '6', name: 'Product 6', price: 60 },
)

mediator.addSeller(sellerOne, sellerTwo)

const buyer = new Buyer(mediator)
buyer.showProducts()
buyer.buyProduct('2')
buyer.buyProduct('4')
buyer.showProducts()
