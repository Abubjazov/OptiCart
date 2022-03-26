import { Product } from './product.interface'

export enum CartActionTypes {
	FETCH_CART = 'FETCH_CART',
	FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
	FETCH_CART_ERROR = 'FETCH_CART_ERROR',
}

export interface CartListItem extends Product {
	product_id: number
	quantity: number
}

export interface CartState {
	cart: CartListItem[]
	status: 'waiting' | 'error' | 'loading'
	error: null | string
}

interface FetchCartAction {
	type: CartActionTypes.FETCH_CART
}

interface FetchCartSuccessAction {
	type: CartActionTypes.FETCH_CART_SUCCESS
	payload: CartListItem[]
}

interface FetchCartErrorAction {
	type: CartActionTypes.FETCH_CART_ERROR
	payload: string
}

export type CartAction =
	| FetchCartAction
	| FetchCartSuccessAction
	| FetchCartErrorAction
