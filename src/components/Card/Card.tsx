import { Product } from '../../interfaces/product.interface'
import './Card.scss'

export const Card = ({ name, picture, description, price }: Product) => (
	<div className='product'>
		<img src={picture} alt={name} />
		<div>
			<div className='product-name'>{name}</div>
		</div>

		<div className='product-description'>{description}</div>
		<div className='product-price'>Price: {price}</div>
	</div>
)
