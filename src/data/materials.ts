export interface MaterialTopic {
	id: number
	title: string
	type: 'maruza' | 'seminar'
	docxPath: string
	pptPath: string
}

export const maruzaMaterials: MaterialTopic[] = [
	{
		id: 1,
		title:
			"Davlat tilida ish yuritish kursining predmeti, maqsad va vazifasi, huquqiy asoslari. Oʻzbek munshaoti tarixi, uning an'analari",
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/1-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/1-m.pdf',
	},
	{
		id: 2,
		title: 'Hujjatlaming tasniflanishi',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/2-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/2-M.pdf',
	},
	{
		id: 3,
		title: "Ma'lumot-axborot hujjatlari tasnifi va ularning xususiyatlari",
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/3-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/3-M.pdf',
	},
	{
		id: 4,
		title: "Ma'lumot-axborot hujjatlarining asosiy turlari",
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/4-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/4-M.pdf',
	},
	{
		id: 5,
		title: 'Tashkiliy hujjatlar va ularning ahamiyati',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/5-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/5-M.pdf',
	},
	{
		id: 6,
		title: 'Farmoyish hujjatlari va ularning ahamiyati',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/6-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/6-M.pdf',
	},
	{
		id: 7,
		title: 'Xizmat yozishmalari (Professional yozishmalar) va ularning turlari',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/7-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/7-M.pdf',
	},
	{
		id: 8,
		title: 'Xatlar va ularning turlari',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/8-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/8-M.pdf',
	},
	{
		id: 9,
		title: 'Diplomatik yozishmalar',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/9-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/9-M.pdf',
	},
	{
		id: 10,
		title: 'Xodimlar faoliyatiga doir hujjatlar',
		type: 'maruza',
		docxPath: '/materials/materials-m/m-docx/10-MM.pdf',
		pptPath: '/materials/materials-m/m-pptx/10-m.pdf',
	},
]

export const seminarMaterials: MaterialTopic[] = [
	{
		id: 1,
		title:
			'Rasmiy ish yuritish asoslari haqida. Idoraviy devonxona hujjatlari.',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/1-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/1-P.pdf',
	},
	{
		id: 2,
		title: 'Arizaning yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/2-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/2-P.pdf',
	},
	{
		id: 3,
		title: "Bayonnoma, bayonnomadan ko'chirmaning yozilish tartibi",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/3-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/3-P.pdf',
	},
	{
		id: 4,
		title: 'Bildirishnoma, bildirishning yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/4-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/4-P.pdf',
	},
	{
		id: 5,
		title: 'Vasiyatnoma, dalolatnomaning yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/5-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/5-P.pdf',
	},
	{
		id: 6,
		title: "Ishonchnoma, ma'lumotnomalaning yozilish tartibi",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/6-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/6-P.pdf',
	},
	{
		id: 7,
		title: "Tavsifnomaning yozilish tartibi va o'ziga xos xususiyatlari",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/7-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/7-P.pdf',
	},
	{
		id: 8,
		title: "Tavsiyanomalaming yozilish tartibi va o'ziga xos xususiyatlari",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/8-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/8-P.pdf',
	},
	{
		id: 9,
		title:
			"Tarjimayi hol rezyumening yozilish tartibi va o'ziga xos xususiyatlari",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/9-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/9-P.pdf',
	},
	{
		id: 10,
		title: 'Tushuntirish xati, tilxatning yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/10-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/10-P.pdf',
	},
	{
		id: 11,
		title: "E'lon, hisobotning yozilish tartibi",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/11-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/11-P.pdf',
	},
	{
		id: 12,
		title: 'Ishga kirishda talab qilinadigan hujjatlar ustida ishlash',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/12-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/12-P.pdf',
	},
	{
		id: 13,
		title: "Guvohnoma, yo'riqnomaning tayyorlanish tartibi",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/13-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/13-P.pdf',
	},
	{
		id: 14,
		title: 'Shartnomaning turlari va yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/14-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/14-P.pdf',
	},
	{
		id: 15,
		title: 'Buyruq, farmoyishning tayyorlanish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/15-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/15-P.pdf',
	},
	{
		id: 16,
		title:
			'Manzil, taklifnoma, telegramma, telefonogrammaning yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/16-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/16-P.pdf',
	},
	{
		id: 17,
		title: 'Axborot xati, ilova xati, kafolat xatining yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/17-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/17-P.pdf',
	},
	{
		id: 18,
		title: 'Tasdiq xati, farmoyish xati, eslatma xatining yozilish tartibi',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/18-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/18-P.pdf',
	},
	{
		id: 19,
		title: "Da'vo xati, iltimos xati, so'rov xatining yozilish tartibi",
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/19-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/19-P.pdf',
	},
	{
		id: 20,
		title: 'Hujjatlar matni tarkibidagi imloviy va uslubiy xatolar',
		type: 'seminar',
		docxPath: '/materials/materials-a/a-docx/20-A.pdf',
		pptPath: '/materials/materials-a/a-pptx/20-P.pdf',
	},
]

export const materialTopics = [...maruzaMaterials, ...seminarMaterials]
