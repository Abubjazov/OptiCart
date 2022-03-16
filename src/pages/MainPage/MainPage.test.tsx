import { render, screen } from '@testing-library/react'

import { MainPage } from './MainPage'

test('renders learn react link', () => {
	render(<MainPage />)
	const linkElement = screen.getByText(/main page/i)
	expect(linkElement).toBeInTheDocument()
})
