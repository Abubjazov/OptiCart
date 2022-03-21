import { CartListItem, Product } from '../interfaces'

const getResource = async (url: string) => {
	let response = await fetch(url)

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

const postResource = async (url: string, body: any) => {
	let response = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

const putResource = async (url: string, body: any) => {
	let response = await fetch(url, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

const deleteResource = async (url: string) => {
	let response = await fetch(url, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`)
	}

	return await response.json()
}

export const getProducts = async (): Promise<Product[]> => {
	return await getResource(process.env.REACT_APP_BASE_URL + 'products').then(
		res => res.products
	)
}

export const getCart = async (): Promise<CartListItem[]> => {
	return await getResource(process.env.REACT_APP_BASE_URL + 'cart_items').then(
		res => res.cart_items
	)
}

export const addToCart = async (product_id: number): Promise<CartListItem> => {
	return await postResource(process.env.REACT_APP_BASE_URL + 'cart_items', {
		product_id,
	}).then(res => res.cart_items)
}

export const removeFromCart = async (cartItemId: number) => {
	return await deleteResource(
		process.env.REACT_APP_BASE_URL + `cart_items/${cartItemId}`
	).then(res => res.cart_items)
}

export const updateQuantity = async (
	cartItemId: number,
	quantity: number
): Promise<CartListItem> => {
	return await putResource(
		process.env.REACT_APP_BASE_URL + `cart_items/${cartItemId}`,
		{ quantity }
	).then(res => res.cart_items)
}
