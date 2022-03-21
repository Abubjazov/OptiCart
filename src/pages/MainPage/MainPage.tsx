import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { ProductCard } from '../../components'
import { Product } from '../../interfaces/product.interface'
import { getProducts } from '../../services/OptiCartService'

import './MainPage.scss'

export const MainPage = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		getProducts().then(result => setProducts(result))
	}, [])

	return (
		<main className='main-page'>
			<div className='container'>
				{products &&
					products.map((item: Product) => (
						<ProductCard key={nanoid()} {...item} />
					))}
			</div>
		</main>
	)
}
