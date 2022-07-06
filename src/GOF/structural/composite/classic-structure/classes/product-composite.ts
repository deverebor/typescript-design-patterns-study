import { IProductComposite } from '../interfaces'
import { ProductComponent } from '../interfaces/product-component'

export class ProductComposite
	extends ProductComponent
	implements IProductComposite
{
	private children: ProductComponent[] = []

	getPrice(): number {
		return this.children.reduce((total, child) => total + child.getPrice(), 0)
	}

	addProduct(...products: ProductComponent[]): void {
		products.forEach((product) => this.children.push(product))
	}

	removeProduct(product: ProductComponent): void {
		const productIndex = this.children.indexOf(product)
		if (productIndex !== -1) this.children.splice(productIndex, 1)
	}
}
