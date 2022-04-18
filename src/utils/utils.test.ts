import {
	fullPrice,
	getTotal,
	removeFromCartSuccess,
	updateCartQuantitySuccess,
} from './utils'

import { mockCartItems } from '../mockData/mockData'

describe('Function: utils/fullPrice()', () => {
	test('fullPrice() / Positive: calculates the total price and returns a string of the format "dd,dd"', () => {
		expect(fullPrice(5, 10)).toBe('50.00')
	})
})

describe('Function: utils/getTotal()', () => {
	test('getTotal() / Positive: calculates the total price of all Cart and returns a string of the format "dd,dd"', () => {
		expect(getTotal(mockCartItems)).toBe('87.76')
	})
})

describe('Function: utils/removeFromCartSuccess()', () => {
	test('removeFromCartSuccess() / Positive: returns an array (CartListItem[]) without the specified element (payload)', () => {
		expect(removeFromCartSuccess(mockCartItems, 1)).toEqual([
			{
				id: 2,
				product_id: 2,
				name: 'Indigo',
				picture_xlarge: 'https://i.ibb.co/FBTQYHv/5-400-400.webp',
				picture_large: 'https://i.ibb.co/6wG8hfd/5-360-360.webp',
				picture: 'https://i.ibb.co/6N8qGfs/5-250-250.webp',
				picture_medium: 'https://i.ibb.co/XzC3pT5/5-200-200.webp',
				picture_small: 'https://i.ibb.co/tZKmKRX/5-180-180.webp',
				description: 'Rem ut excepturi quidem nesciunt.',
				price: 16.63,
				quantity: 2,
			},
		])
	})
})

describe('Function: utils/updateCartQuantitySuccess()', () => {
	test('updateCartQuantitySuccess() / Positive: returns an array with the updated quantity  value (payload.quantity) of the specified element (payload.cartItemId)', () => {
		expect(
			updateCartQuantitySuccess(mockCartItems, { cartItemId: 1, quantity: 3 })
		).toEqual([
			{
				id: 1,
				product_id: 1,
				name: 'Paco',
				picture_xlarge: 'https://i.ibb.co/84RrCYH/4-400-400.webp',
				picture_large: 'https://i.ibb.co/LSd3drp/4-360-360.webp',
				picture: 'https://i.ibb.co/DrymCMM/4-250-250.webp',
				picture_medium: 'https://i.ibb.co/tDLC3HD/4-200-200.webp',
				picture_small: 'https://i.ibb.co/vkWWP8z/4-180-180.webp',
				description: 'Ab odit numquam consectetur aut.',
				price: 54.5,
				quantity: 3,
			},
			{
				id: 2,
				product_id: 2,
				name: 'Indigo',
				picture_xlarge: 'https://i.ibb.co/FBTQYHv/5-400-400.webp',
				picture_large: 'https://i.ibb.co/6wG8hfd/5-360-360.webp',
				picture: 'https://i.ibb.co/6N8qGfs/5-250-250.webp',
				picture_medium: 'https://i.ibb.co/XzC3pT5/5-200-200.webp',
				picture_small: 'https://i.ibb.co/tZKmKRX/5-180-180.webp',
				description: 'Rem ut excepturi quidem nesciunt.',
				price: 16.63,
				quantity: 2,
			},
		])
	})
})
