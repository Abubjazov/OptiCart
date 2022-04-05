import { NavLink } from 'react-router-dom'
import './Message.scss'

const defaultMessage = 'There are no sneakers in your cart yet!!! )'
const defaultLinkText = 'Choose*YOURS!'

export const Message = ({
	message = defaultMessage,
	linkText = defaultLinkText,
}: MessageProps): JSX.Element => (
	<div className='message'>
		<h2>{message}</h2>

		<NavLink className='link' end to='/optiCart/'>
			{linkText?.split('*')[0]} <span>{linkText?.split('*')[1]}</span>
		</NavLink>
	</div>
)

export interface MessageProps {
	message?: string | null
	linkText?: string | null
}
