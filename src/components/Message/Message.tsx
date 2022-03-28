import { NavLink } from 'react-router-dom'
import './Message.scss'

export const Message = (): JSX.Element => (
	<div className='message'>
		<h2>There are no sneakers in your cart yet!!! )</h2>

		<NavLink className='link' end to='/'>
			Choose <span>YOURS</span>!
		</NavLink>
	</div>
)
