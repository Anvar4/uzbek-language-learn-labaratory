import { seminarTopics } from './topics'

const generateDetailedLabs = (): any[] => {
	const labs: any[] = []

	const maruzaData = [
		{
			id: 1,
			activities: [
				{
					type: 'quiz',
					title: 'Huquqiy asoslar testi',
					instructions:
						"O'zbekiston Respublikasining 'Davlat tili haqida'gi Qonuni qachon qabul qilingan?",
					data: [
						{ id: '1', text: '1989-yil 21-oktabr', isCorrect: true },
						{ id: '2', text: '1991-yil 1-sentabr', isCorrect: false },
						{ id: '3', text: '1992-yil 8-dekabr', isCorrect: false },
						{ id: '4', text: '1993-yil 2-sentabr', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Alifbo islohoti',
					instructions: 'Atamalarni tegishli yillarga joylashtiring.',
					data: [
						{ id: '1', text: 'Lotin alifbosi', category: '1993' },
						{ id: '2', text: 'Kirill alifbosi', category: '1940' },
						{ id: '3', text: 'Yangi imlo qoidalari', category: '1995' },
					],
				},
				{
					type: 'matching',
					title: 'Atamalar muvofiqligi',
					instructions: "Atamalarning ma'nosini toping.",
					data: [
						{
							id: '1',
							left: 'Ish yuritish',
							right: 'Hujjatlar bilan ishlash jarayoni',
						},
						{ id: '2', left: 'Davlat tili', right: "O'zbek tili" },
						{ id: '3', left: "Me'yor", right: 'Adabiy til qoidalari' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Qonun matni',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"O'zbekistonda ish yuritish __BLANK1__ tilida olib boriladi va zaruratga qarab boshqa tillarga __BLANK2__ qilinadi.",
						blanks: [
							{ id: '1', answer: 'davlat' },
							{ id: '2', answer: 'tarjima' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Ish yurituvchi tanlovi',
					instructions:
						'Siz idora ish yurituvchisisiz. Hujjatni qaysi alifboda tayyorlashga qaror qilasiz?',
					data: {
						situation:
							'Yangi xodim sifatida sizga rasmiy buyruq loyihasini tayyorlash topshirildi.',
						question:
							"Amaldagi qonunchilikka ko'ra rasmiy hujjatlar qaysi yozuvda bo'lishi shart?",
						options: [
							{
								id: '1',
								text: "Lotin yozuviga asoslangan o'zbek alifbosida",
								isCorrect: true,
								feedback: "Barakalla! Bu hozirgi asosiy talab.",

							},
							{
								id: '2',
								text: 'Faqat kirill yozuvida',
								isCorrect: false,
								feedback: "Noto'g'ri. Lotin yozuviga o'tish yakunlanmoqda.",

							},
						],
					},
				},
			],
		},
		{
			id: 2,
			activities: [
				{
					type: 'quiz',
					title: 'Tasniflash testi',
					instructions:
						"Hujjatlar saqlanish muddati bo'yicha qanday turlarga bo'linadi?",
					data: [
						{ id: '1', text: 'Doimiy, vaqtincha', isCorrect: true },
						{ id: '2', text: 'Muhim, muhim emas', isCorrect: false },
						{ id: '3', text: 'Eski, yangi', isCorrect: false },
						{ id: '4', text: 'Maxfiy, ochiq', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Hujjatlar iyerarxiyasi',
					instructions: "Hujjatlarni yuridik kuchi bo'yicha saralang.",
					data: [
						{ id: '1', text: 'Konstitutsiya', category: 'Eng yuqori' },
						{ id: '2', text: 'Qonun', category: 'Yuqori' },
						{ id: '3', text: 'Nizom', category: "O'rta" },
						{ id: '4', text: "Yo'riqnoma", category: 'Pastki' },
					],
				},
				{
					type: 'matching',
					title: 'Hujjat guruhlari',
					instructions: 'Hujjatlarni guruhlariga moslang.',
					data: [
						{ id: '1', left: 'Tashkiliy', right: 'Ustav, Nizom' },
						{ id: '2', left: 'Farmoyish', right: 'Buyruq, Farmon' },
						{ id: '3', left: 'Xodimlar', right: 'Ariza, Tarjimai hol' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Guvohnoma tavsifi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"Shaxsning kimligini tasdiqlovchi asosiy hujjat bu __BLANK1__ bo'lib, u __BLANK2__ organlari tomonidan beriladi.",
						blanks: [
							{ id: '1', answer: 'pasport' },
							{ id: '2', answer: 'ichki ishlar' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Arxiv ishi',
					instructions:
						'Siz arxiv mutaxassisiz. 5 yildan beri saqlanayotgan va muddati tugagan hujjatlarni nima qilasiz?',
					data: {
						situation: 'Hujjatlarning saqlash muddati 5 yil etib belgilangan.',
						question: "Muddati o'tgan hujjatlar bilan qanday yo'l tutiladi?",
						options: [
							{
								id: '1',
								text: "Ekspertiza komissiyasi xulosasi bilan yo'q qilinadi",
								isCorrect: true,
								feedback:
									"To'g'ri! Hujjatlarni yo'q qilish maxsus dalolatnoma bilan amalga oshiriladi.",
							},
							{
								id: '2',
								text: 'Shunchaki tashlab yuboriladi',
								isCorrect: false,
								feedback: "Xato! Bu arxiv qoidalariga zid.",

							},
						],
					},
				},
			],
		},
		{
			id: 3,
			activities: [
				{
					type: 'quiz',
					title: 'Axborot hujjatlari',
					instructions:
						"Quyidagilardan qaysi biri axborot-ma'lumot hujjatiga kirmaydi?",
					data: [
						{ id: '1', text: 'Buyruq', isCorrect: true },
						{ id: '2', text: "Ma'lumotnoma", isCorrect: false },
						{ id: '3', text: 'Tushuntirish xati', isCorrect: false },
						{ id: '4', text: 'Bayonnoma', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Bayonnoma qismlari',
					instructions: 'Bayonnomaning tarkibiy qismlarini joylashtiring.',
					data: [
						{ id: '1', text: 'Kun tartibi', category: 'Kirish' },
						{ id: '2', text: 'Eshitildi', category: 'Asosiy' },
						{ id: '3', text: 'Qaror qilindi', category: 'Yakuniy' },
					],
				},
				{
					type: 'matching',
					title: 'Xat turlari',
					instructions: 'Xatlarni maqsadi bilan moslang.',
					data: [
						{
							id: '1',
							left: 'Bildirishnoma',
							right: 'Raxbariyatga axborot berish',
						},
						{
							id: '2',
							left: 'Tushuntirish xati',
							right: 'Xato sababini bayon qilish',
						},
						{ id: '3', left: 'Dalolatnoma', right: 'Faktni tasdiqlash' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Hisobot bayoni',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							'__BLANK1__ - bu biror voqea yoki faktni bir necha kishi ishtirokida __BLANK2__ hujjatdir.',
						blanks: [
							{ id: '1', answer: 'Dalolatnoma' },
							{ id: '2', answer: 'tasdiqlovchi' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Majlis bayonnomasi',
					instructions:
						'Siz majlis kotibisiz. Majlisda muhim qarorlar qabul qilindi.',
					data: {
						situation: "Majlisda 25 kishi qatnashdi, 3 kishi so'zga chiqdi.",
						question: 'Bayonnomani kimlar imzolashi shart?',
						options: [
							{
								id: '1',
								text: 'Rais va kotib',
								isCorrect: true,
								feedback: "To'g'ri! Bayonnomani rais va kotib tasdiqlaydi.",

							},
							{
								id: '2',
								text: 'Barcha qatnashuvchilar',
								isCorrect: false,
								feedback: "Xato! Hammaning imzosi shart emas.",

							},
						],
					},
				},
			],
		},
		{
			id: 4,
			activities: [
				{
					type: 'quiz',
					title: 'Tashkiliy asoslar',
					instructions: 'Tashkilotning ichki ish tartibini belgilovchi hujjat?',
					data: [
						{
							id: '1',
							text: 'Ichki mehnat tartibi qoidalari',
							isCorrect: true,
						},
						{ id: '2', text: 'Xizmat xati', isCorrect: false },
						{ id: '3', text: "Ma'lumotnoma", isCorrect: false },
						{ id: '4', text: 'Ariza', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Ustav elementlari',
					instructions: 'Ustavning tarkibiy qismlarini saralang.',
					data: [
						{ id: '1', text: 'Umumiy qoidalar', category: 'Boshi' },
						{ id: '2', text: 'Ustav fondi', category: 'Iqtisodiy' },
						{ id: '3', text: 'Tugatish tartibi', category: 'Oxiri' },
					],
				},
				{
					type: 'matching',
					title: 'Hujjat vazifalari',
					instructions: 'Hujjatlarni vazifasiga moslang.',
					data: [
						{ id: '1', left: 'Nizom', right: 'Tarkibiy qism faoliyati' },
						{ id: '2', left: 'Ustav', right: 'Tashkilot huquqiy asosi' },
						{ id: '3', left: "Yo'riqnoma", right: 'Amal qilish tartibi' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Shtat jadvali',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							'__BLANK1__ jadvali tashkilotda necha kishi ishlashi va ularning __BLANK2__ miqdorini belgilaydi.',
						blanks: [
							{ id: '1', answer: 'Shtat' },
							{ id: '2', answer: 'maosh' },
						],
					},
				},
				{
					type: 'scenario',
					title: "Yangi bo'lim ochish",
					instructions: "Siz RH boshlig'isiz. Yangi bo'lim ochilmoqda.",
					data: {
						situation: "Kompaniyada 'Marketing' bo'limi tashkil etilmoqda.",
						question:
							"Ushbu bo'lim faoliyatini tartibga solish uchun qaysi hujjatni ishlab chiqasiz?",
						options: [
							{
								id: '1',
								text: "Bo'lim to'g'risidagi Nizom",
								isCorrect: true,
								feedback:
									"To'g'ri! Nizom bo'limning maqsad va vazifalarini belgilaydi.",
							},
							{
								id: '2',
								text: 'Soliq hisoboti',
								isCorrect: false,
								feedback: "Xato! Bu moliyaviy hujjat.",

							},
						],
					},
				},
			],
		},
		{
			id: 5,
			activities: [
				{
					type: 'quiz',
					title: 'Buyruq turlari',
					instructions: 'Yakka rahbarlik asosida chiqariladigan hujjat nomi?',
					data: [
						{ id: '1', text: 'Buyruq', isCorrect: true },
						{ id: '2', text: 'Qaror', isCorrect: false },
						{ id: '3', text: 'Farmoyish', isCorrect: false },
						{ id: '4', text: 'Bayonnoma', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Buyruq qismlari',
					instructions: "Buyruq matnidagi so'zlarni joylashtiring.",
					data: [
						{ id: '1', text: 'BUYURAMAN', category: 'Markazda' },
						{ id: '2', text: 'Asos', category: 'Pastda' },
						{ id: '3', text: 'Muvofiq', category: 'Matnda' },
					],
				},
				{
					type: 'matching',
					title: 'Rahbarlik hujjatlari',
					instructions: 'Kim qaysi hujjatni chiqarishini toping.',
					data: [
						{ id: '1', left: 'Prezident', right: 'Farmon, Qaror' },
						{ id: '2', left: 'Vazir', right: 'Buyruq' },
						{ id: '3', left: 'Hokim', right: 'Farmoyish' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Buyruq tasdiqlanishi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							'Buyruq rahbar tomonidan __BLANK1__ va tashkilotning __BLANK2__ bilan tasdiqlanadi.',
						blanks: [
							{ id: '1', answer: 'imzolanadi' },
							{ id: '2', answer: 'muhri' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Xodimni mukofotlash',
					instructions:
						"Direktor yordamchisisiz. Namunali xizmati uchun xodimni rag'batlantirish kerak.",
					data: {
						situation:
							"Injener Berdiyev rejaning 120% bajarilishini ta'minladi.",
						question: 'Qaysi turdagi buyruq loyihasini tayyorlaysiz?',
						options: [
							{
								id: '1',
								text: "Shaxsiy tarkib bo'yicha buyruq (Mukofotlash)",
								isCorrect: true,
								feedback:
									"To'g'ri! Bunday buyruqlar shaxsiy tarkib guruhiga kiradi.",
							},
							{
								id: '2',
								text: "Umumiy faoliyat bo'yicha buyruq",
								isCorrect: false,
								feedback:
									"Xato! Bu xodim bilan bog'liq shaxsiy buyruq bo'lishi kerak.",
							},
						],
					},
				},
			],
		},
		{
			id: 6,
			activities: [
				{
					type: 'quiz',
					title: 'Xizmat xati rekvizitlari',
					instructions:
						'Xizmat xatida javob berilayotgan xat uchun qaysi belgi ishlatiladi?',
					data: [
						{ id: '1', text: 'Sana va indeksga havola', isCorrect: true },
						{ id: '2', text: 'Faqat sana', isCorrect: false },
						{ id: '3', text: 'Faqat imzo', isCorrect: false },
						{ id: '4', text: 'Maxfiylik belgisi', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Xat turlari',
					instructions: "Xat turlarini tasnifiga ko'ra joylashtiring.",
					data: [
						{ id: '1', text: 'Kafolat xati', category: 'Moliyaviy' },
						{ id: '2', text: "Suro'v xati", category: 'Axborot qidirish' },
						{ id: '3', text: 'Reklamatsiya', category: "E'tiroz" },
					],
				},
				{
					type: 'matching',
					title: 'Xat rekvizitlari',
					instructions: 'Rekvizitlarni tushuntirish bilan moslang.',
					data: [
						{ id: '1', left: 'Adresat', right: 'Xat yuboriluvchi' },
						{ id: '2', left: 'Sarlavha', right: 'Xat matni mavzusi' },
						{ id: '3', left: 'Ilova', right: "Qo'shimcha hujjatlar" },
					],
				},
				{
					type: 'fill-blank',
					title: 'E-mail odobi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"Elektron xat yuborishda __BLANK1__ qatorini to'ldirish va xat oxirida __BLANK2__ bo'lishi shart.",
						blanks: [
							{ id: '1', answer: 'Mavzu' },
							{ id: '2', answer: 'imzo' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Hamkorlik taklifi',
					instructions:
						"Siz savdo bo'limi mudirisiz. Yangi hamkorga hamkorlik taklifini yuboring.",
					data: {
						situation:
							'Kompaniyangiz yangi turdagi xizmatlarni taklif qilmoqda.',
						question: 'Xat boshida qanday murojaat shaklidan foydalanasiz?',
						options: [
							{
								id: '1',
								text: 'Hurmatli (Ism sharif)!',
								isCorrect: true,
								feedback:
									"To'g'ri! Bu eng keng tarqalgan va xushmuomalalik shakli.",
							},
							{
								id: '2',
								text: 'Salom birodar!',
								isCorrect: false,
								feedback: "Xato! Rasmiy xatlarda bunday muloqot mumkin emas.",

							},
						],
					},
				},
			],
		},
		{
			id: 7,
			activities: [
				{
					type: 'quiz',
					title: "E'tiroz xati",
					instructions:
						"Yetkazib berilgan tovar sifati yomon bo'lsa qanday xat yoziladi?",
					data: [
						{ id: '1', text: "Reklamatsiya (E'tiroz) xati", isCorrect: true },
						{ id: '2', text: 'Tabriknoma', isCorrect: false },
						{ id: '3', text: 'Kafolat xati', isCorrect: false },
						{ id: '4', text: 'Eslatma', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Kafolat xati mazmuni',
					instructions: 'Kafolat xatidagi elementlarni tartiblang.',
					data: [
						{ id: '1', text: 'Hisob raqam', category: "Bank ma'lumotlari" },
						{ id: '2', text: "To'lov muddati", category: 'Majburiyat' },
						{ id: '3', text: 'Bosh buxgalter imzosi', category: 'Tasdiqlash' },
					],
				},
				{
					type: 'matching',
					title: 'Xatlar vazifasi',
					instructions: 'Xatlarni maqsadi bilan moslang.',
					data: [
						{
							id: '1',
							left: 'Tasdiq xati',
							right: 'Hujjat olinganligi haqida',
						},
						{ id: '2', left: 'Eslatma xati', right: 'Majburiyatni eslatish' },
						{ id: '3', left: 'Rad javobi', right: 'Taklifni qabul qilmaslik' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Xat imzosi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"Kafolat xatida tashkilot rahbaridan tashqari __BLANK1__ ham o'z __BLANK2__ ni qo'yishi shart.",
						blanks: [
							{ id: '1', answer: 'bosh buxgalter' },
							{ id: '2', answer: 'imzo' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Xatolarni tuzatish',
					instructions:
						'Siz Xatlar turlari xodimisiz. Hujjatda jiddiy xato aniqladingiz.',
					data: {
						situation: "Kafolat xatida tashkilot nomi noto'g'ri yozilgan.",
						question:
							"Xatni yuborib bo'lgandan so'ng xatoni ko'rsangiz nima qilasiz?",
						options: [
							{
								id: '1',
								text: 'Xatni qaytarib olib, yangisini yuboraman',
								isCorrect: true,
								feedback:
									"To'g'ri! Rasmiy hujjatlardagi xatolar zudlik bilan tuzatilishi shart.",
							},
							{
								id: '2',
								text: 'Xatoni yashirib, javob kutaman',
								isCorrect: false,
								feedback:
									'Xato! Bu tashkilot imidjiga yoki yuridik kuchiga zarar etkazadi.',
							},
						],
					},
				},
			],
		},
		{
			id: 8,
			activities: [
				{
					type: 'quiz',
					title: 'Nota turlari',
					instructions: 'Uchinchi shaxs nomidan yoziladigan diplomatik hujjat?',
					data: [
						{ id: '1', text: 'Verbal nota', isCorrect: true },
						{ id: '2', text: 'Shaxsiy nota', isCorrect: false },
						{ id: '3', text: 'Ultimatum', isCorrect: false },
						{ id: '4', text: 'Deklaratsiya', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Nota rekvizitlari',
					instructions: 'Nota rekvizitlarini joylashtiring.',
					data: [
						{ id: '1', text: 'Gerbli muhr', category: 'Pastda' },
						{ id: '2', text: 'Indeks', category: 'Yuqorida' },
						{ id: '3', text: 'Kompliment', category: 'Matn boshida/oxirida' },
					],
				},
				{
					type: 'matching',
					title: 'Diplomatik atamalar',
					instructions: 'Atamalarni tushunish.',
					data: [
						{ id: '1', left: 'Memorandum', right: 'Fakt va dalillar bayoni' },
						{ id: '2', left: 'Protokol', right: 'Kelishuv bayonnomasi' },
						{ id: '3', left: 'Konvensiya', right: 'Xalqaro shartnoma' },
					],
				},
				{
					type: 'fill-blank',
					title: 'Nota imzolanishi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"Verbal notada imzo o'rniga __BLANK1__ qo'yiladi va u __BLANK2__ bilan tasdiqlanadi.",
						blanks: [
							{ id: '1', answer: 'initsiallar' },
							{ id: '2', answer: 'muhr' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Elchixonada ish',
					instructions:
						'Siz TIV xodimisiz. Xorijiy elchixonaga tashrif haqida xabar berish kerak.',
					data: {
						situation: 'Vazirning xorijga tashrifi rejalashtirilmoqda.',
						question: 'Qaysi diplomatik hujjatdan foydalanasiz?',
						options: [
							{
								id: '1',
								text: 'Verbal nota',
								isCorrect: true,
								feedback:
									"To'g'ri! Kundalik diplomatik masalalarda Verbal nota ishlatiladi.",
							},
							{
								id: '2',
								text: 'Telegramma',
								isCorrect: false,
								feedback: "Xato! Rasmiy diplomatik aloqada nota muhimroq.",

							},
						],
					},
				},
			],
		},
		{
			id: 9,
			activities: [
				{
					type: 'quiz',
					title: 'Ishga qabul',
					instructions: 'Ishga kirishda yoziladigan birinchi hujjat?',
					data: [
						{ id: '1', text: 'Ariza', isCorrect: true },
						{ id: '2', text: 'Buyruq', isCorrect: false },
						{ id: '3', text: 'Shartnoma', isCorrect: false },
						{ id: '4', text: "Guvo'hnoma", isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'Tarjimai hol tartibi',
					instructions: "Tarjimai holdagi ma'lumotlarni tartiblang.",
					data: [
						{ id: '1', text: 'Ism-sharif', category: "1-o'rin" },
						{ id: '2', text: "Tug'ilgan joy", category: "2-o'rin" },
						{ id: '3', text: "Ma'lumoti", category: "3-o'rin" },
						{ id: '4', text: 'Oilaviy ahvoli', category: "4-o'rin" },
					],
				},
				{
					type: 'matching',
					title: 'Kadrlar hujjatlari',
					instructions: 'Hujjatlarni xossalari bilan moslang.',
					data: [
						{
							id: '1',
							left: 'Mehnat daftarchasi',
							right: 'Ish stajini tasdiqlaydi',
						},
						{ id: '2', left: 'T-2 kartochkasi', right: 'Xodim shaxsiy hisobi' },
						{
							id: '3',
							left: 'Mehnat shartnomasi',
							right: 'Huquq va majburiyatlar',
						},
					],
				},
				{
					type: 'fill-blank',
					title: 'Ariza rekvizitlari',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"Ariza varaqning o'ng __BLANK1__ qismida kimga yozilayotganligi va varaqning __BLANK2__ qismida sana qo'yiladi.",
						blanks: [
							{ id: '1', answer: 'yuqori' },
							{ id: '2', answer: 'pastki' },
						],
					},
				},
				{
					type: 'scenario',
					title: "Ta'tilga chiqish",
					instructions: "Siz xodimsiz. Sizga mehnat ta'tili kerak.",
					data: {
						situation: '6 oydan beri ishlayapsiz va dam olishni istaysiz.',
						question: 'Arizangizni kimga topshirasiz?',
						options: [
							{
								id: '1',
								text: "Kadrlar bo'limi yoki bevosita rahbarga",
								isCorrect: true,
								feedback: "To'g'ri! Ariza rahbar nomiga yoziladi.",

							},
							{
								id: '2',
								text: 'Buxgalteriyaga',
								isCorrect: false,
								feedback:
									'Xato! Buxgalteriya faqat hisob-kitob qiladi, ruxsat bermaydi.',
							},
						],
					},
				},
			],
		},
		{
			id: 10,
			activities: [
				{
					type: 'quiz',
					title: 'Raqamli imzo',
					instructions: 'Elektron hujjatning haqiqiyligini nima tasdiqlaydi?',
					data: [
						{ id: '1', text: 'Elektron raqamli imzo (ERI)', isCorrect: true },
						{ id: '2', text: 'Oddiy parol', isCorrect: false },
						{ id: '3', text: 'Skaner qilingan muhr', isCorrect: false },
						{ id: '4', text: 'Stiker', isCorrect: false },
					],
				},
				{
					type: 'drag-drop',
					title: 'E-hujjat aylanishi',
					instructions: 'E-hujjat bosqichlarini saralang.',
					data: [
						{ id: '1', text: 'Yaratish', category: '1-bosqich' },
						{ id: '2', text: 'Imzolash', category: '2-bosqich' },
						{ id: '3', text: 'Yuborish', category: '3-bosqich' },
						{ id: '4', text: 'Arxivlash', category: '4-bosqich' },
					],
				},
				{
					type: 'matching',
					title: 'Tizimlar muvofiqligi',
					instructions: 'Tizimlarni vazifasiga moslang.',
					data: [
						{ id: '1', left: 'E-Xat', right: 'Himoyalangan pochtasi' },
						{ id: '2', left: 'Ijro.gov.uz', right: 'Ijro intizomi nazorati' },
						{ id: '3', left: 'E-Imzo', right: 'Kalitlarni boshqarish' },
					],
				},
				{
					type: 'fill-blank',
					title: 'ERI xavfsizligi',
					instructions: "Bo'shliqlarni to'ldiring.",
					data: {
						sentence:
							"ERI kalitini boshqalarga __BLANK1__ qat'iyan man etiladi va u __BLANK2__ kuchga ega.",
						blanks: [
							{ id: '1', answer: 'berish' },
							{ id: '2', answer: 'huquqiy' },
						],
					},
				},
				{
					type: 'scenario',
					title: 'Elektron hujjatni imzolash',
					instructions:
						'Siz tashkilot rahbarisiz. Davlat xaridlariga doir shartnomani imzolash kerak.',
					data: {
						situation: "Kompyuteringizda E-imzo dasturi o'rnatilgan.",
						question: "Hujjatni qog'ozga chiqarib imzolash shartmi?",
						options: [
							{
								id: '1',
								text: "Yo'q, ERI bilan imzolash yetarli",
								isCorrect: true,
								feedback:
									"To'g'ri! ERI bilan imzolangan hujjat asl nusxa bilan teng kuchga ega.",
							},
							{
								id: '2',
								text: 'Ha, baribir muhr bosish kerak',
								isCorrect: false,
								feedback:
									"Xato! Zamonaviy qonunchilikda ERI muhrni o'rnini bosadi.",
							},
						],
					},
				},
			],
		},
	]

	const generateSeminarLabsForTopic = (topic: any) => {
		const activities: any[] = []
		const types = ['quiz', 'drag-drop', 'matching', 'fill-blank', 'scenario']

		// Mavzuga qarab maxsus ma'lumotlar
		const title = topic.titleUz.toLowerCase()
		const isAriza = title.includes('ariza')
		const isBayonnoma = title.includes('bayonnoma')
		const isImlo = title.includes('imlo') || title.includes('xato')
		const isE_Hujjat = title.includes('elektron')
		const isXodim = title.includes('xodim') || title.includes('ishga kirish')

		types.forEach((type, idx) => {
			let data: any = null
			switch (type) {
				case 'quiz':
					if (isAriza) {
						data = [
							{
								id: '1',
								text: 'Arizaning sarlavhasi (kimga) qaysi tomondan yoziladi?',
								isCorrect: false,
							},
							{
								id: '2',
								text: "Varaqning o'ng yuqori burchagidan",
								isCorrect: true,
							},
							{
								id: '3',
								text: 'Varaqning chap yuqori burchagidan',
								isCorrect: false,
							},
							{ id: '4', text: 'Markazdan', isCorrect: false },
						]
					} else if (isBayonnoma) {
						data = [
							{
								id: '1',
								text: 'Bayonnomaning doimiy rekvizitlariga nimalar kiradi?',
								isCorrect: true,
							},
							{ id: '2', text: 'Faqat xodimning imzosi', isCorrect: false },
							{ id: '3', text: 'Maxfiylik belgisi', isCorrect: false },
							{ id: '4', text: 'Bank hisob raqami', isCorrect: false },
						]
					} else {
						data = [
							{
								id: '1',
								text: `Amaliy jarayonda ${topic.titleUz.substring(0, 30)}... talabi nima?`,
								isCorrect: true,
							},
							{ id: '2', text: "Faqat og'zaki tushuntirish", isCorrect: false },
							{ id: '3', text: 'Eski namunadan foydalanish', isCorrect: false },
							{ id: '4', text: 'Xato uslubiy yondashuv', isCorrect: false },
						]
					}
					break
				case 'drag-drop':
					if (isImlo) {
						data = [
							{ id: '1', text: 'Mutahasiz', category: 'Imlo xatosi' },
							{ id: '2', text: 'Mutaxassis', category: "To'g'ri shakl" },
							{ id: '3', text: 'Tayorlash', category: 'Imlo xatosi' },
							{ id: '4', text: 'Tayyorlash', category: "To'g'ri shakl" },
						]
					} else {
						data = [
							{ id: '1', text: 'Hujjat sarlavhasi', category: 'Yuqori' },
							{ id: '2', text: 'Asosiy mazmun', category: "O'rta" },
							{ id: '3', text: 'Sana va imzo', category: 'Pastki' },
						]
					}
					break
				case 'matching':
					if (isXodim) {
						data = [
							{ id: '1', left: 'Ishga kirish', right: 'Ariza' },
							{ id: '2', left: 'Intizomiy jazo', right: 'Tushuntirish xati' },
							{ id: '3', left: "Ishdan bo'shash", right: 'Buyruq' },
						]
					} else {
						data = [
							{
								id: '1',
								left: 'Hujjat nomi',
								right: topic.titleUz.split(' ')[0],
							},
							{ id: '2', left: 'Vazifasi', right: 'Seminar amaliyoti' },
							{ id: '3', left: 'Darajasi', right: 'Professional' },
						]
					}
					break
				case 'fill-blank':
					data = {
						sentence: `${topic.titleUz.substring(0, 40)}... jarayonida __BLANK1__ rioya etish professional darajada __BLANK2__ talab etadi.`,
						blanks: [
							{ id: '1', answer: 'standartlarga' },
							{ id: '2', answer: 'bilim' },
						],
					}
					break
				case 'scenario':
					let question =
						"Ushbu vaziyatda professional xodim sifatida qanday yo'l tutasiz?"
					let options = [
						{
							id: '1',
							text: 'Qonunchilikka binoan namunaviy shakldan foydalanaman',
							isCorrect: true,
								feedback: "Barakalla! Bu eng to'g'ri yondashuv.",

						},
						{
							id: '2',
							text: "O'zim bilganimcha erkin uslubda yozaman",
							isCorrect: false,
								feedback: "Xato! Rasmiy hujjatlarda erkinlik cheklangan.",
						},
					]

					if (isE_Hujjat) {
						question =
							'Elektron hujjatni imzolashda qaysi vositadan foydalanasiz?'
						options = [
							{
								id: '1',
								text: 'Elektron raqamli imzo (ERI)',
								isCorrect: true,
								feedback: "To'g'ri! Faqat ERI huquqiy kuchga ega.",

							},
							{
								id: '2',
								text: 'Skaner qilingan imzo surati',
								isCorrect: false,
								feedback: "Noto'g'ri! Bunday imzo qonuniy kuchga ega emas.",

							},
						]
					}

					data = {
						situation: `Siz ${topic.titleUz} bo'yicha seminar ishtirokchisiz va sizga topshiriq berildi.`,
						question: question,
						options: options,
					}
					break
			}

			activities.push({
				type: type,
				title: `Seminar: ${topic.titleUz.substring(0, 30)}...`,
				instructions: `Seminar mashg'ulotini amalda mustahkamlang: ${topic.titleUz}`,
				data: data,
			})
		})
		return activities
	}

	maruzaData.forEach(m => {
		m.activities.forEach((activity, idx) => {
			labs.push({
				id: `maruza-${m.id}-${idx + 1}`,
				topicId: m.id,
				type: activity.type,
				title: { uz: activity.title, ru: activity.title, en: activity.title },
				instructions: {
					uz: activity.instructions,
					ru: activity.instructions,
					en: activity.instructions,
				},
				data: activity.data,
			})
		})
	})

	seminarTopics.forEach(s => {
		const seminarActivities = generateSeminarLabsForTopic(s)
		seminarActivities.forEach((activity, idx) => {
			labs.push({
				id: `seminar-${s.id}-${idx + 1}`,
				topicId: s.id + 100,
				type: activity.type,
				title: { uz: activity.title, ru: activity.title, en: activity.title },
				instructions: {
					uz: activity.instructions,
					ru: activity.instructions,
					en: activity.instructions,
				},
				data: activity.data,
			})
		})
	})

	return labs
}

export const virtualLabActivities = generateDetailedLabs()
