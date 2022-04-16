import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { CartActionTypes } from '../../interfaces'
import {
	addToCart,
	checkoutCart,
	fetchCart,
	removeFromCart,
	updateCartQuantity,
} from './cart.actionCreators'

import { mockCartItems } from '../../mockData/mockData'

jest.mock('axios')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action creator: fetchCart', () => {
	test('Fetching: Success', async () => {
		axios.get.mockImplementationOnce(() =>
			Promise.resolve({ data: { cart_items: mockCartItems } })
		)

		const expectedActions = [
			{ type: CartActionTypes.FETCH_CART },
			{
				type: CartActionTypes.FETCH_CART_SUCCESS,
				payload: mockCartItems,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchCart()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Fetching: Error', async () => {
		const errorMessage = 'Network Error'

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{ type: CartActionTypes.FETCH_CART },
			{
				type: CartActionTypes.FETCH_CART_ERROR,
				payload: `An error occurred while loading the cart!*${new Error(
					errorMessage
				)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(fetchCart()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: addToCart', () => {
	test('Adding: Success', async () => {
		axios.post.mockImplementationOnce(() =>
			Promise.resolve({ data: mockCartItems[0] })
		)

		const expectedActions = [
			{ type: CartActionTypes.ADD_TO_CART, payload: 1 },
			{
				type: CartActionTypes.ADD_TO_CART_SUCCESS,
				payload: mockCartItems[0],
			},
		]

		const store = mockStore({})

		return store.dispatch(addToCart(1)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Adding: Error', async () => {
		const errorMessage = 'Network Error'

		axios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{ type: CartActionTypes.ADD_TO_CART, payload: 1 },
			{
				type: CartActionTypes.ADD_TO_CART_ERROR,
				payload: `An error occurred while adding an item to the cart!*${new Error(
					errorMessage
				)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(addToCart(1)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: removeFromCart', () => {
	test('Removing: Success', async () => {
		axios.delete.mockImplementationOnce(() =>
			Promise.resolve({ data: { id: 1, status: 'ok' } })
		)

		const expectedActions = [
			{ type: CartActionTypes.REMOVE_FROM_CART, payload: 1 },
			{
				type: CartActionTypes.REMOVE_FROM_CART_SUCCESS,
				payload: 1,
			},
		]

		const store = mockStore({})

		return store.dispatch(removeFromCart(1)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Removing: Error', async () => {
		const errorMessage = 'Network Error'

		axios.delete.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{ type: CartActionTypes.REMOVE_FROM_CART, payload: 1 },
			{
				type: CartActionTypes.REMOVE_FROM_CART_ERROR,
				payload: `An error occurred while removing an item from the cart!*${new Error(
					errorMessage
				)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(removeFromCart(1)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: updateCartQuantity', () => {
	test('Quantity updating: Success', async () => {
		axios.put.mockImplementationOnce(() =>
			Promise.resolve({ data: mockCartItems[0] })
		)

		const expectedActions = [
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: { cartItemId: 1, quantity: 3 },
			},
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS,
				payload: { cartItemId: 1, quantity: 3 },
			},
		]

		const store = mockStore({})

		return store.dispatch(updateCartQuantity(1, 3)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Quantity updating: Error', async () => {
		const errorMessage = 'Network Error'

		axios.put.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: { cartItemId: 1, quantity: 3 },
			},
			{
				type: CartActionTypes.UPDATE_CART_QUANTITY_ERROR,
				payload: `An error occurred while updating an cart item quantity!*${new Error(
					errorMessage
				)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(updateCartQuantity(1, 3)).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})

describe('Action creator: checkoutCart', () => {
	test('Checkouting: Success', async () => {
		axios.post.mockImplementationOnce(() => Promise.resolve())

		const expectedActions = [
			{ type: CartActionTypes.CHECKOUT_CART },
			{
				type: CartActionTypes.CHECKOUT_CART_SUCCESS,
			},
		]

		const store = mockStore({})

		return store.dispatch(checkoutCart()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

	test('Checkouting: Error', async () => {
		const errorMessage = 'Network Error'

		axios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		)

		const expectedActions = [
			{ type: CartActionTypes.CHECKOUT_CART },
			{
				type: CartActionTypes.CHECKOUT_CART_ERROR,
				payload: `An error occurred while checkout!*${new Error(errorMessage)}`,
			},
		]

		const store = mockStore({})

		return store.dispatch(checkoutCart()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
})
