import { CartList, Checkout } from '../../components'
import './CartPage.scss'

export const CartPage = () => (
	<div className='cart'>
		<CartList />
		<Checkout />
	</div>
)
