import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ProductActionTypes } from '../../interfaces'

import { mockCartItems } from '../../mockData/mockData'
import { fetchProducts } from './product.actionCreators'

jest.mock('axios')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchCart', () => {
	test('Success', async () => {
		axios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { products: mockCartItems } })
		)

		const expectedActions = [
			{ type: ProductActionTypes.FETCH_PRODUCTS },
			{
				type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: mockCartItems,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchProducts()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Error', async () => {
		const errorMessage = 'Network Error'

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{ type: ProductActionTypes.FETCH_PRODUCTS },
			{
				type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
				payload: `An error occurred while loading the products!*${new Error(
					errorMessage
				)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchProducts()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
