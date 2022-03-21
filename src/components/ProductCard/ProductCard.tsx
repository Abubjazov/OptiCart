import { useState } from 'react'

import { Product } from '../../interfaces/product.interface'
import { addToCart } from '../../services/OptiCartService'
import { SmallSpinner } from '../Spinners/SmallSpinner'

import './ProductCard.scss'

export const ProductCard = ({
	id,
	name,
	picture,
	description,
	price,
}: Product): JSX.Element => {
	const [addStatus, setAddStatus] = useState<boolean>(false)

	const addProduct = () => {
		setAddStatus(true)

		addToCart(id).then(() => setAddStatus(false))
	}

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
				<button onClick={addProduct}>
					{addStatus ? <SmallSpinner /> : 'Add to cart'}
				</button>
			</footer>
		</article>
	)
}
