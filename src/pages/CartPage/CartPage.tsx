import { nanoid } from 'nanoid'
import { useEffect } from 'react'

import {
	CartItem,
	Checkout,
	ErrorMessage,
	Message,
	Spinner,
} from '../../components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CartListItem } from '../../interfaces'

import './CartPage.scss'

export const CartPage = (): JSX.Element => {
	const { status, currentItemId, error, cart } = useTypedSelector(
		state => state.cart
	)
	const { fetchCart } = useActions()

	useEffect(() => {
		fetchCart()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (status === 'loading' && currentItemId === null) {
		return (
			<main className='cart-page'>
				<div className='container'>
					<div className='cart'>
						<Spinner />
					</div>
				</div>
			</main>
		)
	}

	if (status === 'error') {
		return (
			<main>
				<ErrorMessage error={error} />
			</main>
		)
	}

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{cart.length > 0 ? (
						cart
							.map((item: CartListItem) => (
								<CartItem key={nanoid()} {...item} />
							))
							.reverse()
					) : (
						<Message />
					)}
				</div>
			</div>

			<div className='total'>
				<Checkout />
			</div>
		</main>
	)
}
