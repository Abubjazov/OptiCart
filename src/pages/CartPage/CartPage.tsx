import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { CartItem, Checkout, Spinner } from '../../components'
import { CartListItem } from '../../interfaces'
import { getCart } from '../../services/OptiCartService'

import './CartPage.scss'

export const CartPage = (): JSX.Element => {
	const [cart, setCart] = useState<CartListItem[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)

		getCart()
			.then(result => setCart(result))
			.then(() => setLoading(false))
	}, [])

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{loading && <Spinner />}
					{!loading &&
						cart.map((item: CartListItem) => (
							<CartItem key={nanoid()} {...item} />
						))}
				</div>
			</div>

			<div className='total'>
				<Checkout />
			</div>
		</main>
	)
}
