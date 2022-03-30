import { render } from '@testing-library/react'
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
})
