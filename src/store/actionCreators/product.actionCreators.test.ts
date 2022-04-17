import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ProductActionTypes } from '../../interfaces'
import { fetchProducts } from './product.actionCreators'

import { mockProducts } from '../../mockData/mockData'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action creator: fetchProducts', () => {
	test('Fetching: Success', async () => {
		mockedAxios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { products: mockProducts } })
		)

		const expectedActions = [
			{ type: ProductActionTypes.FETCH_PRODUCTS },
			{
				type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: mockProducts,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchProducts()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetching: Error', async () => {
		const errorMessage = 'Network Error'

		mockedAxios.get.mockImplementationOnce(() =>
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
