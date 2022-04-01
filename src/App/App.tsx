import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '../components'
import { CartPage, MainPage, Page404 } from '../pages'

export const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/optiCart/' element={<MainPage />} />
				<Route path='/optiCart/cart' element={<CartPage />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}
