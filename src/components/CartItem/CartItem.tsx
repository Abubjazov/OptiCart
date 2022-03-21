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
	return (
		<article className='cartitem'>
			<header>
				<img src={picture} alt={name} />
				<button onClick={() => removeFromCart(id)}>Remove product</button>
			</header>

			<div className='cartitem-descriptor'>
				<h2>{name}</h2>
				{description}
			</div>

			<footer>
				<div className='quantity'>
					<button
						className='quantity-minus'
						onClick={
							quantity > 1
								? () => updateQuantity(id, quantity - 1)
								: () => removeFromCart(id)
						}
					>
						<span>-</span>
					</button>
					<span className='quantity-value'>{quantity}</span>
					<button
						className='quantity-plus'
						onClick={() => updateQuantity(id, quantity + 1)}
					>
						<span>+</span>
					</button>
				</div>

				<h3 className='price'>{price} $</h3>

				<h3 className='full-price'>{price} $</h3>
			</footer>
		</article>
	)
}
