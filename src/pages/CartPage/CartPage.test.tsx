import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { CartPage } from './CartPage'

describe('Component: CartPage', () => {
	test('should render CartPage', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
