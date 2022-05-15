import axios from 'axios'
import { Dispatch } from 'redux'

import { ProductAction, ProductActionTypes } from '../../interfaces'

export const fetchProducts = (): any => {
	return async (dispatch: Dispatch<ProductAction>) => {
		try {
			dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })

			const response = await axios.get(
				process.env.REACT_APP_BASE_URL + 'products'
			)

			dispatch({
				type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
				payload: response.data.products,
			})
		} catch (error) {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
				payload: `An error occurred while loading the products!*${error}`,
			})
		}
	}
}
