import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { Checkout } from './Checkout'

describe('Component: Checkout', () => {
	test('should render Checkout', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
