import { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { CartListItem } from '../../interfaces'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './Checkout.scss'

export const Checkout: FC = (): JSX.Element => {
	const { cart, status } = useTypedSelector(state => state.cart)

	const getTotal = (cart: CartListItem[]): string => {
		return (
			cart &&
			cart
				.reduce((sum: number, current: CartListItem): number => {
					return sum + parseFloat((current.quantity * current.price).toFixed(2))
				}, 0)
				.toFixed(2)
		)
	}

	return (
		<section className='checkout'>
			<h2>
				Total: {status === 'loading' ? <SmallSpinner /> : getTotal(cart)} $
			</h2>
			<button>Checkout</button>
		</section>
	)
}
