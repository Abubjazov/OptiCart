import { NavLink } from 'react-router-dom'
import './ErrorMessage.scss'

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => (
	<div className='error-message'>
		<p style={{ textAlign: 'center', fontWeight: 300, fontSize: 24 }}>
			{error}
		</p>
		<NavLink
			to='/'
			style={{
				display: 'block',
				textAlign: 'center',
				fontWeight: 300,
				fontSize: 24,
				marginTop: 13,
				color: '#429188',
			}}
		>
			Back to main page
		</NavLink>
	</div>
)

export interface ErrorMessageProps {
	error: string | null
}
