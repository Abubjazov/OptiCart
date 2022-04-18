import { CartAction, CartActionTypes, CartState } from '../../interfaces'
import {
	removeFromCartSuccess,
	updateCartQuantitySuccess,
} from '../../utils/utils'

export const initialState: CartState = {
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
			return { ...state, status: 'loading', currentItemId: null, error: null }

		case CartActionTypes.FETCH_CART_SUCCESS:
			return {
				...state,
				status: 'waiting',
				cart: action.payload,
			}

		case CartActionTypes.FETCH_CART_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				status: 'loading',
				error: null,
				currentItemId: action.payload,
			}

		case CartActionTypes.ADD_TO_CART_SUCCESS:
			return {
				...state,
				status: 'waiting',
				cart: [...state.cart, action.payload],
			}

		case CartActionTypes.ADD_TO_CART_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

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
				cart: removeFromCartSuccess(state.cart, action.payload),
			}

		case CartActionTypes.REMOVE_FROM_CART_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CartActionTypes.UPDATE_CART_QUANTITY:
			return {
				...state,
				status: 'loading',
				error: null,
				currentItemId: action.payload.cartItemId,
			}

		case CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS:
			return {
				...state,
				status: 'waiting',
				cart: updateCartQuantitySuccess(state.cart, action.payload),
			}

		case CartActionTypes.UPDATE_CART_QUANTITY_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		case CartActionTypes.CHECKOUT_CART:
			return { ...state, status: 'loading', currentItemId: null, error: null }

		case CartActionTypes.CHECKOUT_CART_SUCCESS:
			return {
				...state,
				status: 'checkouted',
				cart: [],
			}

		case CartActionTypes.CHECKOUT_CART_ERROR:
			return {
				...state,
				status: 'error',
				error: action.payload,
			}

		default:
			return state
	}
}
