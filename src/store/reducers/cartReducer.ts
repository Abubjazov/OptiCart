import { CartAction, CartActionTypes, CartState } from '../../interfaces'

const initialState: CartState = {
	cart: [],
	status: 'waiting',
	error: null,
}

export const cartReducer = (
	state: CartState = initialState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case CartActionTypes.FETCH_CART:
			return { status: 'loading', cart: [], error: null }

		case CartActionTypes.FETCH_CART_SUCCESS:
			return { status: 'waiting', cart: action.payload, error: null }

		case CartActionTypes.FETCH_CART_ERROR:
			return { status: 'error', cart: [], error: action.payload }

		default:
			return state
	}
}
