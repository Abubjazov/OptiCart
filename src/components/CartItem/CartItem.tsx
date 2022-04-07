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

	const fullprice = fullPrice(quantity, price)

	const updateQuantity = (e: any) => {
		if (e.target.classList.contains('quantity-minus')) {
			quantity > 1 ? updateCartQuantity(id, quantity - 1) : removeFromCart(id)
		}

		if (e.target.classList.contains('quantity-plus')) {
			updateCartQuantity(id, quantity + 1)
		}
	}

	return (
		<article
			tabIndex={0}
			className='cartitem'
			aria-label={`Sneakers ${name} in your cart, unit price ${price} $, quantity ${quantity}`}
		>
			<header>
				<picture>
					<source media='(min-width: 901px)' srcSet={picture} />
					<source media='(min-width: 651px)' srcSet={picture_xlarge} />
					<source media='(max-width: 650px)' srcSet={picture_large} />
					<img src={picture} alt={name} />
				</picture>

				<button
					aria-label={`Remove sneakers ${name} from cart`}
					onClick={() => removeFromCart(id)}
				>
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
					<button
						aria-label={`Reduce the quantity of ${name} by one`}
						className='quantity-minus'
						onClick={updateQuantity}
					>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'-'
						)}
					</button>
					<h3
						aria-label={`Quantity of product ${name} is ${quantity}`}
						tabIndex={0}
						className='quantity-value'
					>
						{quantity}
					</h3>
					<button
						aria-label={`Increase the quantity of ${name} by one`}
						className='quantity-plus'
						onClick={updateQuantity}
					>
						{status === 'loading' && currentItemId === id ? (
							<SmallSpinner />
						) : (
							'+'
						)}
					</button>
				</div>

				<h3
					aria-label={`Sneakers ${name} unit price is ${price} $`}
					tabIndex={0}
					className='price'
				>
					{price} $
				</h3>

				<div className='full-price'>
					{status === 'loading' && currentItemId === id ? (
						<MediumSpinner />
					) : (
						<h3
							aria-label={`Total price of the ordered sneakers ${name} is ${fullprice} $`}
							tabIndex={0}
						>
							{fullprice} $
						</h3>
					)}
				</div>
			</footer>
		</article>
	)
}
