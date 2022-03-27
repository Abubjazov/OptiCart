import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header: FC = (): JSX.Element => (
	<header className='header'>
		<h1>
			sneakers. <span>[</span>{' '}
			<a href='https://optimax.dev' target='_blank' rel='noreferrer'>
				https://optimax.dev
			</a>{' '}
			<span className='last-span'>]</span>
		</h1>

		<nav className='header-menu'>
			<ul>
				<li>
					<NavLink
						end
						to='/'
						style={({ isActive }) => ({ color: isActive ? '#53b5aa' : '' })}
					>
						Main
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/cart'
						style={({ isActive }) => ({ color: isActive ? '#53b5aa' : '' })}
					>
						Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
)
