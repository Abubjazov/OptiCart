import axios from 'axios'
import { Dispatch } from 'redux'

import { CartAction, CartActionTypes } from '../../interfaces'

export const fetchCart = () => {
	return async (dispatch: Dispatch<CartAction>) => {
		try {
			dispatch({ type: CartActionTypes.FETCH_CART })

			const response = await axios.get(
				process.env.REACT_APP_BASE_URL + 'cart_items'
			)

			dispatch({
				type: CartActionTypes.FETCH_CART_SUCCESS,
				payload: response.data.cart_items,
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.FETCH_CART_ERROR,
				payload: `An error occurred while loading the cart!*${error}`,
			})
		}
	}
}

export const addToCart = (product_id: number) => {
	return async (dispatch: Dispatch<CartAction>) => {
		try {
			dispatch({ type: CartActionTypes.ADD_TO_CART, payload: product_id })

			const response = await axios.post(
				process.env.REACT_APP_BASE_URL + 'cart_items',
				{ product_id }
			)

			dispatch({
				type: CartActionTypes.ADD_TO_CART_SUCCESS,
				payload: response.data,
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.ADD_TO_CART_ERROR,
				payload: `An error occurred while adding an item to the cart!*${error}`,
			})
		}
	}
}

export const removeFromCart = (product_id: number) => {
	return async (dispatch: Dispatch<CartAction>) => {
		try {
			dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: product_id })

			const response = await axios.delete(
				process.env.REACT_APP_BASE_URL + `cart_items/${product_id}`
			)

			dispatch({
				type: CartActionTypes.REMOVE_FROM_CART_SUCCESS,
				payload: response.data.id,
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.REMOVE_FROM_CART_ERROR,
				payload: `An error occurred while removing an item from the cart!*${error}`,
			})
		}
	}
}

export const updateCartQuantity = (cartItemId: number, quantity: number) => {
	return async (dispatch: Dispatch<CartAction>) => {
		try {
			dispatch({
				type: CartActionTypes.UPDATE_CART_QUANTITY,
				payload: { cartItemId, quantity },
			})

			await axios.put(
				process.env.REACT_APP_BASE_URL + `cart_items/${cartItemId}`,
				{ quantity }
			)

			dispatch({
				type: CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS,
				payload: { cartItemId, quantity },
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.UPDATE_CART_QUANTITY_ERROR,
				payload: `An error occurred while updating an cart item quantity!*${error}`,
			})
		}
	}
}

export const checkoutCart = () => {
	return async (dispatch: Dispatch<CartAction>) => {
		try {
			dispatch({ type: CartActionTypes.CHECKOUT_CART })

			await axios.post(process.env.REACT_APP_BASE_URL + 'checkout')

			dispatch({
				type: CartActionTypes.CHECKOUT_CART_SUCCESS,
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.CHECKOUT_CART_ERROR,
				payload: `An error occurred while checkout!*${error}`,
			})
		}
	}
}
