import { NavLink } from 'react-router-dom'

import './ErrorMessage.scss'

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => (
	<div className='error-message'>
		<p>{error?.split('*')[0]}</p>
		<p>{error?.split('*')[1]}</p>

		<NavLink end to='/optiCart/'>
			Back to main page
		</NavLink>
	</div>
)

export interface ErrorMessageProps {
	error: string | null
}
