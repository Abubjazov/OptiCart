import errorGif from './error.gif'

export const ErrorMessage = () => {
	return (
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
}
