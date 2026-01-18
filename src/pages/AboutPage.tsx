import React from 'react';
import { Target, Award, Briefcase, CheckCircle2, BookOpen, Users, Building2, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  const goals = [
    {
      uz: "O'zbekiston Respublikasining \"Davlat tili haqida\"gi Qonuni talablarini o'rganish",
      ru: "Изучение требований Закона Республики Узбекистан «О государственном языке»",
      en: "Studying the requirements of the Law of the Republic of Uzbekistan \"On the State Language\""
    },
    {
      uz: "Rasmiy ish yuritish hujjatlarini to'g'ri va savodli tuzish ko'nikmalarini shakllantirish",
      ru: "Формирование навыков правильного и грамотного составления официальных документов",
      en: "Developing skills in correct and literate drafting of official documents"
    },
    {
      uz: "Lotin yozuviga asoslangan o'zbek alifbosi va imlo qoidalarini amaliyotga tatbiq etish",
      ru: "Применение на практике узбекского алфавита на основе латиницы и правил правописания",
      en: "Applying the Uzbek alphabet based on Latin script and spelling rules in practice"
    },
    {
      uz: "Davlat tashkilotlarida hujjatlar bilan ishlash tizimini (ijro intizomi) o'rganish",
      ru: "Изучение системы работы с документами в государственных организациях (исполнительская дисциплина)",
      en: "Studying the system of working with documents in state organizations (executive discipline)"
    },
  ];

  const outcomes = [
    {
      uz: "Davlat tilida turli xil rasmiy hujjatlar loyihalarini tayyorlash",
      ru: "Подготовка проектов различных официальных документов на государственном языке",
      en: "Preparing drafts of various official documents in the state language"
    },
    {
      uz: "Hujjatlarni davlat standartlariga (GOST) muvofiq rasmiylashtirish",
      ru: "Оформление документов в соответствии с государственными стандартами (ГОСТ)",
      en: "Formatting documents in accordance with state standards (GOST)"
    },
    {
      uz: "Rasmiy-idoraviy uslubning o'ziga xos xususiyatlarini farqlash",
      ru: "Различение специфических особенностей официально-делового стиля",
      en: "Distinguishing the specific features of the official-business style"
    },
    {
      uz: "Nutq madaniyati va davlat tilida muloqot qilish odobini egallash",
      ru: "Овладение культурой речи и этикой общения на государственном языке",
      en: "Mastering speech culture and communication ethics in the state language"
    },
    {
      uz: "E-hujjat va zamonaviy elektron ish yuritish dasturlari bilan ishlash",
      ru: "Работа с электронными документами и современными программами делопроизводства",
      en: "Working with e-documents and modern office management software"
    },
  ];

  const applicationFields = [
    { icon: Building2, uz: "Vazirlik va idoralar", ru: "Министерства и ведомства", en: "Ministries and agencies" },
    { icon: Scale, uz: "Adliya va sud organlari", ru: "Органы юстиции и суда", en: "Justice and court bodies" },
    { icon: Briefcase, uz: "Kadrlar xizmati (HR)", ru: "Кадровая служба (HR)", en: "Human Resources (HR)" },
    { icon: BookOpen, uz: "Ta'lim va ilm-fan", ru: "Образование и наука", en: "Education and science" },
  ];

  const getFieldText = (field: { uz: string; ru: string; en: string }) => {
    switch (language) {
      case 'ru': return field.ru;
      case 'en': return field.en;
      default: return field.uz;
    }
  };

  return (
    <div className="edu-section">
      <div className="edu-container">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.goals.desc')}
          </p>
        </div>

        {/* Goals Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">{t('about.goals.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {goals.map((goal, index) => (
              <div key={index} className="edu-card p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-foreground font-medium">{getFieldText(goal)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">{t('about.outcomes.title')}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-background border border-border shadow-sm rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500" />
                <span className="text-4xl font-bold text-primary/10 absolute top-4 right-6 leading-none">0{index + 1}</span>
                <p className="text-foreground relative z-10">{getFieldText(outcome)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Fields */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl edu-gradient-bg text-white">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">{t('about.application.title')}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applicationFields.map((field, index) => (
              <div key={index} className="edu-card p-6 text-center group hover:bg-primary hover:text-white transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-white group-hover:text-primary mb-4 transition-colors">
                  <field.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-base leading-tight">
                  {getFieldText(field)}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
