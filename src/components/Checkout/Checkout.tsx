import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getTotal } from '../../utils/utils'

import { MediumSpinnerBlack } from '../Spinners/MediumSpinnerBlack'

import './Checkout.scss'

export const Checkout = (): JSX.Element => {
	const { cart, status } = useTypedSelector(state => state.cart)

	return (
		<section className='checkout'>
			<h2>
				<div className='wrapper'>
					{status === 'loading' ? (
						<MediumSpinnerBlack />
					) : (
						`Total: ${getTotal(cart)} $`
					)}
				</div>
			</h2>

			<button>Checkout</button>
		</section>
	)
}
