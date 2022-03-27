import {
	ProductAction,
	ProductActionTypes,
	ProductState,
} from '../../interfaces'

const initialState: ProductState = {
	products: [],
	currentProductId: null,
	status: 'waiting',
	error: null,
}

export const productReducer = (
	state: ProductState = initialState,
	action: ProductAction
): ProductState => {
	switch (action.type) {
		case ProductActionTypes.FETCH_PRODUCTS:
			return {
				status: 'loading',
				products: [],
				currentProductId: null,
				error: null,
			}

		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				status: 'waiting',
				products: action.payload,
				currentProductId: null,
				error: null,
			}

		case ProductActionTypes.FETCH_PRODUCTS_ERROR:
			return {
				status: 'error',
				products: [],
				currentProductId: null,
				error: action.payload,
			}

		default:
			return state
	}
}
