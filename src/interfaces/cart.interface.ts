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

	CHECKOUT_CART = 'CHECKOUT_CART',
	CHECKOUT_CART_SUCCESS = 'CHECKOUT_CART_SUCCESS',
	CHECKOUT_CART_ERROR = 'CHECKOUT_CART_ERROR',
}

export interface CartListItem extends Product {
	product_id: number
	quantity: number
}

export interface CartState {
	cart: CartListItem[]
	currentItemId: null | number
	status: 'waiting' | 'error' | 'loading' | 'checkouted'
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
	payload: CartListItem
}
interface addToCartErrorAction {
	type: CartActionTypes.ADD_TO_CART_ERROR
	payload: string
}

interface removeFromCartAction {
	type: CartActionTypes.REMOVE_FROM_CART
	payload: number
}

interface removeFromCartSuccessAction {
	type: CartActionTypes.REMOVE_FROM_CART_SUCCESS
	payload: number
}
interface removeFromCartErrorAction {
	type: CartActionTypes.REMOVE_FROM_CART_ERROR
	payload: string
}

interface updateCartQuantityAction {
	type: CartActionTypes.UPDATE_CART_QUANTITY
	payload: { cartItemId: number; quantity: number }
}
interface updateCartQuantitySuccessAction {
	type: CartActionTypes.UPDATE_CART_QUANTITY_SUCCESS
	payload: { cartItemId: number; quantity: number }
}
interface updateCartQuantityErrorAction {
	type: CartActionTypes.UPDATE_CART_QUANTITY_ERROR
	payload: string
}

interface checkoutAction {
	type: CartActionTypes.CHECKOUT_CART
}
interface checkoutSuccessAction {
	type: CartActionTypes.CHECKOUT_CART_SUCCESS
}
interface checkoutErrorAction {
	type: CartActionTypes.CHECKOUT_CART_ERROR
	payload: string
}

export type CartAction =
	| FetchCartAction
	| FetchCartSuccessAction
	| FetchCartErrorAction
	| addToCartAction
	| addToCartSuccessAction
	| addToCartErrorAction
	| removeFromCartAction
	| removeFromCartSuccessAction
	| removeFromCartErrorAction
	| updateCartQuantityAction
	| updateCartQuantitySuccessAction
	| updateCartQuantityErrorAction
	| checkoutAction
	| checkoutSuccessAction
	| checkoutErrorAction
