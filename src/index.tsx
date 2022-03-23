import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App/App'
import { store } from './store/store'

import './index.scss'
import {
	addToCart,
	getCart,
	removeFromCart,
	updateQuantity,
} from './store/actions/actions'
import { CartListItem } from './interfaces'

const res = [
	{
		id: 2,
		product_id: 15,
		name: 'Rangoto Vi',
		picture: 'https://i.ibb.co/T2XSnw0/z9.webp',
		description: 'Nemo dolore officia est natus.',
		price: 11.04,
		quantity: 3,
	},
	{
		id: 3,
		product_id: 16,
		name: 'Armo Sento 2',
		picture: 'https://i.ibb.co/TPT93hh/z10.jpg',
		description: 'Nobis in voluptatum qui voluptate.',
		price: 17.22,
		quantity: 1,
	},
	{
		id: 4,
		product_id: 9,
		name: 'Vertigo 2',
		picture: 'https://i.ibb.co/vvCZ6gp/nike.webp',
		description: 'Architecto omnis sed nostrum aliquid.',
		price: 26.11,
		quantity: 2,
	},
]
const res2 = {
	id: 13,
	product_id: 15,
	name: 'Rangoto Vi',
	picture: 'https://i.ibb.co/T2XSnw0/z9.webp',
	description: 'Nemo dolore officia est natus.',
	price: 11.04,
	quantity: 3,
}

// const res3 = {
// 	id: 13,
// 	quantity: 13,
// }

const { subscribe, dispatch, getState } = store

const bindActionCreator =
	(creator: any, dispatch: any) =>
	(...args: any) => {
		dispatch(creator(...args))
	}

const getCartDispatch = bindActionCreator(getCart, dispatch)
const removeFromCartDispatch = bindActionCreator(removeFromCart, dispatch)
const addToCartDispatch = bindActionCreator(addToCart, dispatch)
// const updateQuantityDispatch = bindActionCreator(updateQuantity, dispatch)

subscribe(() => {
	console.log(getState())
})

getCartDispatch(res)
removeFromCartDispatch(2)
addToCartDispatch(res2)
// updateQuantityDispatch(res3)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
