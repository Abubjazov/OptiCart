import { Product } from './product.interface'

export enum CartActionTypes {
	FETCH_CART = 'FETCH_CART',
	FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
	FETCH_CART_ERROR = 'FETCH_CART_ERROR',
	ADD_TO_CART = 'ADD_TO_CART',
	ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS',
	ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS',
	REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR',
	UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY',
	UPDATE_CART_QUANTITY_SUCCESS = 'UPDATE_CART_QUANTITY_SUCCESS',
	UPDATE_CART_QUANTITY_ERROR = 'UPDATE_CART_QUANTITY_ERROR',
}

export interface CartListItem extends Product {
	product_id: number
	quantity: number
}

export interface CartState {
	cart: CartListItem[]
	currentItemId: null | number
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

interface addToCartAction {
	type: CartActionTypes.ADD_TO_CART
	payload: number
}

interface addToCartSuccessAction {
	type: CartActionTypes.ADD_TO_CART_SUCCESS
	payload: CartListItem[]
}
interface addToCartErrorAction {
	type: CartActionTypes.ADD_TO_CART_ERROR
	payload: string
}
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }
// interface Action {
// 	type: CartActionTypes
// 	payload: any
// }

export type CartAction =
	| FetchCartAction
	| FetchCartSuccessAction
	| FetchCartErrorAction
	| addToCartAction
	| addToCartSuccessAction
	| addToCartErrorAction
