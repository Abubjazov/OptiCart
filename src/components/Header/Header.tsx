import './Header.scss'

export const Header = () => (
	<header className='header'>
		<h1>
			sneakers. <span>[</span>{' '}
			<a href='https://optimax.dev' target='_blank' rel='noreferrer'>
				https://optimax.dev
			</a>{' '}
			<span className='last-span'>]</span>
		</h1>
	</header>
)
