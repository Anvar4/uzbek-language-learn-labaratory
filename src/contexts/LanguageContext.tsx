import React, { createContext, useCallback, useContext, useState } from 'react'

export type Language = 'uz' | 'ru' | 'en'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
	uz: {
		// Navigation
		'nav.home': 'Bosh sahifa',
		'nav.about': 'Fan haqida',
		'nav.topics': 'Mavzular',
		'nav.virtualLab': 'Ish Yuritish Lab',
		'nav.materials': "O'quv materiallari",
		'nav.references': 'Adabiyotlar',
		'nav.author': 'Muallif haqida',
		'nav.contact': 'Aloqa',
		'nav.logo': 'Ish Yuritish Lab',

		// Footer
		'footer.desc':
			"Davlat tilida ish yuritish fani bo'yicha zamonaviy o'quv platformasi",
		'footer.quickLinks': 'Tezkor havolalar',
		'footer.resources': 'Resurslar',
		'footer.contact': 'Aloqa',
		'footer.rights': 'Barcha huquqlar himoyalangan',
		'footer.university': 'Termiz Davlat Universiteti',
		'footer.location': "Termiz, O'zbekiston",
		'footer.transport.title': "Transport yo'nalishlari",
		'footer.transport.desc':
			'Termiz davlat universitetiga harakatlanadigan marshrutlar: 15, 3, 7, 244, 5-avtobus',
		'footer.notice':
			"Saytdagi har qanday ma'lumotdan foydalanish, bizning saytga havola ko'rsatish sharti bilan ruxsat etiladi.",

		// Home Page
		'home.hero.badge': 'Ish Yuritish Lab',
		'home.hero.title': 'Davlat tilida ish yuritish',
		'home.hero.subtitle':
			"Davlat tashkilotlari va muassasalarida ish yuritish, hujjatlar bilan ishlash asoslarini interaktiv tarzda o'rganing",
		'home.hero.cta.start': 'Boshlash',
		'home.hero.cta.explore': "Ko'rish",
		'home.stats.topics': 'Mavzular',
		'home.stats.labs': 'Laboratoriya ishlari',
		'home.stats.activities': 'Interaktiv topshiriqlar',
		'home.stats.languages': 'Tillar',
		'home.features.title': 'Platforma imkoniyatlari',
		'home.features.interactive': 'Interaktiv mashqlar',
		'home.features.interactive.desc':
			"O'yin formatidagi topshiriqlar orqali hujjat turlarini va ularni to'ldirishni o'rganing",
		'home.features.modern': 'Zamonaviy yondashuv',
		'home.features.modern.desc':
			"Davlat standarti talablariga mos keladigan eng so'nggi pedagogik metodlar",
		'home.features.practical': "Amaliy yo'nalish",
		'home.features.practical.desc':
			"Hujjatlar loyihalarini tayyorlash va tahrir qilish ko'nikmalarini shakllantiring",
		'home.quickAccess.title': 'Tezkor havolalar',
		'home.quickAccess.topics': "Mavzularga o'tish",
		'home.quickAccess.labs': 'Ish yuritish laboratoriyasi',
		'home.quickAccess.materials': "Materiallarga o'tish",
		'home.cta.title': 'Bilimlaringizni sinashga tayyormisiz?',
		'home.cta.desc':
			"Virtual laboratoriya orqali interaktiv topshiriqlarni bajaring va o'z bilimlaringizni mustahkamlang.",

		// About Page
		'about.title': 'Fan haqida',
		'about.goals.title': 'Fanning maqsadlari',
		'about.goals.desc':
			"Davlat tilida ish yuritish bo'yicha nazariy bilim va amaliy ko'nikmalarni shakllantirish, rasmiy hujjatlar bilan ishlash madaniyatini yuksaltirish",
		'about.outcomes.title': "O'quv natijalari",
		'about.outcomes.desc':
			"Talabalar fanni o'zlashtirish davomida quyidagi natijalarni qo'lga kiritadi",
		'about.application.title': 'Hujjatlar bilan ishlash sohalari',
		'about.application.desc':
			"Rasmiy-idoraviy uslub va hujjatlar almashinuvi turli davlat va jamiyat boshqaruvi sohalarida qo'llaniladi",

		// Topics
		'topics.title': 'Mavzular',
		'topics.subtitle':
			"Fanning barcha ma'ruza va seminar mavzulari bo'yicha to'liq ma'lumot",
		'topics.description': 'Tavsif',
		'topics.presentation': 'Taqdimot',
		'topics.practical': "Amaliy mashg'ulot",
		'topics.goToLab': "Laboratoriyaga o'tish",
		'topics.search': 'Mavzulardan qidirish...',

		// Virtual Lab
		'lab.title': 'Ish Yuritish Lab',
		'lab.subtitle':
			"Laboratoriya mashg'ulotlari orqali bilimlaringizni amalda sinang",
		'lab.selectTopic': "Mashg'ulot mavzusini tanlang",
		'lab.topicLabel': 'Mavzu:',
		'lab.maruza': "Ma'ruza",
		'lab.seminar': 'Seminar',
		'lab.placeholder': 'Mavzuni tanlang',
		'lab.task': 'Topshiriq',
		'lab.of': 'dan',
		'lab.progress': 'Jarayon',
		'lab.check': 'Tekshirish',
		'lab.next': 'Keyingi',
		'lab.prev': 'Oldingi',
		'lab.complete': 'Yakunlash',
		'lab.correct': "To'g'ri!",
		'lab.incorrect': "Noto'g'ri, qayta urinib ko'ring",
		'lab.instructions': "Ko'rsatmalar",
		'lab.dragHere': 'Bu yerga tashlang',
		'lab.allPlaced': 'Barcha elementlar joylashtirildi. Tekshirishni bosing.',
		'lab.fillBlank': "Bo'sh joyni to'ldiring",
		'lab.selectAnswer': 'Javobni tanlang',
		'lab.matchPairs': 'Juftlarni moslashtiring',

		// Virtual Lab Results
		'lab.results': 'Natijangiz',
		'lab.completedDesc': "mavzusi bo'yicha laboratoriya yakunlandi",
		'lab.correctLabel': "To'g'ri",
		'lab.incorrectLabel': 'Xato',
		'lab.countUnit': 'ta',
		'lab.totalResult': 'Umumiy natija',
		'lab.scoreUnit': 'ball',
		'lab.restart': 'Qaytadan urinish',
		'lab.chooseAnother': 'Boshqa mavzuni tanlash',

		// Materials
		'materials.title': "O'quv materiallari",
		'materials.subtitle':
			"Davlat tilida ish yuritish fani bo'yicha ma'ruza va seminar materiallari.",
		'materials.lectures': "Ma'ruzalar",
		'materials.practical': 'Seminarlar',
		'materials.methodical': "Metodik qo'llanmalar",
		'materials.download': 'Yuklab olish',
		'materials.view': "Ko'rish",
		'materials.textType': "O'quv materiali (Matn)",
		'materials.presentationType': 'Taqdimot (PDF)',
		'materials.previewDesc': "Faylni ko'rish va yuklab olish",

		// References
		'references.title': 'Adabiyotlar',
		'references.subtitle':
			"Fanni o'zlashtirish uchun tavsiya etiladigan asosiy va qo'shimcha adabiyotlar ro'yxati",
		'references.main': 'Asosiy adabiyotlar',
		'references.additional': "Qo'shimcha adabiyotlar",

		// Common
		'common.close': 'Yopish',
		'common.active': 'Faol',

		// Author
		'author.title': 'Muallif haqida',
		'author.name': 'Raximova Umida Djumayevna',
		'author.degree': 'v.b. dotsenti, (PhD)',
		'author.dept': 'oʻzbek tili va adabiyoti kafedrasi',
		'author.uni': 'Termiz davlat universiteti',
		'author.bio':
			'Raximova Umida Djumayevna - Termiz davlat universiteti oʻzbek tili va adabiyoti kafedrasi v.b. dotsenti, (PhD). Davlat tilida ish yuritish fanini oʻqitish va zamonaviy taʼlim texnologiyalarini joriy etish sohasida faoliyat yuritadi.',
		'author.achievement.1': 'oʻzbek tili va adabiyoti kafedrasi v.b. dotsenti',
		'author.achievement.2': 'Filologiya fanlari boʻyicha falsafa doktori (PhD)',
		'author.achievement.3': 'Oʻquv-metodik qoʻllanmalar muallifi',
		'author.contribution.1': 'Davlat tilida ish yuritishni oʻqitish',
		'author.contribution.2': 'Pedagogik texnologiyalarni rivojlantirish',
		'author.contribution.3': 'Ilmiy-tadqiqot ishlari',
		'author.profile': 'Ilmiy profil',
		'author.contribution': "Fanga qo'shgan hissasi",

		// Contact
		'contact.title': 'Aloqa',
		'contact.name': 'Ism sharifi',
		'contact.email': 'Elektron pochta',
		'contact.message': 'Xabar',
		'contact.submit': 'Yuborish',
		'contact.address': 'Manzil',
		'contact.phone': 'Telefon',
	},
	ru: {
		// Navigation
		'nav.home': 'Главная',
		'nav.about': 'О предмете',
		'nav.topics': 'Темы',
		'nav.virtualLab': 'Ish Yuritish Lab',
		'nav.materials': 'Учебные материалы',
		'nav.references': 'Литература',
		'nav.author': 'Об авторе',
		'nav.contact': 'Контакты',
		'nav.logo': 'Ish Yuritish Lab',

		// Footer
		'footer.desc':
			'Современная образовательная платформа по предмету Делопроизводство на государственном языке',
		'footer.quickLinks': 'Быстрые ссылки',
		'footer.resources': 'Ресурсы',
		'footer.contact': 'Контакты',
		'footer.rights': 'Все права защищены',
		'footer.university': 'Термезский государственный университет',
		'footer.location': 'Термез, Узбекистан',
		'footer.transport.title': 'Транспортные маршруты',
		'footer.transport.desc':
			'Маршруты до Термезского государственного университета: Автобусы 15, 3, 7, 244, 5',
		'footer.notice':
			'Использование любой информации с сайта разрешено при условии ссылки на наш сайт.',

		// Home Page
		'home.hero.badge': 'Ish Yuritish Lab',
		'home.hero.title': 'Делопроизводство на государственном языке',
		'home.hero.subtitle':
			'Изучайте основы ведения документации и делопроизводства в государственных организациях в интерактивном формате',
		'home.hero.cta.start': 'Начать',
		'home.hero.cta.explore': 'Обзор',
		'home.stats.topics': 'Темы',
		'home.stats.labs': 'Лабораторные работы',
		'home.stats.activities': 'Интерактивные задания',
		'home.stats.languages': 'Языки',
		'home.features.title': 'Возможности платформы',
		'home.features.interactive': 'Интерактивные упражнения',
		'home.features.interactive.desc':
			'Изучайте типы документов и их заполнение через задания в игровом формате',
		'home.features.modern': 'Современный подход',
		'home.features.modern.desc':
			'Новейшие педагогические методы, соответствующие государственным стандартам',
		'home.features.practical': 'Практическая направленность',
		'home.features.practical.desc':
			'Сформируйте навыки подготовки и редактирования проектов документов',
		'home.quickAccess.title': 'Быстрый доступ',
		'home.quickAccess.topics': 'Перейти к темам',
		'home.quickAccess.labs': 'Лаборатория делопроизводства',
		'home.quickAccess.materials': 'Перейти к материалам',
		'home.cta.title': 'Готовы проверить свои знания?',
		'home.cta.desc':
			'Выполняйте интерактивные задания через виртуальную лабораторию и закрепляйте свои знания.',

		// About Page
		'about.title': 'О предмете',
		'about.goals.title': 'Цели предмета',
		'about.goals.desc':
			'Формирование теоретических знаний и практических навыков по делопроизводству на государственном языке, повышение культуры работы с официальными документами',
		'about.outcomes.title': 'Результаты обучения',
		'about.outcomes.desc':
			'В процессе освоения предмета студенты достигнут следующих результатов',
		'about.application.title': 'Сферы работы с документами',
		'about.application.desc':
			'Официально-деловой стиль и документооборот применяются в различных сферах государственного и общественного управления',

		// Topics
		'topics.title': 'Темы',
		'topics.subtitle':
			'Полная информация по всем лекционным и семинарским темам предмета',
		'topics.description': 'Описание',
		'topics.presentation': 'Презентация',
		'topics.practical': 'Практическое занятие',
		'topics.goToLab': 'Перейти в лабораторию',
		'topics.search': 'Поиск по темам...',

		// Virtual Lab
		'lab.title': 'Лаб. делопроизводства',
		'lab.subtitle':
			'Проверьте свои знания на практике через лабораторные занятия',
		'lab.selectTopic': 'Выберите тему занятия',
		'lab.topicLabel': 'Тема:',
		'lab.maruza': 'Лекция',
		'lab.seminar': 'Семинар',
		'lab.placeholder': 'Выберите тему',
		'lab.task': 'Задание',
		'lab.of': 'из',
		'lab.progress': 'Прогресс',
		'lab.check': 'Проверить',
		'lab.next': 'Следующий',
		'lab.prev': 'Предыдущий',
		'lab.complete': 'Завершить',
		'lab.correct': 'Правильно!',
		'lab.incorrect': 'Неправильно, попробуйте еще раз',
		'lab.instructions': 'Инструкции',
		'lab.dragHere': 'Перетащите сюда',
		'lab.allPlaced': 'Все элементы размещены. Нажмите проверить.',
		'lab.fillBlank': 'Заполните пропуск',
		'lab.selectAnswer': 'Выберите ответ',
		'lab.matchPairs': 'Сопоставьте пары',

		// Virtual Lab Results
		'lab.results': 'Ваш результат',
		'lab.completedDesc': 'лабораторная работа по теме завершена',
		'lab.correctLabel': 'Правильно',
		'lab.incorrectLabel': 'Ошибка',
		'lab.countUnit': 'шт.',
		'lab.totalResult': 'Общий результат',
		'lab.scoreUnit': 'балл(ов)',
		'lab.restart': 'Попробовать снова',
		'lab.chooseAnother': 'Выбрать другую тему',

		// Materials
		'materials.title': 'Учебные материалы',
		'materials.subtitle':
			'Лекционные и семинарские материалы по предмету «Делопроизводство на государственном языке».',
		'materials.lectures': 'Лекции',
		'materials.practical': 'Семинары',
		'materials.methodical': 'Методические пособия',
		'materials.download': 'Скачать',
		'materials.view': 'Просмотр',
		'materials.textType': 'Учебный материал (Текст)',
		'materials.presentationType': 'Презентация (PDF)',
		'materials.previewDesc': 'Просмотр и скачивание файла',

		// References
		'references.title': 'Литература',
		'references.subtitle':
			'Список основной и дополнительной литературы, рекомендуемой для освоения предмета',
		'references.main': 'Основная литература',
		'references.additional': 'Дополнительная литература',

		// Common
		'common.close': 'Закрыть',
		'common.active': 'Активен',

		// Author
		'author.title': 'Об авторе',
		'author.name': 'Рахимова Умида Джумаевна',
		'author.degree': 'и.о. доцента, (PhD)',
		'author.dept': 'Кафедра узбекского языка и литературы',
		'author.uni': 'Термезский государственный университет',
		'author.bio':
			'Рахимова Умида Джумаевна — и.о. доцента кафедры узбекского языка и литературы Термезского государственного университета, кандидат филологических наук (PhD). Специализируется на методике преподавания узбекского языка и делопроизводстве на государственном языке.',
		'author.achievement.1':
			'и.о. доцента кафедры узбекского языка и литературы',
		'author.achievement.2': 'Кандидат филологических наук (PhD)',
		'author.achievement.3': 'Разработчик современных образовательных платформ',
		'author.contribution.1': 'Преподавание узбекского языка',
		'author.contribution.2': 'Методика делопроизводства',
		'author.contribution.3': 'Научные исследования в области филологии',
		'author.profile': 'Научный профиль',
		'author.contribution': 'Вклад в науку',

		// Contact
		'contact.title': 'Контакты',
		'contact.name': 'Имя и фамилия',
		'contact.email': 'Электронная почта',
		'contact.message': 'Сообщение',
		'contact.submit': 'Отправить',
		'contact.address': 'Адрес',
		'contact.phone': 'Телефон',
	},
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.about': 'About Subject',
		'nav.topics': 'Topics',
		'nav.virtualLab': 'Ish Yuritish Lab',
		'nav.materials': 'Study Materials',
		'nav.references': 'References',
		'nav.author': 'About Author',
		'nav.contact': 'Contact',
		'nav.logo': 'Ish Yuritish Lab',

		// Footer
		'footer.desc':
			'Modern educational platform for the subject Business Management in State Language',
		'footer.quickLinks': 'Quick Links',
		'footer.resources': 'Resources',
		'footer.contact': 'Contact',
		'footer.rights': 'All rights reserved',
		'footer.university': 'Termez State University',
		'footer.location': 'Termez, Uzbekistan',
		'footer.transport.title': 'Transport Routes',
		'footer.transport.desc':
			'Routes to Termez State University: Buses 15, 3, 7, 244, 5',
		'footer.notice':
			'Use of any information from the site is permitted subject to a link to our site.',

		// Home Page
		'home.hero.badge': 'Ish Yuritish Lab',
		'home.hero.title': 'Business Management in State Language',
		'home.hero.subtitle':
			'Learn the basics of documentation and office management in state organizations interactively',
		'home.hero.cta.start': 'Get Started',
		'home.hero.cta.explore': 'Explore',
		'home.stats.topics': 'Topics',
		'home.stats.labs': 'Lab Works',
		'home.stats.activities': 'Interactive Tasks',
		'home.stats.languages': 'Languages',
		'home.features.title': 'Platform Features',
		'home.features.interactive': 'Interactive Exercises',
		'home.features.interactive.desc':
			'Learn document types and how to fill them through game-formatted tasks',
		'home.features.modern': 'Modern Approach',
		'home.features.modern.desc':
			'Latest pedagogical methods meeting state standard requirements',
		'home.features.practical': 'Practical Focus',
		'home.features.practical.desc':
			'Develop skills in preparing and editing document drafts',
		'home.quickAccess.title': 'Quick Access',
		'home.quickAccess.topics': 'Go to Topics',
		'home.quickAccess.labs': 'Office Management Lab',
		'home.quickAccess.materials': 'Go to Materials',
		'home.cta.title': 'Ready to test your knowledge?',
		'home.cta.desc':
			'Complete interactive activities through the virtual laboratory and reinforce your knowledge.',

		// About Page
		'about.title': 'About Subject',
		'about.goals.title': 'Subject Goals',
		'about.goals.desc':
			'Formation of theoretical knowledge and practical skills in business management in the state language, improving the culture of working with official documents',
		'about.outcomes.title': 'Learning Outcomes',
		'about.outcomes.desc':
			'During the course of the subject, students will achieve the following results',
		'about.application.title': 'Fields of Documentation',
		'about.application.desc':
			'Official-departmental style and document exchange are applied in various fields of state and public administration',

		// Topics
		'topics.title': 'Topics',
		'topics.subtitle':
			'Full information on all lecture and seminar topics of the subject',
		'topics.description': 'Description',
		'topics.presentation': 'Presentation',
		'topics.practical': 'Practical Session',
		'topics.goToLab': 'Go to Lab',
		'topics.search': 'Search topics...',
		// Virtual Lab
		'lab.title': 'Ish Yuritish Lab',
		'lab.subtitle':
			'Test your knowledge in practice through laboratory sessions',
		'lab.selectTopic': 'Select a session topic',
		'lab.topicLabel': 'Topic:',
		'lab.maruza': 'Lecture',
		'lab.seminar': 'Seminar',
		'lab.placeholder': 'Choose a topic',
		'lab.task': 'Task',
		'lab.of': 'of',
		'lab.progress': 'Progress',
		'lab.check': 'Check',
		'lab.next': 'Next',
		'lab.prev': 'Previous',
		'lab.complete': 'Complete',
		'lab.correct': 'Correct!',
		'lab.incorrect': 'Incorrect, please try again',
		'lab.instructions': 'Instructions',
		'lab.dragHere': 'Drop here',
		'lab.allPlaced': 'All items placed. Click check.',
		'lab.fillBlank': 'Fill in the blank',
		'lab.selectAnswer': 'Select an answer',
		'lab.matchPairs': 'Match the pairs',

		// Virtual Lab Results
		'lab.results': 'Your Result',
		'lab.completedDesc': 'lab work on topic completed',
		'lab.correctLabel': 'Correct',
		'lab.incorrectLabel': 'Incorrect',
		'lab.countUnit': '',
		'lab.totalResult': 'Total Result',
		'lab.scoreUnit': 'points',
		'lab.restart': 'Try Again',
		'lab.chooseAnother': 'Choose another topic',

		// Materials
		'materials.title': 'Study Materials',
		'materials.subtitle':
			'Lecture and seminar materials on the subject Business Management in State Language.',
		'materials.lectures': 'Lectures',
		'materials.practical': 'Seminars',
		'materials.methodical': 'Methodological Guides',
		'materials.download': 'Download',
		'materials.view': 'View',
		'materials.textType': 'Study Material (Text)',
		'materials.presentationType': 'Presentation (PDF)',
		'materials.previewDesc': 'View and download the file',

		// References
		'references.title': 'References',
		'references.subtitle':
			'List of primary and secondary literature recommended for the course',
		'references.main': 'Main References',
		'references.additional': 'Additional References',

		// Common
		'common.close': 'Close',
		'common.active': 'Active',

		// Author
		'author.title': 'About Author',
		'author.name': 'Rakhimova Umida Djumayevna',
		'author.degree': 'Acting Associate Professor, (PhD)',
		'author.dept': 'Department of Uzbek Language and Literature',
		'author.uni': 'Termez State University',
		'author.bio':
			'Rakhimova Umida Djumayevna is an Acting Associate Professor at the Department of Uzbek Language and Literature of Termez State University, PhD. Expert in teaching Uzbek language and state office management.',
		'author.achievement.1':
			'Acting Associate Professor of Uzbek Language Department',
		'author.achievement.2':
			'Doctor of Philosophy in Philological Sciences (PhD)',
		'author.achievement.3': 'Developer of educational technologies',
		'author.contribution.1': 'Teaching Uzbek language',
		'author.contribution.2': 'Office management methodology',
		'author.contribution.3': 'Philological research',
		'author.profile': 'Scientific Profile',
		'author.contribution': 'Contribution to Science',

		// Contact
		'contact.title': 'Contact',
		'contact.name': 'Full Name',
		'contact.email': 'Email',
		'contact.message': 'Message',
		'contact.submit': 'Submit',
		'contact.address': 'Address',
		'contact.phone': 'Phone',
	},
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>('uz')

	const t = useCallback(
		(key: string): string => {
			return translations[language][key] || key
		},
		[language],
	)

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider')
	}
	return context
}
