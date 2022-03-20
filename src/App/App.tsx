import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components'
import { CartPage } from '../pages/CartPage/CartPage'
import { MainPage } from '../pages/MainPage/MainPage'

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/cart' element={<CartPage />} />
			</Routes>
		</BrowserRouter>
	)
}
