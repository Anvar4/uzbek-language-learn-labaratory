import { DragDropGame } from '@/components/games/DragDropGame'
import { FillBlankGame } from '@/components/games/FillBlankGame'
import { MatchingGame } from '@/components/games/MatchingGame'
import { QuizGame } from '@/components/games/QuizGame'
import { ScenarioGame } from '@/components/games/ScenarioGame'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTopicTitle, maruzaTopics, seminarTopics } from '@/data/topics'
import { virtualLabActivities } from '@/data/virtualLabData'
import {
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	FlaskConical,
	RotateCcw,
	Trophy,
	XCircle,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export const VirtualLabPage: React.FC = () => {
	const { t, language } = useLanguage()
	const [searchParams, setSearchParams] = useSearchParams()
	const topicParam = searchParams.get('topic')

	const [selectedTopicId, setSelectedTopicId] = useState<number>(
		topicParam ? parseInt(topicParam) : 1,
	)
	const [activeType, setActiveType] = useState<'maruza' | 'seminar'>(
		topicParam && parseInt(topicParam) > 100 ? 'seminar' : 'maruza',
	)
	const [currentActivityIndex, setCurrentActivityIndex] = useState(0)
	const [results, setResults] = useState<Record<string, boolean>>({})
	const [showSummary, setShowSummary] = useState(false)

	const allTopics = [
		...maruzaTopics.map(t => ({ ...t, displayId: t.id, type: 'maruza' })),
		...seminarTopics.map(t => ({
			...t,
			id: t.id + 100,
			displayId: t.id,
			type: 'seminar',
		})),
	]

	const activities = virtualLabActivities.filter(
		a => a.topicId === selectedTopicId,
	)
	const currentActivity = activities[currentActivityIndex]

	useEffect(() => {
		if (topicParam) {
			const id = parseInt(topicParam)
			setSelectedTopicId(id)
			setActiveType(id > 100 ? 'seminar' : 'maruza')
			setCurrentActivityIndex(0)
			setResults({})
			setShowSummary(false)
		}
	}, [topicParam])

	const handleTypeChange = (type: 'maruza' | 'seminar') => {
		setActiveType(type)
		const firstTopic = allTopics.find(t => t.type === type)
		if (firstTopic) {
			handleTopicChange(firstTopic.id.toString())
		}
	}

	const handleTopicChange = (value: string) => {
		const newTopicId = parseInt(value)
		setSelectedTopicId(newTopicId)
		setSearchParams({ topic: value })
		setCurrentActivityIndex(0)
		setResults({})
		setShowSummary(false)
	}

	const handleAnswer = (correct: boolean) => {
		setResults(prev => ({ ...prev, [currentActivity.id]: correct }))
	}

	const handleNext = () => {
		if (currentActivityIndex < activities.length - 1) {
			setCurrentActivityIndex(prev => prev + 1)
		} else {
			setShowSummary(true)
		}
	}

	const handlePrev = () => {
		if (currentActivityIndex > 0) {
			setCurrentActivityIndex(prev => prev - 1)
		}
	}

	const handleRestart = () => {
		setCurrentActivityIndex(0)
		setResults({})
		setShowSummary(false)
	}

	const progress =
		activities.length > 0
			? Math.round((Object.keys(results).length / activities.length) * 100)
			: 0

	const correctCount = Object.values(results).filter(v => v).length
	const score = Math.round((correctCount / activities.length) * 100)

	const renderGame = () => {
		const commonProps = {
			activity: currentActivity,
			language,
			onAnswer: handleAnswer,
			isAnswered: results[currentActivity.id] !== undefined,
		}
		switch (currentActivity.type) {
			case 'quiz':
				return <QuizGame {...commonProps} />
			case 'matching':
				return <MatchingGame {...commonProps} />
			case 'fill-blank':
				return <FillBlankGame {...commonProps} />
			case 'drag-drop':
				return <DragDropGame {...commonProps} />
			case 'scenario':
				return <ScenarioGame {...commonProps} />
			default:
				return null
		}
	}

	if (showSummary) {
		return (
			<div className='edu-section bg-muted/30'>
				<div className='edu-container max-w-2xl'>
					<div className='edu-card p-12 text-center animate-scale-in'>
						<div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6'>
							<Trophy className='w-12 h-12' />
						</div>
						<h2 className='text-3xl font-bold mb-2'>{t('lab.results')}</h2>
						<p className='text-muted-foreground mb-8'>
							"
							{getTopicTitle(
								allTopics.find(t => t.id === selectedTopicId)!,
								language,
							)}
							" {t('lab.completedDesc')}
						</p>
						<div className='grid grid-cols-2 gap-4 mb-4 text-left'>
							<div className='bg-green-500/10 p-4 rounded-xl border border-green-500/20'>
								<div className='flex items-center gap-2 text-green-600 font-bold mb-1'>
									<CheckCircle2 className='w-5 h-5' /> {t('lab.correctLabel')}
								</div>
								<div className='text-3xl font-extrabold text-green-600'>
									{correctCount} {t('lab.countUnit')}
								</div>
							</div>
							<div className='bg-red-500/10 p-4 rounded-xl border border-red-500/20'>
								<div className='flex items-center gap-2 text-red-600 font-bold mb-1'>
									<XCircle className='w-5 h-5' /> {t('lab.incorrectLabel')}
								</div>
								<div className='text-3xl font-extrabold text-red-600'>
									{activities.length - correctCount} {t('lab.countUnit')}
								</div>
							</div>
						</div>
						<div className='mb-10'>
							<div className='flex justify-between items-center mb-2 font-bold'>
								<span>{t('lab.totalResult')}:</span>
								<span
									className={`text-2xl ${score > 70 ? 'text-green-600' : 'text-orange-600'}`}
								>
									{score} {t('lab.scoreUnit')}
								</span>
							</div>
							<div className='h-4 bg-muted rounded-full overflow-hidden'>
								<div
									className='h-full bg-primary transition-all duration-1000'
									style={{ width: `${score}%` }}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-3'>
							<Button
								onClick={handleRestart}
								className='edu-gradient-bg text-primary-foreground py-6 text-lg'
							>
								<RotateCcw className='mr-2' /> {t('lab.restart')}
							</Button>
							<Button variant='outline' asChild className='py-6'>
								<Link to='/topics'>{t('lab.chooseAnother')}</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='edu-section bg-muted/30'>
			<div className='edu-container'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 animate-fade-in'>
					<div>
						<h1 className='text-3xl font-bold tracking-tight'>
							{t('nav.virtualLab')}
						</h1>
						<p className='text-muted-foreground'>
							{t('home.hero.title')}: {t('lab.maruza')} & {t('lab.seminar')} (
							{t('home.hero.badge')})
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<div className='flex p-1 bg-muted rounded-xl border border-border/50'>
							<Button
								variant={activeType === 'maruza' ? 'default' : 'ghost'}
								size='sm'
								onClick={() => handleTypeChange('maruza')}
								className={`rounded-lg px-6 ${activeType === 'maruza' ? 'edu-gradient-bg text-white' : ''}`}
							>
								{t('lab.maruza')}
							</Button>
							<Button
								variant={activeType === 'seminar' ? 'default' : 'ghost'}
								size='sm'
								onClick={() => handleTypeChange('seminar')}
								className={`rounded-lg px-6 ${activeType === 'seminar' ? 'edu-gradient-bg text-white' : ''}`}
							>
								{t('lab.seminar')}
							</Button>
						</div>

						<div className='flex items-center gap-4 bg-background p-2 rounded-xl border'>
							<span className='text-sm font-medium px-2'>
								{t('lab.topicLabel')}
							</span>
							<Select
								value={selectedTopicId.toString()}
								onValueChange={handleTopicChange}
							>
								<SelectTrigger className='w-[280px] font-bold border-none shadow-none focus:ring-0'>
									<SelectValue placeholder={t('lab.placeholder')} />
								</SelectTrigger>
								<SelectContent className='max-h-[400px]'>
									{allTopics
										.filter(t => t.type === activeType)
										.map(topic => (
											<SelectItem key={topic.id} value={topic.id.toString()}>
												{topic.displayId}. {getTopicTitle(topic, language)}
											</SelectItem>
										))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
				<div className='grid lg:grid-cols-4 gap-8'>
					<div className='lg:col-span-3 space-y-6'>
						<div className='edu-card overflow-hidden'>
							<div className='bg-primary/5 p-4 border-b flex items-center justify-between'>
								<div className='flex items-center gap-3'>
									<div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
										<FlaskConical className='h-5 w-5' />
									</div>
									<div>
										<h3 className='font-bold text-lg'>
											{currentActivity?.title[language] || 'Yuklanmoqda...'}
										</h3>
										<p className='text-xs text-muted-foreground'>
											{currentActivity?.instructions[language]}
										</p>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<span className='text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full uppercase'>
										Qiyin
									</span>
								</div>
							</div>
							<div className='p-6 md:p-10 min-h-[400px] flex flex-col justify-center'>
								{renderGame()}
							</div>
							<div className='p-4 bg-muted/30 border-t flex flex-wrap items-center justify-between gap-4'>
								<div className='flex gap-2'>
									<Button
										variant='outline'
										size='sm'
										onClick={handlePrev}
										disabled={currentActivityIndex === 0}
									>
										<ChevronLeft className='h-4 w-4 mr-2' /> Oldingisi
									</Button>
									<Button
										variant={
											results[currentActivity.id] !== undefined
												? 'default'
												: 'outline'
										}
										size='sm'
										onClick={handleNext}
										className={
											results[currentActivity.id] !== undefined
												? 'bg-primary text-primary-foreground font-bold'
												: ''
										}
									>
										{currentActivityIndex === activities.length - 1
											? 'Yakunlash'
											: 'Keyingisi'}{' '}
										<ChevronRight className='h-4 w-4 ml-2' />
									</Button>
								</div>
								{results[currentActivity.id] !== undefined && (
									<div
										className={`flex items-center gap-2 font-extrabold animate-bounce ${results[currentActivity.id] ? 'text-green-600' : 'text-red-600'}`}
									>
										{results[currentActivity.id] ? (
											<CheckCircle2 className='h-5 w-5' />
										) : (
											<XCircle className='h-5 w-5' />
										)}
										{results[currentActivity.id] ? "To'g'ri!" : 'Xato!'}
									</div>
								)}
								<div className='text-sm font-bold text-muted-foreground bg-white px-3 py-1 rounded-full border shadow-sm'>
									{currentActivityIndex + 1} / {activities.length}
								</div>
							</div>
						</div>
					</div>
					<div className='space-y-6'>
						<div className='edu-card p-6'>
							<h4 className='font-bold mb-4'>Progress</h4>
							<div className='relative h-3 bg-muted rounded-full overflow-hidden mb-2'>
								<div
									className='absolute left-0 top-0 h-full bg-primary transition-all duration-500'
									style={{ width: `${progress}%` }}
								/>
							</div>
							<div className='flex justify-between text-xs font-extrabold mb-6 uppercase tracking-tight'>
								<span className='text-primary'>{progress}% Yakunlandi</span>
								<span>
									{Object.keys(results).length}/{activities.length}
								</span>
							</div>
							<div className='space-y-2'>
								{activities.map((activity, idx) => {
									const result = results[activity.id]
									return (
										<button
											key={activity.id}
											onClick={() => setCurrentActivityIndex(idx)}
											className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${
												currentActivityIndex === idx
													? 'bg-primary text-primary-foreground shadow-lg scale-105 z-10'
													: result !== undefined
														? result
															? 'bg-green-500/10 text-green-600 border border-green-500/20'
															: 'bg-red-500/10 text-red-600 border border-red-500/20'
														: 'bg-background border hover:border-primary/30'
											}`}
										>
											<div
												className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${currentActivityIndex === idx ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
											>
												{idx + 1}
											</div>
											<span className='flex-1 text-left truncate'>
												{activity.title[language]}
											</span>
											{result !== undefined &&
												(result ? (
													<CheckCircle2 className='h-4 w-4 shrink-0' />
												) : (
													<XCircle className='h-4 w-4 shrink-0' />
												))}
										</button>
									)
								})}
							</div>
						</div>
						<div className='edu-card p-6 bg-primary text-primary-foreground shadow-xl lg:rotate-1'>
							<h4 className='font-bold mb-2 flex items-center gap-2'>
								<FlaskConical className='w-4 h-4' /> Eslatma!
							</h4>
							<p className='text-xs text-primary-foreground/90 leading-relaxed font-medium'>
								Har bir mashg'ulotni yakunlash uchun "Tekshirish" tugmasini
								bosing. Natijani ko'rgandan so'ng "Keyingisi" orqali davom
								etishingiz mumkin.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
