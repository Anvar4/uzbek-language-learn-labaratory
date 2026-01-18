import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { BookOpen, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

interface NavItem {
	key: string
	path: string
	children?: { key: string; path: string }[]
}

const navItems: NavItem[] = [
	{ key: 'nav.home', path: '/' },
	{ key: 'nav.about', path: '/about' },
	{ key: 'nav.topics', path: '/topics' },
	{ key: 'nav.virtualLab', path: '/lab' },
	{ key: 'nav.materials', path: '/materials' },
	{ key: 'nav.references', path: '/references' },
	{ key: 'nav.author', path: '/author' },
]

export const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useLanguage()
	const location = useLocation()

	const isActive = (path: string) => location.pathname === path

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<nav className='edu-container'>
				<div className='flex h-16 items-center justify-between'>
					{/* Logo */}
					<Link
						to='/'
						className='flex items-center gap-2 font-heading text-xl font-bold'
					>
						<div className='flex h-9 w-9 items-center justify-center rounded-lg edu-gradient-bg'>
							<BookOpen className='h-5 w-5 text-white' />
						</div>
						<span className='hidden sm:inline edu-gradient-text'>
							{t('nav.logo')}
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden lg:flex lg:items-center lg:gap-1'>
						{navItems.map(item => (
							<Link
								key={item.key}
								to={item.path}
								className={cn(
									'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
									isActive(item.path)
										? 'bg-primary/10 text-primary'
										: 'text-muted-foreground hover:text-foreground hover:bg-muted',
								)}
							>
								{t(item.key)}
							</Link>
						))}
					</div>

					{/* Right Side */}
					<div className='flex items-center gap-2'>
						<LanguageSwitcher />
						<ThemeToggle />

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='lg:hidden p-2 rounded-lg hover:bg-muted transition-colors'
							aria-label='Toggle menu'
						>
							{isOpen ? (
								<X className='h-5 w-5' />
							) : (
								<Menu className='h-5 w-5' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className='lg:hidden py-4 border-t border-border animate-slide-up'>
						<div className='flex flex-col gap-1'>
							{navItems.map(item => (
								<Link
									key={item.key}
									to={item.path}
									onClick={() => setIsOpen(false)}
									className={cn(
										'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
										isActive(item.path)
											? 'bg-primary/10 text-primary'
											: 'text-muted-foreground hover:text-foreground hover:bg-muted',
									)}
								>
									{t(item.key)}
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}
