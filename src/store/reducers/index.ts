import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { productReducer } from './productReducer'

export const rootReducer = combineReducers({
	product: productReducer,
	cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
