import { useLanguage } from '@/contexts/LanguageContext'
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
	const { t } = useLanguage()

	const quickLinks = [
		{ key: 'nav.about', path: '/about' },
		{ key: 'nav.topics', path: '/topics' },
		{ key: 'nav.virtualLab', path: '/lab' },
		{ key: 'nav.materials', path: '/materials' },
	]

	const resourceLinks = [
		{ key: 'nav.references', path: '/references' },
		{ key: 'nav.author', path: '/author' },
	]

	return (
		<footer className='border-t border-border bg-card'>
			<div className='edu-container py-12 lg:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Brand */}
					<div className='lg:col-span-1'>
						<Link
							to='/'
							className='flex items-center gap-2 font-heading text-xl font-bold mb-4'
						>
							<div className='flex h-9 w-9 items-center justify-center rounded-lg edu-gradient-bg'>
								<BookOpen className='h-5 w-5 text-white' />
							</div>
							<span className='edu-gradient-text'>{t('nav.logo')}</span>
						</Link>
						<p className='text-sm text-muted-foreground'>{t('footer.desc')}</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-semibold mb-4'>{t('footer.quickLinks')}</h3>
						<ul className='space-y-2'>
							{quickLinks.map(link => (
								<li key={link.key}>
									<Link
										to={link.path}
										className='text-sm text-muted-foreground hover:text-primary transition-colors'
									>
										{t(link.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='font-semibold mb-4'>{t('footer.resources')}</h3>
						<ul className='space-y-2'>
							{resourceLinks.map(link => (
								<li key={link.key}>
									<Link
										to={link.path}
										className='text-sm text-muted-foreground hover:text-primary transition-colors'
									>
										{t(link.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='font-semibold mb-4'>{t('footer.contact')}</h3>
						<ul className='space-y-3'>
							<li className='flex items-start gap-2 text-sm text-muted-foreground'>
								<MapPin className='h-4 w-4 mt-0.5 shrink-0' />
								<span>
									{t('footer.university')}
									<br />
									{t('footer.location')}
									<br />
									<span className='text-xs opacity-70'>Index: 190111</span>
								</span>
							</li>
							<li className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Phone className='h-4 w-4 shrink-0' />
								<span>76 221 74 55</span>
							</li>
							<li className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Mail className='h-4 w-4 shrink-0' />
								<span>info@tersu.uz</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Transport & Info Section */}
				<div className='mt-12 pt-8 border-t border-border'>
					<div className='max-w-3xl'>
						<h4 className='font-semibold mb-3 flex items-center gap-2'>
							<span className='p-1.5 rounded-md bg-primary/10 text-primary'>
								<MapPin className='h-4 w-4' />
							</span>
							{t('footer.transport.title')}
						</h4>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							{t('footer.transport.desc')}
						</p>
						<div className='mt-6 p-4 rounded-lg bg-muted/50 border border-border'>
							<p className='text-xs text-muted-foreground italic'>
								{t('footer.notice')}
							</p>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className='mt-12 pt-8 border-t border-border'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-sm text-muted-foreground'>
							© {new Date().getFullYear()} {t('footer.university')}.{' '}
							{t('footer.rights')}.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
