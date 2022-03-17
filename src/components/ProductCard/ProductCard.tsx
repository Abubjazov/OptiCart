import { Product } from '../../interfaces/product.interface'
import './ProductCard.scss'

export const ProductCard = ({
	name,
	picture,
	description,
	price,
}: Product): JSX.Element => (
	<div className='product'>
		<img src={picture} alt={name} />
		<div className='product-about'>
			<div className='product-name'>{name}</div>
			<div className='product-description'>{description}</div>
			<div className='product-price'>
				Price: {price} $<button>Add to cart</button>
			</div>
		</div>
	</div>
)
