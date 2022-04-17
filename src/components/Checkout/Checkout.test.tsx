import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { CartActionTypes } from '../../interfaces'

import { mockCartItems } from '../../mockData/mockData'

import { Checkout } from './Checkout'

const mockStore = configureStore([])

describe('Component: Checkout', () => {
	test('should render Checkout with cart.status = "loading"', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'loading',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Checkout with default store state', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Checkout with mockData store state', () => {
		const store = mockStore({
			cart: {
				cart: mockCartItems,
				status: 'waiting',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Checkout" button click', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			cart: {
				cart: mockCartItems,
				status: 'waiting',
			},
		})

		const expectedActions = [{ type: CartActionTypes.CHECKOUT_CART }]

		render(
			<Provider store={store}>
				<Checkout />
			</Provider>
		)

		userEvent.click(screen.getByText('Checkout'))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
