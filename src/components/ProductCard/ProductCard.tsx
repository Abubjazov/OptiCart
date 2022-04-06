import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { Product } from '../../interfaces/product.interface'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './ProductCard.scss'

export const ProductCard = ({
	id,
	name,
	picture_xlarge,
	description,
	price,
}: Product): JSX.Element => {
	const { currentItemId, status } = useTypedSelector(state => state.cart)
	const { addToCart } = useActions()

	return (
		<article
			tabIndex={0}
			aria-label={`sneakers ${name}, unit price ${price} $`}
			className='product'
		>
			<header>
				<img height={200} width={200} src={picture_xlarge} alt={name} />
			</header>

			<section className='product-descriptor'>
				<h2>{name}</h2>
				<p>{description}</p>
			</section>

			<footer>
				{price} $
				<button
					aria-label={`Add to cart sneakers ${name}`}
					onClick={() => addToCart(id)}
				>
					{status === 'loading' && currentItemId === id ? (
						<SmallSpinner />
					) : (
						'Add to cart'
					)}
				</button>
			</footer>
		</article>
	)
}
