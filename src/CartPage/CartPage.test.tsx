import { render, screen } from '@testing-library/react'

import { CartPage } from './CartPage'

test('renders learn react link', () => {
	render(<CartPage />)
	const linkElement = screen.getByText(/shopping cart/i)
	expect(linkElement).toBeInTheDocument()
})
