import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import { MainPage } from './MainPage'

describe('Component: MainPage', () => {
	test('should render MainPage', () => {
		const { asFragment } = render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
