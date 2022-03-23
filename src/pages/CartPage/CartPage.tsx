import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { CartItem, Checkout, Message, Spinner } from '../../components'
import { CartListItem } from '../../interfaces'
import { getCart } from '../../services/OptiCartService'

import './CartPage.scss'

export const CartPage = (): JSX.Element => {
	const [cart, setCart] = useState<CartListItem[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		updateCart()
	}, [])

	const updateCart = (nospinner: boolean = false) => {
		!nospinner && setLoading(true)

		getCart()
			.then(result => setCart(result))
			.then(() => setLoading(false))
	}

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{loading && <Spinner />}
					{!loading ? (
						cart.length > 0 ? (
							cart.map(
								({ id, name, picture, description, price, quantity }) => (
									<CartItem
										key={nanoid()}
										id={id}
										name={name}
										picture={picture}
										description={description}
										price={price}
										quantity={quantity}
										updateCart={updateCart}
									/>
								)
							)
						) : (
							<Message />
						)
					) : null}
				</div>
			</div>

			<div className='total'>
				<Checkout cartData={cart} />
			</div>
		</main>
	)
}
