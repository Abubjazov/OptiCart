import { render } from '@testing-library/react'
import { ErrorGif } from './ErrorGif'

test('renders ErrorGif', () => {
	const { asFragment } = render(<ErrorGif />)
	expect(asFragment()).toMatchSnapshot()
})
