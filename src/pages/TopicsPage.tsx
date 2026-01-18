import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/LanguageContext'
import {
	getTopicDescription,
	getTopicTitle,
	Topic,
	topics,
} from '@/data/topics'
import { FileText, FlaskConical, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const TopicsPage: React.FC = () => {
	const { t, language } = useLanguage()
	const [searchQuery, setSearchQuery] = useState('')

	const filteredTopics = topics.filter((topic: Topic) => {
		const title = getTopicTitle(topic, language).toLowerCase()
		const description = getTopicDescription(topic, language).toLowerCase()
		const query = searchQuery.toLowerCase()
		return title.includes(query) || description.includes(query)
	})

	return (
		<div className='edu-section'>
			<div className='edu-container'>
				{/* Page Header */}
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-heading font-bold mb-4'>
						{t('topics.title')}
					</h1>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
						{t('topics.subtitle')}
					</p>

					<div className='relative max-w-md mx-auto'>
						<Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
						<Input
							type='text'
							placeholder={t('topics.search')}
							className='pl-10 h-12 text-lg'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>

				{/* Topics Grid */}
				<div className='grid gap-4'>
					{filteredTopics.map(topic => {
						const topicId = topic.id
						const topicType = topic.type
						const displayId = topicType === 'maruza' ? topicId : topicId - 100

						return (
							<div
								key={`${topicType}-${topicId}`}
								className='edu-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors'
							>
								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-2'>
										<span
											className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
												topicType === 'maruza'
													? 'bg-blue-100 text-blue-700'
													: 'bg-emerald-100 text-emerald-700'
											}`}
										>
											{topicType === 'maruza'
												? t('lab.maruza')
												: t('lab.seminar')}{' '}
											{displayId}
										</span>
									</div>
									<h3 className='text-xl font-bold mb-2'>
										{getTopicTitle(topic, language)}
									</h3>
									<p className='text-muted-foreground line-clamp-2'>
										{getTopicDescription(topic, language)}
									</p>
								</div>

								<div className='flex flex-wrap items-center gap-3'>
									<Link to={`/materials?tab=${topicType}&topic=${displayId}`}>
										<Button variant='outline' size='sm' className='gap-2'>
											<FileText className='h-4 w-4' />
											{t('topics.presentation')}
										</Button>
									</Link>
									<Link to={`/lab?topic=${topicId}`}>
										<Button
											className='edu-gradient-bg text-white gap-2'
											size='sm'
										>
											<FlaskConical className='h-4 w-4' />
											{t('topics.goToLab')}
										</Button>
									</Link>
								</div>
							</div>
						)
					})}

					{filteredTopics.length === 0 && (
						<div className='text-center py-12'>
							<p className='text-lg text-muted-foreground'>
								Sizning qidiruvingiz bo'yicha mavzu topilmadi.
							</p>
							<Button
								variant='link'
								onClick={() => setSearchQuery('')}
								className='mt-2'
							>
								Filtrni tozalash
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
