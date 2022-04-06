import './Message.scss'

const defaultMessage = 'There are no sneakers in your cart yet!!! )'
const defaultLinkText = 'Choose*YOURS!'

export const Message = ({
	message = defaultMessage,
	linkText = defaultLinkText,
}: MessageProps): JSX.Element => (
	<div role='alert' className='message'>
		<h2 tabIndex={0}>{message}</h2>

		<a href='/optiCart/'>
			{linkText?.split('*')[0]} <span>{linkText?.split('*')[1]}</span>
		</a>
	</div>
)

export interface MessageProps {
	message?: string | null
	linkText?: string | null
}
