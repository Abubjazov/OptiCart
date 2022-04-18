import { CartListItem } from '../interfaces'

export const fullPrice = (quantity: number, price: number) => {
	return (quantity * price).toFixed(2)
}

export const getTotal = (cart: CartListItem[]): string => {
	return (
		cart &&
		cart
			.reduce((sum: number, current: CartListItem): number => {
				return sum + parseFloat((current.quantity * current.price).toFixed(2))
			}, 0)
			.toFixed(2)
	)
}

export const removeFromCartSuccess = (
	cart: CartListItem[],
	payload: number
) => {
	return cart.filter((item: CartListItem) => item.id !== payload)
}

export const updateCartQuantitySuccess = (
	cart: CartListItem[],
	payload: {
		cartItemId: number
		quantity: number
	}
) => {
	return cart.map((item: CartListItem) => {
		if (item.id === payload.cartItemId) {
			item.quantity = payload.quantity
		}
		return item
	})
}
