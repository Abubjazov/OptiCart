import { CartListItem, Product } from '../interfaces'

const request = async (method: string, url: string, body: any = {}) => {
	let response

	if (method === 'GET') {
		response = await fetch(url)
	} else {
		response = await fetch(url, {
			method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
	}

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

export const getProducts = async (): Promise<Product[]> => {
	return await request('GET', process.env.REACT_APP_BASE_URL + 'products').then(
		res => res.products
	)
}

export const getCart = async (): Promise<CartListItem[]> => {
	return await request(
		'GET',
		process.env.REACT_APP_BASE_URL + 'cart_items'
	).then(res => res.cart_items)
}

export const addToCart = async (product_id: number): Promise<CartListItem> => {
	return await request('POST', process.env.REACT_APP_BASE_URL + 'cart_items', {
		product_id,
	}).then(res => res.cart_items)
}

export const removeFromCart = async (cartItemId: number) => {
	return await request(
		'DELETE',
		process.env.REACT_APP_BASE_URL + `cart_items/${cartItemId}`
	).then(res => res.cart_items)
}

export const updateQuantity = async (
	cartItemId: number,
	quantity: number
): Promise<CartListItem> => {
	return await request(
		'PUT',
		process.env.REACT_APP_BASE_URL + `cart_items/${cartItemId}`,
		{ quantity }
	).then(res => res.cart_items)
}
