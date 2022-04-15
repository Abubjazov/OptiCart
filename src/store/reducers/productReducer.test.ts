import { ProductActionTypes } from '../../interfaces'
import { mockProducts } from '../../mockData/mockData'
import { initialState, productReducer } from './productReducer'

let testData = [...mockProducts]

describe('Reducer: productReducer', () => {
	test('FETCH_PRODUCTS: initiating the fetching of products data', () => {
		expect(
			productReducer(initialState, {
				type: ProductActionTypes.FETCH_PRODUCTS,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			currentProductId: null,
			error: null,
		})
	})

	test('FETCH_PRODUCTS_SUCCESS: fetching of products data success', () => {
		expect(
			productReducer(initialState, {
				type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: testData,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			products: testData,
		})
	})

	test('FETCH_PRODUCTS_ERROR: fetching of products data error', () => {
		expect(
			productReducer(initialState, {
				type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})
})
