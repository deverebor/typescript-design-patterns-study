import { SellerProductType } from '../types'
import { Mediator } from './mediator'

export class Seller {
	private products: SellerProductType[] = []
	private _mediator?: Mediator

	set mediator(mediator: Mediator) {
		this._mediator = mediator
	}
	addProduct(...sellerProduct: SellerProductType[]): void {
		sellerProduct.forEach((product) => {
			this.products.push(product)
		})
	}
	showProducts(): void {
		this.products.forEach((product) => {
			console.log(
				`Product(${product.id}): ${product.name} - Price: ${product.price}R$`,
			)
		})
	}
	sellProduct(id: string): SellerProductType | void {
		const productId = this.products.findIndex((product) => product.id === id)
		if (productId === -1) return
		const product = this.products.splice(productId, 1)

		return product[0]
	}
}
