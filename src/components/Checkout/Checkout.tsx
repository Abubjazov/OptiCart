import { useEffect, useState } from 'react'
import { CartListItem } from '../../interfaces'
import './Checkout.scss'

export const Checkout = (props: any) => {
	const [total, setTotal] = useState<string>('0')

	const { cartData } = props

	useEffect(() => {
		const a = getTotal(cartData)
		setTotal(a)
	}, [cartData])

	const getTotal = (cart: CartListItem[]) => {
		return cart
			.reduce((sum: number, current: CartListItem): number => {
				return parseFloat((sum + current.quantity * current.price).toFixed(2))
			}, 0)
			.toFixed(2)
	}

	return (
		<section className='checkout'>
			<h2>Total: {total} $</h2>
			<button>Checkout</button>
		</section>
	)
}
