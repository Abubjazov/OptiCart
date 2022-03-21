import { CartListItem } from '../../interfaces'
import { removeFromCart, updateQuantity } from '../../services/OptiCartService'

import './CartItem.scss'

export const CartItem = ({
	id,
	product_id,
	name,
	picture,
	description,
	price,
	quantity,
}: CartListItem): JSX.Element => {
	const removeCartItem = () => {
		removeFromCart(id).then(res => console.log(`removed ${res}`))
	}

	const updateCartItem = (e: any) => {
		if (e.target.className === 'quantity-plus') {
			updateQuantity(id, quantity + 1)
		}

		if (e.target.className === 'quantity-minus') {
			quantity > 1 ? updateQuantity(id, quantity - 1) : removeFromCart(id)
		}
	}

	return (
		<article className='cartitem'>
			<header>
				<img src={picture} alt={name} />
				<button onClick={removeCartItem}>Remove product</button>
			</header>

			<div className='cartitem-descriptor'>
				<h2>{name}</h2>
				{description}
			</div>

			<footer>
				<div className='quantity'>
					<button className='quantity-minus' onClick={updateCartItem}>
						-
					</button>
					<span className='quantity-value'>{quantity}</span>
					<button className='quantity-plus' onClick={updateCartItem}>
						+
					</button>
				</div>

				<h3 className='price'>{price} $</h3>

				<h3 className='full-price'>{price} $</h3>
			</footer>
		</article>
	)
}
