import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Message } from './Message'

describe('Component: Message', () => {
	test('should render default Message', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Message />
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})

	test('should render modified Message', () => {
		const { asFragment } = render(
			<BrowserRouter>
				<Message message='Test message' linkText='Test*Link text' />
			</BrowserRouter>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
