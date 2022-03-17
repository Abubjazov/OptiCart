import { Card } from '../../components'
import { Product } from '../../interfaces/product.interface'

import './MainPage.scss'

export const MainPage = () => {
	const products: Product[] = [
		{
			name: 'Air 1',
			picture: 'https://i.ibb.co/Y281B6p/nike9.webp',
			description: 'Qui animi et ullam dignissimos.',
			price: 12.32,
		},
		{
			name: 'Air 2',
			picture: 'https://i.ibb.co/HFLmzLp/nike8.webp',
			description: 'Soluta ratione assumenda accusamus sequi.',
			price: 10.21,
		},
		{
			name: 'Rango Max',
			picture: 'https://i.ibb.co/R9FwhBx/nike7.webp',
			description: 'Est odit minima ut sunt.',
			price: 9.15,
		},
		{
			name: 'Paco',
			picture: 'https://i.ibb.co/zGd7cKQ/nike6.webp',
			description: 'Nulla nihil adipisci accusantium suscipit.',
			price: 16.14,
		},
		{
			name: 'Indigo',
			picture: 'https://i.ibb.co/WKpMdP9/nike5.webp',
			description: 'Earum sit repellat eos rem.',
			price: 27.17,
		},
		{
			name: 'Nimiro',
			picture: 'https://i.ibb.co/27LxqHH/nike4.webp',
			description: 'Dolor optio dicta rem quia.',
			price: 23.12,
		},
		{
			name: 'RGenta',
			picture: 'https://i.ibb.co/YQcJ4D4/nike3.jpg',
			description: 'Exercitationem magnam illo distinctio enim.',
			price: 16.34,
		},
		{
			name: 'Vertigo 1',
			picture: 'https://i.ibb.co/M7BdDB0/nike2.webp',
			description: 'Ea vel eum ullam cupiditate.',
			price: 12.54,
		},
		{
			name: 'Vertigo 2',
			picture: 'https://i.ibb.co/vvCZ6gp/nike.webp',
			description: 'Unde fugit asperiores eum voluptas.',
			price: 26.11,
		},
		{
			name: 'Orbito',
			picture: 'https://i.ibb.co/tK0hN6Q/nike11.webp',
			description: 'Numquam excepturi consequatur voluptates quisquam.',
			price: 36.67,
		},
	]
	return (
		<main className='main-page'>
			<div className='container'>
				<ul>
					{products.map((item: Product) => (
						<Card {...item} />
					))}
				</ul>
			</div>
		</main>
	)
}
