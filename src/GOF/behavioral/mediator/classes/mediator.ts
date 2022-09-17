import { Seller } from './seller'
import { SellerProductType } from '../types/index'

export class Mediator {
	sellers: Seller[] = []

	addSeller(...sellers: Seller[]): void {
		sellers.forEach((seller) => {
			this.sellers.push(seller)
			seller.mediator = this
		})
	}
	buyProduct(id: string): SellerProductType | void {
		let product

		for (let i = 0; i < this.sellers.length; i++) {
			product = this.sellers[i].sellProduct(id)

			if (product) {
				console.log(
					`Product(${product.id}) ${product.name} was sold for ${product.price}R$!`,
				)
				return
			}
		}

		console.log(`Product(${id}) not found`)
	}
	showProducts(): void {
		this.sellers.forEach((seller) => {
			seller.showProducts()
		})
	}
}
