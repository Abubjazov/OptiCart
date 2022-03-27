import { FC } from 'react'

import errorGif from './error.gif'

export const ErrorGif: FC = (): JSX.Element => (
	<img
		style={{
			display: 'block',
			width: '250px',
			height: '250px',
			objectFit: 'contain',
			margin: '0 auto',
		}}
		src={errorGif}
		alt='An error has occurred'
	/>
)
