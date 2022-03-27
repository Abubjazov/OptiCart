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
				...state,
				status: 'loading',
				currentProductId: null,
				error: null,
			}

		case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				status: 'waiting',
				products: action.payload,
				currentProductId: null,
				error: null,
			}

		case ProductActionTypes.FETCH_PRODUCTS_ERROR:
			return {
				...state,
				status: 'error',
				currentProductId: null,
				error: action.payload,
			}

		default:
			return state
	}
}
