import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CartActionTypes, ProductActionTypes } from '../../interfaces'

import { mockProducts } from '../../mockData/mockData'

import { MainPage } from './MainPage'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Component: MainPage', () => {
	test('should render MainPage with Spinner', () => {
		const store = mockStore({
			product: {
				status: 'loading',
				currentProductId: null,
			},
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render MainPage with Error', () => {
		const store = mockStore({
			product: {
				status: 'error',
				error: 'Test error message',
			},
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render MainPage with products list', () => {
		const store = mockStore({
			product: {
				products: mockProducts,
				status: 'waiting',
				currentProductId: null,
			},
			cart: {
				cart: [],
				status: 'loading',
				currentItemId: 1,
			},
		})

		const { asFragment } = render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should dispatch an action on "Add to cart" button click', async () => {
		const store = mockStore({
			product: {
				products: mockProducts,
				status: 'waiting',
				currentProductId: null,
				error: null,
			},
			cart: {
				cart: [],
				status: 'waiting',
				currentItemId: null,
			},
		})
		const expectedActions = [
			{ type: ProductActionTypes.FETCH_PRODUCTS },
			{ type: CartActionTypes.ADD_TO_CART, payload: 1 },
		]
		render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		)
		userEvent.click(screen.getAllByText('Add to cart')[0])
		expect(store.getActions()).toEqual(expectedActions)
	})
})
