import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CartListItem } from '../../interfaces'

import './Checkout.scss'

export const Checkout = () => {
	const { cart } = useTypedSelector(state => state.cart)

	const getTotal = (cart: CartListItem[]) => {
		return cart.length > 0
			? cart
					.reduce((sum: number, current: CartListItem): number => {
						return (
							sum + parseFloat((current.quantity * current.price).toFixed(2))
						)
					}, 0)
					.toFixed(2)
			: 0
	}

	return (
		<section className='checkout'>
			<h2>Total: {getTotal(cart)} $</h2>
			<button>Checkout</button>
		</section>
	)
}
