import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { mockProducts } from '../../mockData/mockData'
import { store } from '../../store'
import { ProductCard } from './ProductCard'

describe('Component: ProductCard', () => {
	test('should render ProductCard', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<ProductCard {...mockProducts[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
