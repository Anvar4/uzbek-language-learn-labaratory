import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/LanguageContext'
import { FillBlankData, LabActivity } from '@/data/labActivities'
import React, { useState } from 'react'

interface FillBlankGameProps {
	activity: LabActivity
	language: 'uz' | 'ru' | 'en'
	onAnswer: (correct: boolean) => void
	isAnswered: boolean
}

export const FillBlankGame: React.FC<FillBlankGameProps> = ({
	activity,
	onAnswer,
	isAnswered,
}) => {
	const { t } = useLanguage()
	const data = activity.data as FillBlankData
	const [answers, setAnswers] = useState<Record<string, string>>({})

	const handleCheck = () => {
		const allCorrect = data.blanks.every(
			blank =>
				answers[blank.id]?.toLowerCase().trim() === blank.answer.toLowerCase(),
		)
		onAnswer(allCorrect)
	}

	const parts = data.sentence.split(/__BLANK\d+__/)

	return (
		<div>
			<div className='p-4 bg-muted/50 rounded-xl mb-4 leading-relaxed'>
				{parts.map((part, index) => (
					<React.Fragment key={index}>
						{part}
						{index < data.blanks.length && (
							<Input
								className='inline-block w-32 mx-1'
								value={answers[data.blanks[index].id] || ''}
								onChange={e =>
									setAnswers(prev => ({
										...prev,
										[data.blanks[index].id]: e.target.value,
									}))
								}
								disabled={isAnswered}
							/>
						)}
					</React.Fragment>
				))}
			</div>
			{!isAnswered && (
				<Button onClick={handleCheck} className='edu-gradient-bg text-white'>
					{t('lab.check')}
				</Button>
			)}
		</div>
	)
}
