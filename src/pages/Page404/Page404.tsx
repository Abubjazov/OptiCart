import { Link } from 'react-router-dom'

import { ErrorGif } from '../../components'

export const Page404 = (): JSX.Element => (
	<main
		style={{
			paddingTop: 100,
		}}
	>
		<ErrorGif />
		<p style={{ textAlign: 'center', fontWeight: 300, fontSize: 24 }}>
			Page doesn't exist
		</p>
		<Link
			to='/optiCart/'
			style={{
				display: 'block',
				textAlign: 'center',
				fontWeight: 300,
				fontSize: 24,
				marginTop: 13,
				color: '#3b8079',
			}}
		>
			Back to main page
		</Link>
	</main>
)
