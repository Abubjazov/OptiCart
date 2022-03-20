import { nanoid } from 'nanoid'
import { CartItem, Checkout } from '../../components'
import { cartListItem } from '../../interfaces'

import './CartPage.scss'

export const CartPage = (): JSX.Element => {
	const products: cartListItem[] = [
		{
			id: 2,
			product_id: 15,
			name: 'Rangoto Vi',
			picture: 'https://i.ibb.co/T2XSnw0/z9.webp',
			description: 'Nemo dolore officia est natus.',
			price: 11.04,
			quantity: 3,
		},
		{
			id: 3,
			product_id: 16,
			name: 'Armo Sento 2',
			picture: 'https://i.ibb.co/TPT93hh/z10.jpg',
			description: 'Nobis in voluptatum qui voluptate.',
			price: 17.22,
			quantity: 1,
		},
		{
			id: 4,
			product_id: 9,
			name: 'Vertigo 2',
			picture: 'https://i.ibb.co/vvCZ6gp/nike.webp',
			description: 'Architecto omnis sed nostrum aliquid.',
			price: 26.11,
			quantity: 2,
		},
	]

	return (
		<main className='cart-page'>
			<div className='container'>
				<div className='cart'>
					{products.map((item: cartListItem) => (
						<CartItem key={nanoid()} {...item} />
					))}
				</div>
			</div>

			<div className='total'>
				<Checkout />
			</div>
		</main>
	)
}
