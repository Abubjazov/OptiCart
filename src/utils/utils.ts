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
