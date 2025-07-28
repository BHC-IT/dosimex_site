import * as React from 'react'
import { useIsMobile } from '../Hooks/useIsMobile'

export const withIsMobile = <Props extends object, T>(
	Component: React.ComponentType<Props>,
	style: (m: boolean) => T
): React.FC<Props> => {
	const WithIsMobileComponent = (props: Props) => {
		const styleMobile = useIsMobile(style)

		// Don't render until device detection is complete to prevent hydration mismatch
		if (styleMobile === null) {
			return null
		}

		return (
			<Component
				{...props}
				style={styleMobile}
			/>
		)
	}

	WithIsMobileComponent.displayName = `withIsMobile(${Component.displayName || Component.name})`
	return WithIsMobileComponent
}
