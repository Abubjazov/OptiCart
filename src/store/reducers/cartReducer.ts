import {
	CartAction,
	CartActionTypes,
	CartListItem,
	CartState,
} from '../../interfaces'

const initialState: CartState = {
	cart: [],
	currentItemId: null,
	status: 'waiting',
	error: null,
}

export const cartReducer = (
	state: CartState = initialState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case CartActionTypes.FETCH_CART:
			return { status: 'loading', cart: [], currentItemId: null, error: null }

		case CartActionTypes.FETCH_CART_SUCCESS:
			return {
				status: 'waiting',
				cart: action.payload,
				currentItemId: null,
				error: null,
			}

		case CartActionTypes.FETCH_CART_ERROR:
			return {
				status: 'error',
				cart: [],
				error: action.payload,
				currentItemId: null,
			}

		case CartActionTypes.ADD_TO_CART:
			return {
				status: 'loading',
				cart: [],
				error: null,
				currentItemId: action.payload,
			}

		case CartActionTypes.ADD_TO_CART_SUCCESS:
			return { ...state, status: 'waiting', cart: action.payload }

		case CartActionTypes.ADD_TO_CART_ERROR:
			return { ...state, status: 'error', error: action.payload }

		case CartActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				status: 'loading',
				error: null,
				currentItemId: action.payload,
			}

		case CartActionTypes.REMOVE_FROM_CART_SUCCESS:
			return {
				...state,
				status: 'waiting',
				cart: state.cart.filter(
					(item: CartListItem) => item.id !== action.payload
				),
			}

		case CartActionTypes.REMOVE_FROM_CART_ERROR:
			return { ...state, status: 'error', error: action.payload }

		default:
			return state
	}
}
