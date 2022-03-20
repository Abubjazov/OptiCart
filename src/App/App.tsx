import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components'
import { CartPage } from '../pages/CartPage/CartPage'
import { MainPage } from '../pages/MainPage/MainPage'
import { Page404 } from '../pages/Page404'

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
