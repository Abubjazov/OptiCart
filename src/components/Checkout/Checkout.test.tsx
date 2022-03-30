import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { Checkout } from './Checkout'

describe('Component: CartItem', () => {
	test('should render CartItem', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
