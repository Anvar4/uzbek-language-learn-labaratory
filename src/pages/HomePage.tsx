import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import {
	ArrowRight,
	BookOpen,
	FileText,
	FlaskConical,
	GraduationCap,
	Lightbulb,
	Sparkles,
	Target,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
	const { t, language } = useLanguage()

	const features = [
		{
			icon: Sparkles,
			title: t('home.features.interactive'),
			description: t('home.features.interactive.desc'),
		},
		{
			icon: Lightbulb,
			title: t('home.features.modern'),
			description: t('home.features.modern.desc'),
		},
		{
			icon: Target,
			title: t('home.features.practical'),
			description: t('home.features.practical.desc'),
		},
	]

	const quickAccess = [
		{
			icon: BookOpen,
			title: t('home.quickAccess.topics'),
			path: '/topics',
			color: 'from-blue-500 to-cyan-500',
		},
		{
			icon: FlaskConical,
			title: t('home.quickAccess.labs'),
			path: '/lab',
			color: 'from-emerald-500 to-teal-500',
		},
		{
			icon: FileText,
			title: t('home.quickAccess.materials'),
			path: '/materials',
			color: 'from-violet-500 to-purple-500',
		},
	]

	return (
		<div className='flex flex-col'>
			{/* Hero Section */}
			<section className='relative overflow-hidden edu-hero-gradient'>
				<div className='absolute inset-0 bg-grid-pattern opacity-5' />
				<div className='edu-container py-20 md:py-32 relative'>
					<div className='max-w-4xl mx-auto text-center'>
						<div className='inline-flex items-center gap-2 edu-badge mb-6 animate-fade-in'>
							<FlaskConical className='h-4 w-4' />
							<span>{t('home.hero.badge')}</span>
						</div>

						<h1 className='text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-slide-up'>
							{t('home.hero.title')}
						</h1>

						<p
							className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up'
							style={{ animationDelay: '0.1s' }}
						>
							{t('home.hero.subtitle')}
						</p>

						<div
							className='flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up'
							style={{ animationDelay: '0.2s' }}
						>
							<Link to='/lab'>
								<Button
									size='lg'
									className='edu-gradient-bg text-white hover:opacity-90 gap-2 px-8'
								>
									{t('home.hero.cta.start')}
									<ArrowRight className='h-4 w-4' />
								</Button>
							</Link>
							<Link to='/topics'>
								<Button size='lg' variant='outline' className='gap-2 px-8'>
									{t('home.hero.cta.explore')}
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Decorative elements */}
				<div className='absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float' />
				<div
					className='absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float'
					style={{ animationDelay: '1s' }}
				/>
			</section>

			{/* Features Section */}
			<section className='edu-section'>
				<div className='edu-container'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>
							{t('home.features.title')}
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
						{features.map((feature, index) => (
							<div
								key={index}
								className='edu-card p-6 lg:p-8 text-center animate-fade-in'
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className='inline-flex items-center justify-center w-14 h-14 rounded-2xl edu-gradient-bg text-white mb-4'>
									<feature.icon className='h-7 w-7' />
								</div>
								<h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
								<p className='text-muted-foreground'>{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Quick Access Section */}
			<section className='edu-section bg-muted/30'>
				<div className='edu-container'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-heading font-bold mb-4'>
							{t('home.quickAccess.title')}
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-6'>
						{quickAccess.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								className='edu-card-interactive p-6 group'
							>
								<div
									className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform`}
								>
									<item.icon className='h-6 w-6' />
								</div>
								<h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
									{item.title}
									<ArrowRight className='h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
								</h3>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='edu-section'>
				<div className='edu-container'>
					<div className='edu-card p-8 md:p-12 text-center edu-gradient-bg'>
						<GraduationCap className='h-16 w-16 text-white/80 mx-auto mb-6' />
						<h2 className='text-2xl md:text-3xl font-heading font-bold text-white mb-4'>
							{t('home.cta.title')}
						</h2>
						<p className='text-white/80 mb-8 max-w-xl mx-auto'>
							{t('home.cta.desc')}
						</p>
						<Link to='/lab'>
							<Button size='lg' variant='secondary' className='gap-2'>
								{t('home.hero.cta.start')}
								<ArrowRight className='h-4 w-4' />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
