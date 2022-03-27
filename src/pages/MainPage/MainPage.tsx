import { nanoid } from 'nanoid'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ProductCard, Spinner } from '../../components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Product } from '../../interfaces/product.interface'

import './MainPage.scss'

export const MainPage: FC = (): JSX.Element => {
	const { status, currentProductId, error, products } = useTypedSelector(
		state => state.product
	)
	const { fetchProducts } = useActions()

	useEffect(() => {
		fetchProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (status === 'loading' && currentProductId === null) {
		return (
			<main className='cart-page'>
				<div className='container'>
					<div className='cart'>
						<Spinner />
					</div>
				</div>
			</main>
		)
	}

	if (status === 'error') {
		return (
			<main>
				<p style={{ textAlign: 'center', fontWeight: 300, fontSize: 24 }}>
					{error}
				</p>
				<Link
					to='/'
					style={{
						display: 'block',
						textAlign: 'center',
						fontWeight: 300,
						fontSize: 24,
						marginTop: 13,
						color: '#429188',
					}}
				>
					Back to main page
				</Link>
			</main>
		)
	}

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
