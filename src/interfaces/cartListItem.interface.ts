import { Product } from './product.interface'

export interface CartListItem extends Product {
	product_id: number
	quantity: number
}
