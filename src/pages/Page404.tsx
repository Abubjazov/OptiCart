import { Link } from 'react-router-dom'
import { ErrorMessage } from '../components'

export const Page404 = (): JSX.Element => (
	<main>
		<ErrorMessage />
		<p style={{ textAlign: 'center', fontWeight: 300, fontSize: 24 }}>
			Page doesn't exist
		</p>
		<Link
			to='/'
			style={{
				display: 'block',
				textAlign: 'center',
				fontWeight: 300,
				fontSize: 24,
				marginTop: 13,
				color: '#429188',
			}}
		>
			Back to main page
		</Link>
	</main>
)
