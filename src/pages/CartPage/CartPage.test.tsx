import { render, screen } from '@testing-library/react'

import { CartPage } from './CartPage'

test('renders learn react link', () => {
	render(<CartPage />)
	const linkElement = screen.getByText(/cartlist/i)
	expect(linkElement).toBeInTheDocument()

	const linkElement2 = screen.getByText(/checkout/i)
	expect(linkElement2).toBeInTheDocument()
})
