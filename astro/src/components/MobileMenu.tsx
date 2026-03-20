import { useState, useEffect } from 'react'

interface NavLink {
	label: string
	href: string
}

interface Props {
	navLinks: NavLink[]
	alternateUrl: string
	locale: string
}

export default function MobileMenu({ navLinks, alternateUrl, locale }: Props) {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	function toggleDarkMode() {
		const isDark = document.documentElement.classList.toggle('dark')
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}

	return (
		<>
			{/* Hamburger / X button */}
			<button
				type="button"
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
				onClick={() => setIsOpen(!isOpen)}
				className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5"
				data-mobile-menu
			>
				<span
					className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 transition-all duration-200 ${isOpen ? 'translate-y-[4px] rotate-45' : ''}`}
				/>
				<span
					className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 transition-all duration-200 ${isOpen ? '-translate-y-[4px] -rotate-45' : ''}`}
				/>
			</button>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/20"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Menu panel */}
			<div
				className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[var(--color-background)] shadow-xl transition-transform duration-250 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
				data-mobile-menu
			>
				{/* Close button */}
				<div className="flex justify-end p-4">
					<button
						type="button"
						aria-label="Close menu"
						onClick={() => setIsOpen(false)}
						className="p-2 text-slate-600 hover:text-slate-700"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M18 6L6 18M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Nav links */}
				<nav className="flex flex-col items-center gap-6 pt-8 px-6">
					{navLinks.map((link, i) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 transition-colors"
							style={{ animationDelay: `${(i + 1) * 50}ms` }}
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Bottom utilities */}
				<div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4">
					{/* Language switch */}
					<a
						href={alternateUrl}
						onClick={() => setIsOpen(false)}
						className="text-sm font-medium text-slate-600 hover:text-slate-800"
					>
						{locale === 'fr' ? 'English' : 'Français'}
					</a>
					{/* Dark mode */}
					<button
						type="button"
						onClick={toggleDarkMode}
						className="text-sm text-slate-600 hover:text-slate-700"
					>
						{locale === 'fr' ? 'Mode sombre' : 'Dark mode'}
					</button>
				</div>
			</div>
		</>
	)
}
