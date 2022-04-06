export const PageMarker = ({ pageName }: PageMarkerProps): JSX.Element => (
	<p
		role='alert'
		style={{
			display: 'block',
			position: 'fixed',
			left: 100,
			top: 0,
			overflow: 'hidden',
			height: 0,
			opacity: 1,
		}}
	>
		You are on the {pageName} page
	</p>
)

export interface PageMarkerProps {
	pageName: string
}
