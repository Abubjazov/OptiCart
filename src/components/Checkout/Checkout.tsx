import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getTotal } from '../../utils/utils'

import { MediumSpinnerBlack } from '../Spinners/MediumSpinnerBlack'

import './Checkout.scss'

export const Checkout = (): JSX.Element => {
	const { cart, status } = useTypedSelector(state => state.cart)
	const { checkoutCart } = useActions()

	const totalPrice = getTotal(cart)

	return (
		<section className='checkout'>
			{status === 'loading' ? (
				<MediumSpinnerBlack />
			) : (
				<h2
					aria-label={`Final price of the entire order is ${totalPrice}`}
					tabIndex={0}
				>
					Total: {totalPrice} $
				</h2>
			)}

			<button aria-label={`Checkout order`} onClick={checkoutCart}>
				Checkout
			</button>
		</section>
	)
}
