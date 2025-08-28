import * as CSS from 'csstype'
import React, { Component, ReactNode } from 'react'

interface IProps {
	children: ReactNode
	fallback?: ReactNode
}

interface IState {
	hasError: boolean
	error?: Error
	errorInfo?: React.ErrorInfo
}

interface IStyles {
	container: CSS.Properties
	title: CSS.Properties
	message: CSS.Properties
	details: CSS.Properties
	button: CSS.Properties
	secondaryButton: CSS.Properties
}

const styles: IStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '50vh',
		padding: '2rem',
		backgroundColor: 'var(--light)',
		color: 'var(--dark)',
		textAlign: 'center',
	},
	title: {
		fontSize: '2.5rem',
		marginBottom: '1rem',
		color: 'var(--main)',
		fontFamily: 'var(--lato)',
	},
	message: {
		fontSize: '1.6rem',
		marginBottom: '2rem',
		maxWidth: '600px',
		lineHeight: '1.6',
	},
	details: {
		fontSize: '1.2rem',
		color: 'var(--grey)',
		marginBottom: '2rem',
		fontFamily: 'monospace',
		backgroundColor: 'white',
		padding: '1rem',
		borderRadius: '8px',
		border: '1px solid var(--grey-bg)',
		maxWidth: '800px',
		overflow: 'auto',
	},
	button: {
		padding: '12px 24px',
		backgroundColor: 'var(--main)',
		color: 'white',
		border: 'none',
		borderRadius: '50px',
		fontSize: '1.4rem',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
	},
	secondaryButton: {
		padding: '12px 24px',
		backgroundColor: 'var(--grey)',
		color: 'white',
		border: 'none',
		borderRadius: '50px',
		fontSize: '1.4rem',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
		marginLeft: '1rem',
	},
}

class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): IState {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		// Log error details for debugging
		// eslint-disable-next-line no-console
		console.error('ErrorBoundary caught an error:', error)
		// eslint-disable-next-line no-console
		console.error('Error info:', errorInfo)
		// Update state with error details
		this.setState({
			error,
			errorInfo,
		})

		// In production, you might want to log this to an error reporting service
		// logErrorToService(error, errorInfo)
	}

	private readonly handleRetry = (): void => {
		this.setState({ hasError: false, error: undefined, errorInfo: undefined })
	}

	private readonly handleReload = (): void => {
		window.location.reload()
	}

	render(): ReactNode {
		if (this.state.hasError) {
			// Custom fallback UI
			if (this.props.fallback) {
				return this.props.fallback
			}

			// Default error UI
			return (
				<div style={styles.container}>
					<h1 style={styles.title}>Oups, quelque chose s&apos;est mal passé</h1>
					<p style={styles.message}>
						Une erreur inattendue s&apos;est produite. Nous nous excusons pour la gêne occasionnée.
						<br />
						Veuillez essayer de recharger la page ou de revenir plus tard.
					</p>

					{process.env.NODE_ENV === 'development' && this.state.error && (
						<details style={styles.details}>
							<summary>Détails de l&apos;erreur (développement uniquement)</summary>
							<pre>
								{this.state.error.toString()}
								{this.state.errorInfo?.componentStack}
							</pre>
						</details>
					)}

					<div>
						<button
							style={styles.button}
							onClick={this.handleRetry}
							aria-label="Retry loading the page"
							onMouseEnter={e => {
								e.currentTarget.style.transform = 'translateY(-2px)'
								e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'
							}}
							onMouseLeave={e => {
								e.currentTarget.style.transform = 'translateY(0)'
								e.currentTarget.style.boxShadow = 'none'
							}}
						>
							Réessayer
						</button>
						<button
							style={styles.secondaryButton}
							onClick={this.handleReload}
							aria-label="Reload the entire page"
							onMouseEnter={e => {
								e.currentTarget.style.transform = 'translateY(-2px)'
								e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'
							}}
							onMouseLeave={e => {
								e.currentTarget.style.transform = 'translateY(0)'
								e.currentTarget.style.boxShadow = 'none'
							}}
						>
							Recharger la page
						</button>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
