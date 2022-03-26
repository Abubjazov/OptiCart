import { FC, useState } from 'react'

import { CartListItem } from '../../interfaces'
import { removeFromCart, updateQuantity } from '../../services/OptiCartService'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './CartItem.scss'

export const CartItem: FC<CartListItem> = ({
	id,
	name,
	picture,
	description,
	price,
	quantity,
}): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false)

	const fullPrice = (quantity: number, price: number) => {
		return (quantity * price).toFixed(2)
	}

	const removeCartItem = () => {
		setLoading(true)

		removeFromCart(id).then(() => setLoading(false))
	}

	const updateCartItem = (e: any) => {
		if (e.target.className === 'quantity-plus') {
			setLoading(true)

			updateQuantity(id, quantity + 1)
				// .then(() => updateCart(true))
				.then(() => setLoading(false))
		}

		if (e.target.className === 'quantity-minus') {
			setLoading(true)

			quantity > 1
				? updateQuantity(id, quantity - 1)
						// .then(() => updateCart(true))
						.then(() => setLoading(false))
				: removeFromCart(id)
						// .then(() => updateCart(true))
						.then(() => setLoading(false))
		}
	}

	return (
		<article className='cartitem'>
			<header>
				<img src={picture} alt={name} />
				<button onClick={removeCartItem}>
					{loading ? <SmallSpinner /> : 'Remove product'}
				</button>
			</header>

			<div className='cartitem-descriptor'>
				<h2>{name}</h2>
				{description}
			</div>

			<footer>
				<div className='quantity'>
					<button className='quantity-minus' onClick={updateCartItem}>
						{loading ? <SmallSpinner /> : '-'}
					</button>
					<span className='quantity-value'>{quantity}</span>
					<button className='quantity-plus' onClick={updateCartItem}>
						{loading ? <SmallSpinner /> : '+'}
					</button>
				</div>

				<h3 className='price'>{price} $</h3>

				<h3 className='full-price'>{fullPrice(quantity, price)} $</h3>
			</footer>
		</article>
	)
}
