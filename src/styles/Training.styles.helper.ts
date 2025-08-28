import * as CSS from 'csstype'

export const getHeaderStyles = (mobile: boolean) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: mobile ? 'column' : undefined,
		position: mobile ? undefined : ('relative' as 'relative'),
		height: mobile ? undefined : '65vh',
		width: '100%',
		overflow: 'hidden',
		marginTop: mobile ? '15vh' : undefined,
		marginBottom: mobile ? '10vh' : undefined,
	} as CSS.Properties,
	textContainer: {
		display: 'flex',
		justifyContent: mobile ? 'center' : 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		height: mobile ? undefined : '65%',
		width: mobile ? undefined : '40%',
		marginRight: mobile ? '8vw' : '5rem',
		marginLeft: mobile ? '8vw' : undefined,
		marginBottom: mobile ? '8vh' : undefined,
		textAlign: mobile ? 'center' : undefined,
	} as CSS.Properties,
	imgContainer: {
		display: mobile ? 'none' : 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: mobile ? '20vh' : '65%',
		width: mobile ? '40vh' : '35%',
		backgroundColor: 'transparent',
		zIndex: 1,
	} as CSS.Properties,
	title: {
		alignSelf: mobile ? 'center' : 'flex-start',
		margin: 'auto 0 0 0',
	} as CSS.Properties,
	text: {
		margin: '0 0 auto 0',
		fontSize: mobile ? '1.6rem' : '1.8rem',
		color: 'var(--dark)',
		marginTop: '4vh',
		textAlign: 'justify',
		fontWeight: 300,
	} as CSS.Properties,
	squareGridStyles: {
		containerStyle: {
			position: 'absolute',
			right: '-1%',
			top: '0',
			zIndex: 0,
			display: mobile ? 'none' : undefined,
		} as CSS.Properties,
		squareStyle: {
			height: '19px',
			width: '17px',
			margin: '1.5rem 2.5rem',
			backgroundColor: 'var(--flashTrans)',
		} as CSS.Properties,
	},
})

export const getSeparatorStyles = (mobile: boolean) => ({
	container: (right?: boolean): CSS.Properties => {
		return {
			display: 'flex',
			justifyContent: right ? 'flex-end' : 'flex-start',
			width: '100%',
		}
	},
	line: {
		backgroundColor: 'var(--flash)',
		height: '0.4vh',
		width: mobile ? '40%' : '25%',
	} as CSS.Properties,
})

export const getExemplesStyles = (mobile: boolean) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: mobile ? '10vh' : '15vh',
		marginBottom: '15vh',
		width: '100%',
	} as CSS.Properties,
	title: {
		width: mobile ? '80%' : '60vw',
		fontSize: mobile ? '2.5rem' : undefined,
		margin: '0 10% 5vh 10%',
	} as CSS.Properties,
	listContainer: {
		display: 'flex',
		flexDirection: mobile ? 'column' : 'row',
		justifyContent: 'space-between',
		margin: '0 10%',
	} as CSS.Properties,
	columnListContainer: {
		width: mobile ? '100%' : '48%',
		color: 'var(--grey)',
	} as CSS.Properties,
})

export const getPartnershipStyles = (mobile: boolean) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '100%',
		backgroundColor: 'var(--grey-bg)',
		marginTop: '10vh',
		paddingTop: '7vh',
		paddingBottom: '10vh',
	} as CSS.Properties,
	title: {
		margin: '0 10% 5vh 10%',
		fontSize: mobile ? '2.5rem' : undefined,
	} as CSS.Properties,
	text: {
		margin: '0 10%',
		marginTop: '2vh',
		fontSize: '2rem',
	} as CSS.Properties,
	btn: {
		padding: '8px 25px',
		backgroundColor: 'transparent',
		borderRadius: '50px',
		border: '2px solid var(--main)',
		color: 'var(--main)',
		textTransform: 'uppercase',
		transition: 'all 0.3s ease 0s',
		cursor: 'pointer',
		fontWeight: 700,
		':hover': {
			color: 'white',
			transform: 'translateY(-4px)',
			boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: mobile ? '75vw' : '18vw',
		margin: mobile ? '0 5%' : undefined,
		fontSize: mobile ? '1.4rem' : undefined,
	} as CSS.Properties,
	icon: {
		width: mobile ? '4.7vw' : '1.2vw',
		minWidth: mobile ? undefined : '25px',
		maxWidth: mobile ? '25px' : undefined,
	} as CSS.Properties,
})

export const getQuestionsStyles = (mobile: boolean) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		marginTop: '10vh',
		marginBottom: '25vh',
	} as CSS.Properties,
	text: {
		color: 'var(--grey)',
		width: mobile ? '60%' : '22vw',
		marginTop: 0,
		textAlign: 'center',
		fontSize: '1.6rem',
		marginBottom: mobile ? '7vh' : '4vh',
	} as CSS.Properties,
})

export const getMainStyles = () => ({
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		overflowX: 'hidden',
	} as CSS.Properties,
	buttonMargin: {
		margin: '5vh auto 0 10%',
	},
	desktopRow: {
		display: 'flex',
		flexDirection: 'row',
	},
	desktopHalfWidth: {
		width: '50%',
	},
	desktopFlexHalfWidth: {
		display: 'flex',
		width: '50%',
	},
})
