import { cartListItem } from '../../interfaces'
import './CartItem.scss'

export const CartItem = ({
	id,
	product_id,
	name,
	picture,
	description,
	price,
	quantity,
}: cartListItem): JSX.Element => (
	<article className='cartitem'>
		<header>
			<img src={picture} alt={name} />
			<button>Remove product</button>
		</header>

		<section>
			<h2 className='cartitem-name'>{name}</h2>
			{description}
		</section>

		<footer>
			<div className='quantity'>
				<button className='quantity-minus'>
					<span>-</span>
				</button>
				<span className='quantity-value'>{quantity}</span>
				<button className='quantity-plus'>
					<span>+</span>
				</button>
			</div>

			<h3 className='price'>{price} $</h3>

			<h3 className='full-price'>{price} $</h3>
		</footer>
	</article>
)
