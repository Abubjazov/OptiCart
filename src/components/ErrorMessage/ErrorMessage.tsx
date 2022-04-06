import './ErrorMessage.scss'

export const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element => (
	<div role='alert' className='error-message'>
		<p tabIndex={0}>{error?.split('*')[0]}</p>
		<p tabIndex={0}>{error?.split('*')[1]}</p>

		<a href='/optiCart/'>Back to main page</a>
	</div>
)

export interface ErrorMessageProps {
	error: string | null
}
