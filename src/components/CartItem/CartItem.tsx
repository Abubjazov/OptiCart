import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { CartListItem } from '../../interfaces'
import { fullPrice } from '../../utils/utils'
import { MediumSpinner } from '../Spinners/MediumSpinner'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './CartItem.scss'

export const CartItem = ({
	id,
	name,
	picture,
	picture_xlarge,
	picture_large,
	description,
	price,
	quantity,
}: CartListItem): JSX.Element => {
	const { currentItemId, status } = useTypedSelector(state => state.cart)
	const { removeFromCart, updateCartQuantity } = useActions()

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
				<picture>
					<source media='(min-width: 901px)' srcSet={picture} />
					<source media='(min-width: 651px)' srcSet={picture_xlarge} />
					<source media='(max-width: 650px)' srcSet={picture_large} />
					<img src={picture} alt={name} />
				</picture>

				<button onClick={() => removeFromCart(id)}>
					{status === 'loading' && currentItemId === id ? (
						<SmallSpinner />
					) : (
						'Remove product'
					)}
				</button>
			</header>

			<section className='cartitem-descriptor'>
				<h2>{name}</h2>
				<p>{description}</p>
			</section>

			<footer>
				<div className='quantity'>
					<button className='quantity-minus' onClick={updateQuantity}>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'-'
						)}
					</button>
					<div className='quantity-value'>{quantity}</div>
					<button className='quantity-plus' onClick={updateQuantity}>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'+'
						)}
					</button>
				</div>

				<h3 className='price'>{price} $</h3>

				<div className='full-price'>
					{status === 'loading' && currentItemId === id ? (
						<MediumSpinner />
					) : (
						<h3>{fullPrice(quantity, price)} $</h3>
					)}
				</div>
			</footer>
		</article>
	)
}
