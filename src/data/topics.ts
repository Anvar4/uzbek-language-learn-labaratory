export interface Topic {
	id: number
	titleUz: string
	type: 'maruza' | 'seminar'
}

export const maruzaTopics: Topic[] = [
	{
		id: 1,
		titleUz:
			"Davlat tilida ish yuritish kursining predmeti, maqsad va vazifasi, huquqiy asoslari. Oʻzbek munshaoti tarixi, uning an'analari",
		type: 'maruza',
	},
	{ id: 2, titleUz: 'Hujjatlaming tasniflanishi', type: 'maruza' },
	{
		id: 3,
		titleUz:
			"Ma'lumot-axborot hujjatlari tasnifi va ularning xususiyatlari. (Ariza, tushuntirish xati, bildirishnoma, bayonnoma, bayonnomadan ko'chirma, dalolatnoma, ma'lumotnoma, ishonchnoma)",
		type: 'maruza',
	},
	{
		id: 4,
		titleUz:
			"Ma'lumot-axborot hujjatlarining asosiy turlari. (tavsifnoma, tavsiyanoma, tarjimayi hol, (Rezume&shaxsiy ma'lumotnoma)¹, hisobot, tilxat, e'lon)",
		type: 'maruza',
	},
	{
		id: 5,
		titleUz: 'Tashkiliy hujjatlar va ularning ahamiyati',
		type: 'maruza',
	},
	{
		id: 6,
		titleUz: 'Farmoyish hujjatlari va ularning ahamiyati',
		type: 'maruza',
	},
	{
		id: 7,
		titleUz:
			'Xizmat yozishmalari (Professional yozishmalar) va ularning turlari',
		type: 'maruza',
	},
	{ id: 8, titleUz: 'Xatlar va ularning turlari', type: 'maruza' },
	{ id: 9, titleUz: 'Diplomatik yozishmalar', type: 'maruza' },
	{
		id: 10,
		titleUz:
			'Xodimlar faoliyatiga doir hujjatlar. Akademik halollik va plagiatdan gochish yoʻllari',
		type: 'maruza',
	},
]

export const seminarTopics: Topic[] = [
	{
		id: 1,
		titleUz:
			'Rasmiy ish yuritish asoslari haqida. Idoraviy devonxona hujjatlari.',
		type: 'seminar',
	},
	{ id: 2, titleUz: 'Arizaning yozilish tartibi', type: 'seminar' },
	{
		id: 3,
		titleUz: 'Bayonnoma, bayonnomadan koʻchirmaning yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 4,
		titleUz: 'Bildirishnoma, bildirishning yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 5,
		titleUz: 'Vasiyatnoma, dalolatnomaning yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 6,
		titleUz: "Ishonchnoma, ma'lumotnomalaning yozilish tartibi",
		type: 'seminar',
	},
	{
		id: 7,
		titleUz: 'Tavsifnomaning yozilish tartibi va oʻziga xos xususiyatlari',
		type: 'seminar',
	},
	{
		id: 8,
		titleUz: 'Tavsiyanomalaming yozilish tartibi va oʻziga xos xususiyatlari',
		type: 'seminar',
	},
	{
		id: 9,
		titleUz:
			'Tarjimayi hol rezyumening yozilish tartibi va oʻziga xos xususiyatlari',
		type: 'seminar',
	},
	{
		id: 10,
		titleUz: 'Tushuntirish xati, tilxatning yozilish tartibi',
		type: 'seminar',
	},
	{ id: 11, titleUz: "E'lon, hisobotning yozilish tartibi", type: 'seminar' },
	{
		id: 12,
		titleUz: 'Ishga kirishda talab qilinadigan hujjatlar ustida ishlash',
		type: 'seminar',
	},
	{
		id: 13,
		titleUz: 'Guvohnoma, yoʻriqnomaning tayyorlanish tartibi',
		type: 'seminar',
	},
	{
		id: 14,
		titleUz: 'Shartnomaning turlari va yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 15,
		titleUz: 'Buyruq, farmoyishning tayyorlanish tartibi',
		type: 'seminar',
	},
	{
		id: 16,
		titleUz:
			'Manzil, taklifnoma, telegramma, telefonogrammaning yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 17,
		titleUz: 'Axborot xati, ilova xati, kafolat xatining yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 18,
		titleUz: 'Tasdiq xati, farmoyish xati, eslatma xatining yozilish tartibi',
		type: 'seminar',
	},
	{
		id: 19,
		titleUz: "Da'vo xati, iltimos xati, soʻrov xatining yozilish tartibi",
		type: 'seminar',
	},
	{
		id: 20,
		titleUz:
			'Hujjatlar matni tarkibidagi imloviy va uslubiy xatolarning yuzaga kelish sabablari. Elektron hujjat davr taqozosi sifatida. Professionallik va elektron pochta. Yurist nutqiga qoʻyiladigan talablar',
		type: 'seminar',
	},
]

export const topics = [
	...maruzaTopics.map(t => ({ ...t, id: t.id })),
	...seminarTopics.map(t => ({ ...t, id: t.id + 100 })),
]

export const getTopicTitle = (topic: Topic, language: string) => {
	return topic.titleUz
}

export const getTopicDescription = (topic: Topic, language: string) => {
	const typeLabel =
		topic.type === 'maruza'
			? language === 'ru'
				? 'Лекционное занятие'
				: language === 'en'
					? 'Lecture session'
					: "Ma'ruza mashg'uloti"
			: language === 'ru'
				? 'Семинарское занятие'
				: language === 'en'
					? 'Seminar session'
					: "Seminar mashg'uloti"

	const topicLabel =
		language === 'ru' ? 'Тема' : language === 'en' ? 'Topic' : 'Mavzu'

	return `${typeLabel}. ${topicLabel}: ${topic.titleUz}`
}
