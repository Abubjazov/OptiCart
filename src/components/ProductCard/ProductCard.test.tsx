import { render, screen } from '@testing-library/react'

import { ProductCard } from './ProductCard'

import { mockProducts } from '../../mockData/mockData'

test('ProductCard renders', () => {
	render(<ProductCard {...mockProducts[0]} />)

	const linkElement = screen.getByText(/Rangoto Vi/i)
	expect(linkElement).toBeInTheDocument()
})
