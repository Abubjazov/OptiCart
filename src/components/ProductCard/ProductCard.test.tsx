import { render, screen } from '@testing-library/react'

import { ProductCard } from './ProductCard'

const product = {
	name: 'Air 1',
	picture: 'https://i.ibb.co/Y281B6p/nike9.webp',
	description: 'Qui animi et ullam dignissimos.',
	price: 12.32,
}

test('renders ProductCard', () => {
	render(<ProductCard {...product} />)
	const linkElement = screen.getByText(/Air 1/i)
	expect(linkElement).toBeInTheDocument()
})
