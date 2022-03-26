import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '../components'
import { CartPage, MainPage, Page404 } from '../pages'

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}
