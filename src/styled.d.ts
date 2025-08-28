import 'styled-components'
import { CSSProperties } from 'react'

declare module 'styled-components' {
	export interface DefaultTheme {
		// Add your theme interface here if needed
	}
}

// Extend styled-components props to allow children and standard React props
declare module 'styled-components' {
	interface StyledComponentBase<
		C extends keyof JSX.IntrinsicElements | React.ComponentType<unknown>,
		T extends object,
		O extends object = {},
		A extends string | number | symbol = never,
	> extends React.ForwardRefExoticComponent<
			StyledComponentProps<C, T, O, A> & { ref?: React.Ref<unknown> }
		> {
		(
			props: StyledComponentProps<C, T, O, A> & {
				children?: React.ReactNode
				style?: CSSProperties
			}
		): React.ReactElement<StyledComponentProps<C, T, O, A>>
	}
}
