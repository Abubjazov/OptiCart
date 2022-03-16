import { CartList, Checkout, Header } from '../components'
import './CartPage.scss'

export const CartPage = () => (
	<div className='cart'>
		<Header />
		<CartList />
		<Checkout />
	</div>
)
