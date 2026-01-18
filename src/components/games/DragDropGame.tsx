import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { DragDropItem, LabActivity } from '@/data/labActivities'
import { XCircle } from 'lucide-react'
import React, { useState } from 'react'

interface DragDropGameProps {
	activity: LabActivity
	language: 'uz' | 'ru' | 'en'
	onAnswer: (correct: boolean) => void
	isAnswered: boolean
}

export const DragDropGame: React.FC<DragDropGameProps> = ({
	activity,
	onAnswer,
	isAnswered,
}) => {
	const { t } = useLanguage()
	const items = activity.data as DragDropItem[]
	const categories = [...new Set(items.map(i => i.category))]
	const [placements, setPlacements] = useState<Record<string, string>>({})
	const [selectedItem, setSelectedItem] = useState<string | null>(null)
	const [showError, setShowError] = useState(false)

	const handleItemClick = (itemId: string) => {
		if (isAnswered) return
		setSelectedItem(itemId)
		setShowError(false)
	}

	const handleCategoryClick = (category: string) => {
		if (isAnswered || !selectedItem) return
		setPlacements(prev => ({ ...prev, [selectedItem]: category }))
		setSelectedItem(null)
		setShowError(false)
	}

	const handleCheck = () => {
		const allCorrect = items.every(
			item => placements[item.id] === item.category,
		)
		onAnswer(allCorrect)
		if (!allCorrect) {
			setShowError(true)
		}
	}

	const unplacedItems = items.filter(i => !placements[i.id])

	return (
		<div className='space-y-6'>
			<div className='flex flex-wrap gap-3 p-4 bg-muted/20 rounded-xl border-2 border-dashed min-h-[80px]'>
				{unplacedItems.length === 0 && !isAnswered && (
					<p className='text-sm text-muted-foreground w-full text-center py-2'>
						{t('lab.allPlaced')}
					</p>
				)}
				{unplacedItems.map(item => (
					<button
						key={item.id}
						onClick={() => handleItemClick(item.id)}
						className={`edu-draggable ${selectedItem === item.id ? 'ring-2 ring-primary scale-105' : ''}`}
					>
						{item.text}
					</button>
				))}
			</div>

			<div className='grid md:grid-cols-2 gap-6'>
				{categories.map(cat => (
					<div
						key={cat}
						onClick={() => handleCategoryClick(cat)}
						className={`edu-drop-zone min-h-[120px] p-4 flex flex-col ${selectedItem ? 'edu-drop-zone-active cursor-pointer' : ''} ${
							isAnswered ? 'opacity-90' : ''
						}`}
					>
						<div className='text-sm font-bold mb-3 text-primary/70 uppercase tracking-wider'>
							{cat}
						</div>
						<div className='flex flex-wrap gap-2 justify-center w-full'>
							{items
								.filter(i => placements[i.id] === cat)
								.map(item => {
									const isItemCorrect = item.category === cat
									return (
										<span
											key={item.id}
											className={`px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition-all ${
												isAnswered
													? isItemCorrect
														? 'bg-green-100 border-green-500 text-green-700'
														: 'bg-red-100 border-red-500 text-red-700'
													: 'bg-white border-primary/20 shadow-sm'
											}`}
										>
											{item.text}
										</span>
									)
								})}
						</div>
					</div>
				))}
			</div>

			<div className='flex flex-col items-center gap-4'>
				{!isAnswered && Object.keys(placements).length === items.length && (
					<Button
						onClick={handleCheck}
						className='edu-gradient-bg text-white w-full max-w-xs py-6 text-lg shadow-lg'
					>
						{t('lab.check')}
					</Button>
				)}

				{showError && !isAnswered && (
					<div className='flex items-center gap-2 text-red-600 font-bold bg-red-50 px-4 py-2 rounded-lg animate-shake'>
						<XCircle className='h-5 w-5' />
						Xato joylashtirildi! Iltimos, qaytadan urinib ko'ring.
					</div>
				)}
			</div>
		</div>
	)
}
