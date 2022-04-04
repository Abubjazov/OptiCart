import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header, Spinner } from '../components'
import { MainPage } from '../pages'

const CartPage = lazy(() =>
	import('../pages').then(({ CartPage }) => ({ default: CartPage }))
)

const Page404 = lazy(() =>
	import('../pages').then(({ Page404 }) => ({ default: Page404 }))
)

export const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/optiCart/' element={<MainPage />} />
					<Route path='/optiCart/cart' element={<CartPage />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
