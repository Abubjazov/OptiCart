import { CartActionTypes, CartListItem } from '../../interfaces'
import { mockCartItems } from '../../mockData/mockData'
import { initialState, cartReducer } from './cartReducer'

describe('Reducer: cartReducer', () => {
	test('FETCH_CART: should change state', () => {
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

	test('FETCH_CART_SUCCESS: should change state', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.FETCH_CART_SUCCESS,
				payload: mockCartItems,
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: mockCartItems,
		})
	})

	test('FETCH_CART_ERROR: should change state', () => {
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

	test('ADD_TO_CART: should change state', () => {
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

	test('ADD_TO_CART_SUCCESS: should change state', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.ADD_TO_CART_SUCCESS,
				payload: mockCartItems[0],
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: [...initialState.cart, mockCartItems[0]],
		})
	})

	test('ADD_TO_CART_ERROR: should change state', () => {
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

	test('UPDATE_CART_QUANTITY: should change state', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: { cartItemId: 1, quantity: 2 },
			})
		).toEqual({
			...initialState,
			status: 'loading',
			error: null,
			currentItemId: 1,
		})
	})

	test('UPDATE_CART_QUANTITY_SUCCESS: should change state', () => {
		expect(
			cartReducer(initialState, {
				type: CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS,
				payload: { cartItemId: 1, quantity: 2 },
			})
		).toEqual({
			...initialState,
			status: 'waiting',
			cart: initialState.cart.map((item: CartListItem) => {
				if (item.id === 1) {
					item.quantity = 2
				}
				return item
			}),
		})
	})

	test('UPDATE_CART_QUANTITY_ERROR: should change state', () => {
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

	test('REMOVE_FROM_CART: should change state', () => {
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

	test('REMOVE_FROM_CART_SUCCESS: should change state', () => {
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

	test('REMOVE_FROM_CART_ERROR: should change state', () => {
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

	test('CHECKOUT_CART: should change state', () => {
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

	test('CHECKOUT_CART_SUCCESS: should change state', () => {
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

	test('CHECKOUT_CART_ERROR: should change state', () => {
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
