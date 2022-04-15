import { CartActionTypes, CartListItem } from '../../interfaces'
import { mockCartItems } from '../../mockData/mockData'
import { initialState, cartReducer } from './cartReducer'

let testData = [...mockCartItems]

describe('Reducer: cartReducer', () => {
	test('FETCH_CART: initiating the fetching of cart data', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.FETCH_CART,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			currentItemId: null,
			error: null,
		})
	})

	test('FETCH_CART_SUCCESS: fetching of cart data success', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.FETCH_CART_SUCCESS,
				payload: testData,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: testData,
		})
	})

	test('FETCH_CART_ERROR: fetching of cart data error', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.FETCH_CART_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})

	test('ADD_TO_CART: initiating adding an item to the cart', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.ADD_TO_CART,
				payload: 1,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
			currentItemId: 1,
		})
	})

	test('ADD_TO_CART_SUCCESS: adding an item to the cart success', () => {
		testData[0].quantity += 1

		expect(
			cartReducer(initialState, {
				type: CartActionTypes.ADD_TO_CART_SUCCESS,
				payload: testData[0],
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: [...initialState.cart, testData[0]],
		})
	})

	test('ADD_TO_CART_ERROR: adding an item to the error', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.ADD_TO_CART_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})

	test('UPDATE_CART_QUANTITY: initiating an update of the quantity of goods in the cart', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: { cartItemId: 1, quantity: 1 },
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
			currentItemId: 1,
		})
	})

	test('UPDATE_CART_QUANTITY_SUCCESS: updating the quantity of goods in the cart success', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS,
				payload: { cartItemId: 1, quantity: 1 },
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: initialState.cart.map((item: CartListItem) => {
				if (item.id === 1) {
					item.quantity = 1
				}
				return item
			}),
		})
	})

	test('UPDATE_CART_QUANTITY_ERROR: updating the quantity of goods in the cart error', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.UPDATE_CART_QUANTITY_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})

	test('REMOVE_FROM_CART: initiating removal of goods from the cart', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.REMOVE_FROM_CART,
				payload: 1,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
			currentItemId: 1,
		})
	})

	test('REMOVE_FROM_CART_SUCCESS: removing an item from the cart success', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.REMOVE_FROM_CART_SUCCESS,
				payload: 1,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: initialState.cart.filter((item: CartListItem) => item.id !== 1),
		})
	})

	test('REMOVE_FROM_CART_ERROR: removing an item from the cart error', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.REMOVE_FROM_CART_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})

	test('CHECKOUT_CART: initiating check out cart', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.CHECKOUT_CART,
			})
		).toEqual({
			...initialState,
			status: 'loading',
			currentItemId: null,
			error: null,
		})
	})

	test('CHECKOUT_CART_SUCCESS: check out cart success', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.CHECKOUT_CART_SUCCESS,
			})
		).toEqual({
			...initialState,
			status: 'checkouted',
			cart: [],
		})
	})

	test('CHECKOUT_CART_ERROR: check out cart error', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.CHECKOUT_CART_ERROR,
				payload: 'Test Error string',
			})
		).toEqual({
			...initialState,
			status: 'error',
			error: 'Test Error string',
		})
	})
})
