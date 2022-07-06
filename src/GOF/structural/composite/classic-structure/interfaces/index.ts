import { ProductComponent } from './product-component'

export interface IProductComposite {
	addProduct(product: ProductComponent): void
	removeProduct(product: ProductComponent): void
}
