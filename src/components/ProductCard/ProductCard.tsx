import { Product } from '../../interfaces/product.interface'
import './ProductCard.scss'

export const ProductCard = ({
	id,
	name,
	picture,
	description,
	price,
}: Product): JSX.Element => (
	<article className='product'>
		<header>
			<img src={picture} alt={name} />
		</header>

		<section>
			<h2>{name}</h2>
			{description}
		</section>

		<footer>
			{price} $<button>Add to cart</button>
		</footer>
	</article>
)
