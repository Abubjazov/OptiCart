import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CartActionTypes } from '../../interfaces'

import { mockCartItems } from '../../mockData/mockData'

import { CartItem } from './CartItem'

const mockStore = configureStore()

describe('Component: CartItem', () => {
	test('should render CartItem with cart.status = "loading" & cart.currentItemId = 1', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'loading',
				currentItemId: 1,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartItem with cart.status = "loading" & cart.currentItemId = null', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'loading',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Remove product" button click', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const expectedActions = [
			{ type: CartActionTypes.REMOVE_FROM_CART, payload: 1 },
		]

		render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		userEvent.click(screen.getByText('Remove product'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on " - " button click when quantity = 1', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const expectedActions = [
			{ type: CartActionTypes.REMOVE_FROM_CART, payload: 1 },
		]

		render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		userEvent.click(screen.getByText('-'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on " + " button click', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const expectedActions = [
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: {
					cartItemId: 1,
					quantity: 2,
				},
			},
		]

		render(
			<Provider store={store}>
				<CartItem {...mockCartItems[0]} />
			</Provider>
		)

		userEvent.click(screen.getByText('+'))
		expect(store.getActions()).toEqual(expectedActions)
	})

	test('should dispatch an action on " - " button click when quantity > 1', async () => {
		const middlewares = [thunk]
		const mockStore = configureStore(middlewares)

		let store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const expectedActions = [
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: {
					cartItemId: 2,
					quantity: 1,
				},
			},
		]

		render(
			<Provider store={store}>
				<CartItem {...mockCartItems[1]} />
			</Provider>
		)

		userEvent.click(screen.getByText('-'))
		expect(store.getActions()).toEqual(expectedActions)
	})
})
