import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getTotal } from '../../utils/utils'

import { MediumSpinnerBlack } from '../Spinners/MediumSpinnerBlack'

import './Checkout.scss'

export const Checkout = (): JSX.Element => {
	const { cart, status } = useTypedSelector(state => state.cart)
	const { checkoutCart } = useActions()

	return (
		<section className='checkout'>
			{status === 'loading' ? (
				<MediumSpinnerBlack />
			) : (
				<h2>Total: {getTotal(cart)} $</h2>
			)}

			<button onClick={checkoutCart}>Checkout</button>
		</section>
	)
}
