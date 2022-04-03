import { render } from '@testing-library/react'

import { Spinner } from './Spinner'
import { MediumSpinner } from './MediumSpinner'
import { MediumSpinnerBlack } from './MediumSpinnerBlack'
import { SmallSpinner } from './SmallSpinner'

describe('Component: Spinner', () => {
	test('should render Spinners', () => {
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
