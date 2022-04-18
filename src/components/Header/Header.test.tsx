import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './Header'

describe('Component: Header', () => {
	test('should render Header', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header with Active Main', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)

		userEvent.click(screen.getByText('Main'))

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render Header with Active Cart', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)

		userEvent.click(screen.getByText('Cart'))

		expect(asFragment()).toMatchSnapshot()
	})
})
