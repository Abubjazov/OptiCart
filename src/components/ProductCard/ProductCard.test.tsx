import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CartActionTypes } from '../../interfaces'

import { mockProducts } from '../../mockData/mockData'

import { ProductCard } from './ProductCard'

const mockStore = configureStore()

describe('Component: ProductCard', () => {
	test('should render ProductCard with cart.status = "loading" & cart.currentItemId = 1', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'loading',
				currentItemId: 1,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<ProductCard {...mockProducts[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render ProductCard with cart.status = "loading" & cart.currentItemId = null', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'loading',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<ProductCard {...mockProducts[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Add to cart" button click', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		const store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const expectedActions = [{ type: CartActionTypes.ADD_TO_CART, payload: 1 }]

		render(
			<Provider store={store}>
				<ProductCard {...mockProducts[0]} />
			</Provider>
		)

		userEvent.click(screen.getByText('Add to cart'))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
