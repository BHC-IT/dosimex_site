import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'

interface NavLink {
	label: string
	href: string
}

interface MobileMenuProps {
	navLinks: NavLink[]
	trialButton: string
	quoteButton: string
	altLocaleHref: string
	altLocaleLabel: string
	productHref: string
}

export default function MobileMenu({
	navLinks,
	trialButton,
	quoteButton,
	altLocaleHref,
	altLocaleLabel,
	productHref,
}: MobileMenuProps) {
	const [isOpen, setIsOpen] = useState(false)

	const drawer = (
		<>
			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Drawer */}
			<div
				className={`fixed right-0 top-0 z-[110] h-full w-80 max-w-[85vw] transform shadow-2xl transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
				style={{ backgroundColor: 'var(--color-background, #fff)' }}
			>
				<div className="flex items-center justify-between border-b p-4">
					<span className="text-lg font-bold font-lato">DOSIMEX</span>
					<button
						onClick={() => setIsOpen(false)}
						className="rounded-md p-2 text-foreground/60 hover:bg-muted"
						aria-label="Close menu"
						type="button"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				<nav className="flex flex-col gap-1 p-4">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
							onClick={() => setIsOpen(false)}
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="border-t p-4 space-y-3">
					<a
						href={altLocaleHref}
						className="block rounded-md border border-border px-4 py-2 text-center text-sm font-bold text-foreground/60 transition-colors hover:text-foreground"
					>
						{altLocaleLabel}
					</a>
					<a
						href={productHref}
						className="block rounded-lg border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
					>
						{quoteButton}
					</a>
					<a
						href="https://dosismart.com"
						target="_blank"
						rel="noopener noreferrer"
						className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					>
						{trialButton}
					</a>
				</div>
			</div>
		</>
	)

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-muted"
				aria-label="Open menu"
				type="button"
			>
				<Menu className="h-6 w-6" />
			</button>

			{typeof document !== 'undefined'
				? createPortal(drawer, document.body)
				: null}
		</>
	)
}
