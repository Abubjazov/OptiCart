import { CartListItem } from '../../interfaces'

export const getCart = (payload: CartListItem[]) => ({
	type: 'GET_CART',
	payload,
})

export const removeFromCart = (payload: number) => ({
	type: 'REMOVE_FROM_CART',
	payload,
})

export const addToCart = (payload: CartListItem) => ({
	type: 'ADD_TO_CART',
	payload,
})

export const updateQuantity = (payload: any) => ({
	type: 'UPDATE_QUANTITY',
	payload,
})
