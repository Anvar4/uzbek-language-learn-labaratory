import { useLanguage } from '@/contexts/LanguageContext'
import { Award, BookOpen, Building2, GraduationCap } from 'lucide-react'
import React from 'react'

export const AuthorPage: React.FC = () => {
	const { t } = useLanguage()

	const achievements = [
		t('author.achievement.1'),
		t('author.achievement.2'),
		t('author.achievement.3'),
	]

	const contributions = [
		t('author.contribution.1'),
		t('author.contribution.2'),
		t('author.contribution.3'),
	]

	return (
		<div className='edu-section'>
			<div className='edu-container'>
				{/* Page Header */}
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-heading font-bold mb-4'>
						{t('author.title')}
					</h1>
				</div>

				<div className='max-w-4xl mx-auto'>
					{/* Profile Card */}
					<div className='edu-card p-8 mb-8'>
						<div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
							<div className='w-32 h-32 rounded-2xl overflow-hidden shadow-lg'>
								<img
									src='/autor.png'
									alt={t('author.name')}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='flex-1 text-center md:text-left'>
								<h2 className='text-2xl font-heading font-bold mb-2'>
									{t('author.name')}
								</h2>
								<p className='text-primary font-medium mb-1'>
									{t('author.degree')}
								</p>
								<div className='flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-sm'>
									<span className='flex items-center gap-1'>
										<Building2 className='h-4 w-4' />
										{t('author.dept')}
									</span>
									<span className='hidden sm:inline'>•</span>
									<span>{t('author.uni')}</span>
								</div>
							</div>
						</div>

						<p className='mt-6 text-muted-foreground leading-relaxed'>
							{t('author.bio')}
						</p>
					</div>

					{/* Achievements */}
					<div className='edu-card p-6 mb-6'>
						<div className='flex items-center gap-3 mb-4'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg edu-gradient-bg text-white'>
								<Award className='h-5 w-5' />
							</div>
							<h3 className='text-xl font-semibold'>{t('author.profile')}</h3>
						</div>
						<ul className='space-y-3'>
							{achievements.map((item, index) => (
								<li key={index} className='flex items-start gap-3'>
									<GraduationCap className='h-5 w-5 text-primary shrink-0 mt-0.5' />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Contributions */}
					<div className='edu-card p-6'>
						<div className='flex items-center gap-3 mb-4'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white'>
								<BookOpen className='h-5 w-5' />
							</div>
							<h3 className='text-xl font-semibold'>
								{t('author.contribution')}
							</h3>
						</div>
						<ul className='space-y-3'>
							{contributions.map((item, index) => (
								<li key={index} className='flex items-start gap-3'>
									<div className='w-2 h-2 rounded-full bg-primary shrink-0 mt-2' />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
