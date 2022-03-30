import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { mockCartItems } from '../../mockData/mockData'
import { CartItem } from './CartItem'

describe('Component: CartItem', () => {
	test('should render CartItem', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
