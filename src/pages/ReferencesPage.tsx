import { useLanguage } from '@/contexts/LanguageContext'
import { Book, BookOpen } from 'lucide-react'
import React from 'react'

interface Reference {
	titleUz: string
	titleRu: string
	titleEn: string
	author: string
	year: string
	publisher: string
}

const mainReferences: Reference[] = [
	{
		titleUz: 'Davlat tilida ish yuritish',
		titleRu: 'Делопроизводство на государственном языке',
		titleEn: 'Business Management in State Language',
		author: 'Aminov M., Madvaliyev A.',
		year: '2020',
		publisher: "Toshkent: O'zbekiston milliy ensiklopediyasi",
	},
	{
		titleUz: "O'zbek tili va nutq madaniyati",
		titleRu: 'Узбекский язык и культура речи',
		titleEn: 'Uzbek Language and Speech Culture',
		author: 'Mahmudov N.',
		year: '2021',
		publisher: 'Toshkent: Fan nashriyoti',
	},
	{
		titleUz: 'Rasmiy-idoraviy uslub: nazariya va amaliyot',
		titleRu: 'Официально-деловой стиль: теория и практика',
		titleEn: 'Official-Business Style: Theory and Practice',
		author: 'Qodirov B.',
		year: '2019',
		publisher: 'Toshkent: Akademiya',
	},
	{
		titleUz: 'Hujjat tili va uslubi',
		titleRu: 'Язык и стиль документа',
		titleEn: 'Document Language and Style',
		author: "Yo'ldoshev J.",
		year: '2022',
		publisher: 'Toshkent: Adabiyot uchqunlari',
	},
]

const additionalReferences: Reference[] = [
	{
		titleUz: "O'zbek tilining imlo lug'ati (yangi tahrirda)",
		titleRu: 'Орфографический словарь узбекского языка',
		titleEn: 'Spelling Dictionary of the Uzbek Language',
		author: "To'ychiyev N.",
		year: '2021',
		publisher: "Toshkent: G'afur G'ulom",
	},
	{
		titleUz: "Zamonaviy o'zbek adabiy tili",
		titleRu: 'Современный узбекский литературный язык',
		titleEn: 'Modern Uzbek Literary Language',
		author: 'Sayfullayev R.',
		year: '2020',
		publisher: 'Toshkent: Fan va texnologiya',
	},
]

export const ReferencesPage: React.FC = () => {
	const { t, language } = useLanguage()

	const getTitle = (ref: Reference) => {
		switch (language) {
			case 'ru':
				return ref.titleRu
			case 'en':
				return ref.titleEn
			default:
				return ref.titleUz
		}
	}

	const ReferenceCard: React.FC<{ reference: Reference; index: number }> = ({
		reference,
		index,
	}) => (
		<div className='edu-card p-5 hover:border-primary/30 transition-colors'>
			<div className='flex items-start gap-4'>
				<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0'>
					<Book className='h-5 w-5' />
				</div>
				<div className='flex-1'>
					<h3 className='font-semibold mb-1'>{getTitle(reference)}</h3>
					<p className='text-sm text-muted-foreground mb-2'>
						{reference.author} ({reference.year})
					</p>
					<p className='text-xs text-muted-foreground'>{reference.publisher}</p>
				</div>
			</div>
		</div>
	)

	return (
		<div className='edu-section'>
			<div className='edu-container'>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-heading font-bold mb-4'>
						{t('references.title')}
					</h1>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						{t('references.subtitle')}
					</p>
				</div>

				<div className='space-y-16'>
					<section>
						<div className='flex items-center gap-3 mb-8'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg edu-gradient-bg text-white'>
								<BookOpen className='h-5 w-5' />
							</div>
							<h2 className='text-2xl font-heading font-bold'>
								{t('references.main')}
							</h2>
						</div>
						<div className='grid md:grid-cols-2 gap-6'>
							{mainReferences.map((ref, index) => (
								<ReferenceCard key={index} reference={ref} index={index} />
							))}
						</div>
					</section>

					<section>
						<div className='flex items-center gap-3 mb-8'>
							<div className='flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground'>
								<BookOpen className='h-5 w-5' />
							</div>
							<h2 className='text-2xl font-heading font-bold text-muted-foreground'>
								{t('references.additional')}
							</h2>
						</div>
						<div className='grid md:grid-cols-2 gap-6 opacity-80'>
							{additionalReferences.map((ref, index) => (
								<ReferenceCard key={index} reference={ref} index={index} />
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
