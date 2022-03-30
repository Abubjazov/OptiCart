import { render } from '@testing-library/react'
import { MediumSpinner } from './MediumSpinner'
import { MediumSpinnerBlack } from './MediumSpinnerBlack'
import { SmallSpinner } from './SmallSpinner'

import { Spinner } from './Spinner'

describe('Component: Header', () => {
	test('should render Header', () => {
		const { asFragment } = render(
			<>
				<SmallSpinner />
				<Spinner />
				<MediumSpinner />
				<MediumSpinnerBlack />
			</>
		)

		expect(asFragment()).toMatchSnapshot()
	})
})
