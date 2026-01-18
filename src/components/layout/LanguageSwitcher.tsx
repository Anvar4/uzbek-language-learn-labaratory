import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Language, useLanguage } from '@/contexts/LanguageContext'
import React from 'react'

const languages: { code: Language; label: string; flag: string }[] = [
	{ code: 'uz', label: "O'zbekcha", flag: 'https://flagcdn.com/w40/uz.png' },
	{ code: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
	{ code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
]

export const LanguageSwitcher: React.FC = () => {
	const { language, setLanguage } = useLanguage()

	const currentLang = languages.find(l => l.code === language)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='sm' className='gap-2'>
					<img
						src={currentLang?.flag}
						alt={currentLang?.label}
						className='w-5 h-4 object-cover rounded-sm'
					/>
					<span className='hidden sm:inline text-sm'>
						{currentLang?.code.toUpperCase()}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='bg-popover'>
				{languages.map(lang => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => setLanguage(lang.code)}
						className={
							language === lang.code ? 'bg-primary/10 text-primary' : ''
						}
					>
						<img
							src={lang.flag}
							alt={lang.label}
							className='w-5 h-4 object-cover rounded-sm mr-2'
						/>
						{lang.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
