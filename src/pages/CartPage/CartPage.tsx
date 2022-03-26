import { nanoid } from 'nanoid'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

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

export const CartPage: FC = (): JSX.Element => {
	const { currentItemId, cart, error, status } = useTypedSelector(
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
				<p style={{ textAlign: 'center', fontWeight: 300, fontSize: 24 }}>
					{error}
				</p>
				<Link
					to='/'
					style={{
						display: 'block',
						textAlign: 'center',
						fontWeight: 300,
						fontSize: 24,
						marginTop: 13,
						color: '#429188',
					}}
				>
					Back to main page
				</Link>
			</main>
		)
	}

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{cart && cart.length > 0 ? (
						cart.map((item: CartListItem) => (
							<CartItem key={nanoid()} {...item} />
						))
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
