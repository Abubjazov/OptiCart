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
				payload: `An error occurred while loading the cart!${error}`,
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
				{
					product_id,
				}
			)

			dispatch({
				type: CartActionTypes.ADD_TO_CART_SUCCESS,
				payload: response.data.cart_items,
			})
		} catch (error) {
			dispatch({
				type: CartActionTypes.ADD_TO_CART_ERROR,
				payload: `An error occurred while adding an item to the cart!${error}`,
			})
		}
	}
}
