import { CartListItem, Product } from '../interfaces'

const getResource = async (url: string) => {
	let response = await fetch(url)

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

export const getProducts = async (): Promise<Product[]> => {
	return await getResource(
		'https://opticartapi.herokuapp.com/api/products'
	).then(res => res.products)
}

export const getCart = async (): Promise<CartListItem[]> => {
	return await getResource(
		'https://opticartapi.herokuapp.com/api/cart_items'
	).then(res => res.cart_items)
}
