import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import { Product } from '../../interfaces/product.interface'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './ProductCard.scss'

export const ProductCard: FC<Product> = ({
	id,
	name,
	picture,
	description,
	price,
}): JSX.Element => {
	const { currentItemId, status } = useTypedSelector(state => state.cart)
	const { addToCart } = useActions()

	return (
		<article className='product'>
			<header>
				<img src={picture} alt={name} />
			</header>

			<div className='product-descriptor'>
				<h2>{name}</h2>
				{description}
			</div>

			<footer>
				{price} $
				<button onClick={() => addToCart(id)}>
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
