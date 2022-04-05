export enum ProductActionTypes {
	FETCH_PRODUCTS = 'FETCH_PRODUCTS',
	FETCH_PRODUCTS_SUCCESS = 'FFETCH_PRODUCTS_SUCCESS',
	FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

export interface Product {
	id: number
	name: string
	picture: string
	picture_medium: string
	picture_small: string
	description: string
	price: number
}

export interface ProductState {
	products: Product[]
	currentProductId: null | number
	status: 'waiting' | 'error' | 'loading'
	error: null | string
}

interface FetchProductsAction {
	type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
	type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
	payload: Product[]
}

interface FetchProductsErrorAction {
	type: ProductActionTypes.FETCH_PRODUCTS_ERROR
	payload: string
}

export type ProductAction =
	| FetchProductsAction
	| FetchProductsSuccessAction
	| FetchProductsErrorAction
