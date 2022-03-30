import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Message } from './Message'

describe('Component: Header', () => {
	test('should render Header', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Message />
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
