import { NavLink } from 'react-router-dom'

import './ErrorMessage.scss'

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => (
	<div className='error-message'>
		<p>{error}</p>

		<NavLink to='/optiCart/'>Back to main page</NavLink>
	</div>
)

export interface ErrorMessageProps {
	error: string | null
}
