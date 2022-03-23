import { Action, CartListItem } from '../../interfaces'

const initialState: { cart: CartListItem[] } = { cart: [] }

export const cartReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case 'GET_CART':
			return { ...state, cart: [...action.payload] }

		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.payload],
			}

		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			}

		// case 'UPDATE_QUANTITY':
		// 	return {
		// 		...state,
		// 		cart: [
		// 			...state.cart.filter(item => item.id !== action.payload.id),
		// 			...(state.cart.filter(
		// 				item => item.id === action.payload.id
		// 			))[0].quantity = action.payload.quantity,
		// 		],
		// 	}

		default:
			return state
	}
}
