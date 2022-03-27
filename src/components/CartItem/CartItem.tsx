import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { CartListItem } from '../../interfaces'
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
	const { currentItemId, status } = useTypedSelector(state => state.cart)
	const { removeFromCart, updateCartQuantity } = useActions()

	const fullPrice = (quantity: number, price: number) => {
		return (quantity * price).toFixed(2)
	}

	const updateQuantity = (e: any) => {
		if (e.target.classList.contains('quantity-minus')) {
			quantity > 1 ? updateCartQuantity(id, quantity - 1) : removeFromCart(id)
		}

		if (e.target.classList.contains('quantity-plus')) {
			updateCartQuantity(id, quantity + 1)
		}
	}

	return (
		<article className='cartitem'>
			<header>
				<img src={picture} alt={name} />
				<button onClick={() => removeFromCart(id)}>
					{status === 'loading' && currentItemId === id ? (
						<SmallSpinner />
					) : (
						'Remove product'
					)}
				</button>
			</header>

			<div className='cartitem-descriptor'>
				<h2>{name}</h2>
				{description}
			</div>

			<footer>
				<div className='quantity'>
					<button className='quantity-minus' onClick={updateQuantity}>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'-'
						)}
					</button>
					<span className='quantity-value'>{quantity}</span>
					<button className='quantity-plus' onClick={updateQuantity}>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'+'
						)}
					</button>
				</div>

				<h3 className='price'>{price} $</h3>

				<h3 className='full-price'>{fullPrice(quantity, price)} $</h3>
			</footer>
		</article>
	)
}
