import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CartActionTypes } from '../../interfaces'

import { mockCartItems } from '../../mockData/mockData'

import { CartPage } from './CartPage'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: CartPage', () => {
	test('should render CartPage with Spinner', () => {
		const store = mockStore({
			cart: {
				status: 'loading',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartPage with default store', () => {
		const store = mockStore({
			cart: {
				cart: [],
				status: 'waiting',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartPage with cart.status = "loading" & cart.currentItemId != null', () => {
		const store = mockStore({
			cart: {
				cart: mockCartItems,
				status: 'loading',
				currentItemId: 1,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartPage with Error', () => {
		const store = mockStore({
			cart: {
				status: 'error',
				currentItemId: 'Test error message',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartPage with cart items list', () => {
		const store = mockStore({
			cart: {
				cart: mockCartItems,
				status: 'waiting',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})

	test('should render CartPage arter Checkout', () => {
		const store = mockStore({
			cart: {
				status: 'checkouted',
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<CartPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
