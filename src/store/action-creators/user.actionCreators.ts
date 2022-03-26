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
