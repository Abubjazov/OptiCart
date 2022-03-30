import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from '../store'

describe('Component: App', () => {
	test('should render App', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<App />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
