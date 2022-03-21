import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { CartItem, Checkout } from '../../components'
import { CartListItem } from '../../interfaces'
import { getCart } from '../../services/OptiCartService'

import './CartPage.scss'

export const CartPage = (): JSX.Element => {
	const [cart, setCart] = useState<CartListItem[]>([])

	useEffect(() => {
		getCart().then(result => setCart(result))
	}, [])

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{cart.map((item: CartListItem) => (
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
