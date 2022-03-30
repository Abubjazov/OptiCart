import { fullPrice, getTotal } from './utils'

import { mockCartItems } from '../mockData/mockData'

describe('Function: utils/fullPrice()', () => {
	test('fullPrice() / Positive: calculates the total price and returns a string of the format "dd,dd"', () => {
		expect(fullPrice(5, 10)).toBe('50.00')
	})
})

describe('Function: utils/getTotal()', () => {
	test('getTotal() / Positive: calculates the total price of all Cart and returns a string of the format "dd,dd"', () => {
		expect(getTotal(mockCartItems)).toBe('102.56')
	})
})
