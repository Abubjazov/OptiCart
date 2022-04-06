import { render } from '@testing-library/react'
import { PageMarker } from './PageMarker'

describe('Component: PageMarker', () => {
	test('should render PageMarker', () => {
		const { asFragment } = render(<PageMarker pageName='test' />)

		expect(asFragment()).toMatchSnapshot()
	})
})
