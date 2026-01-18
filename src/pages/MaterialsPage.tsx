import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/contexts/LanguageContext'
import {
	MaterialTopic,
	maruzaMaterials,
	seminarMaterials,
} from '@/data/materials'
import { Download, Eye, FileText, Presentation } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const MaterialsPage: React.FC = () => {
	const { t } = useLanguage()
	const [searchParams] = useSearchParams()
	const tabParam = searchParams.get('tab') || 'maruza'
	const topicParam = searchParams.get('topic')

	const [activeTab, setActiveTab] = useState(tabParam)
	const [previewFile, setPreviewFile] = useState<{
		url: string
		title: string
		downloadUrl: string
	} | null>(null)

	useEffect(() => {
		if (tabParam) {
			setActiveTab(tabParam)
		}
	}, [tabParam])

	useEffect(() => {
		if (topicParam) {
			const element = document.getElementById(`topic-${tabParam}-${topicParam}`)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [topicParam, tabParam])

	const handlePreview = (topic: MaterialTopic, type: 'docx' | 'ppt') => {
		const pdfUrl = type === 'docx' ? topic.docxPath : topic.pptPath
		const typeLabel =
			type === 'docx' ? t('materials.view') : t('materials.presentationType')

		setPreviewFile({
			url: pdfUrl,
			title: `${topic.title} - ${typeLabel}`,
			downloadUrl: pdfUrl,
		})
	}

	const renderMaterialCard = (topic: MaterialTopic) => (
		<Card
			id={`topic-${topic.type}-${topic.id}`}
			key={`${topic.type}-${topic.id}`}
			className='hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary'
		>
			<CardHeader>
				<CardTitle className='flex items-center gap-3 text-lg'>
					<span className='bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0'>
						{topic.id}
					</span>
					{topic.title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex flex-wrap gap-4'>
					<div className='flex items-center gap-3 bg-muted/30 p-4 rounded-xl border flex-1 min-w-[250px]'>
						<div className='bg-blue-100 p-3 rounded-lg text-blue-600'>
							<FileText className='h-6 w-6' />
						</div>
						<div className='flex flex-col flex-1'>
							<span className='text-sm font-semibold'>
								{t('materials.textType')}
							</span>
							<div className='flex gap-2 mt-2'>
								<Button
									variant='outline'
									size='sm'
									onClick={() => handlePreview(topic, 'docx')}
									className='h-8'
								>
									<Eye className='mr-2 h-4 w-4' /> {t('materials.view')}
								</Button>
								<Button variant='secondary' size='sm' asChild className='h-8'>
									<a href={topic.docxPath} download>
										<Download className='mr-2 h-4 w-4' />{' '}
										{t('materials.download')}
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className='flex items-center gap-3 bg-muted/30 p-4 rounded-xl border flex-1 min-w-[250px]'>
						<div className='bg-orange-100 p-3 rounded-lg text-orange-600'>
							<Presentation className='h-6 w-6' />
						</div>
						<div className='flex flex-col flex-1'>
							<span className='text-sm font-semibold'>
								{t('materials.presentationType')}
							</span>
							<div className='flex gap-2 mt-2'>
								<Button
									variant='outline'
									size='sm'
									onClick={() => handlePreview(topic, 'ppt')}
									className='h-8'
								>
									<Eye className='mr-2 h-4 w-4' /> {t('materials.view')}
								</Button>
								<Button variant='secondary' size='sm' asChild className='h-8'>
									<a href={topic.pptPath} download>
										<Download className='mr-2 h-4 w-4' />{' '}
										{t('materials.download')}
									</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)

	return (
		<div className='edu-section edu-container'>
			<div className='text-center mb-12 animate-fade-in'>
				<h1 className='text-4xl font-extrabold tracking-tight text-foreground'>
					{t('materials.title')}
				</h1>
				<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
					{t('materials.subtitle')}
				</p>
			</div>

			<Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
				<TabsList className='grid w-full max-w-md mx-auto grid-cols-2 mb-8'>
					<TabsTrigger value='maruza'>{t('materials.lectures')}</TabsTrigger>
					<TabsTrigger value='seminar'>{t('materials.practical')}</TabsTrigger>
				</TabsList>

				<TabsContent value='maruza' className='space-y-6'>
					<div className='grid gap-6'>
						{maruzaMaterials.map(renderMaterialCard)}
					</div>
				</TabsContent>

				<TabsContent value='seminar' className='space-y-6'>
					<div className='grid gap-6'>
						{seminarMaterials.map(renderMaterialCard)}
					</div>
				</TabsContent>
			</Tabs>

			<Dialog
				open={!!previewFile}
				onOpenChange={open => !open && setPreviewFile(null)}
			>
				<DialogContent className='max-w-5xl h-[90vh] flex flex-col'>
					<DialogHeader>
						<DialogTitle>{previewFile?.title}</DialogTitle>
						<DialogDescription>{t('materials.previewDesc')}</DialogDescription>
					</DialogHeader>
					<div className='flex-1 min-h-0 bg-muted rounded-lg overflow-hidden'>
						{previewFile && (
							<iframe
								src={previewFile.url}
								className='w-full h-full border-none'
								title='PDF Preview'
							/>
						)}
					</div>
					<div className='flex justify-end gap-2 mt-4'>
						<Button variant='outline' onClick={() => setPreviewFile(null)}>
							{t('common.close')}
						</Button>
						<Button asChild>
							<a href={previewFile?.downloadUrl} download>
								<Download className='mr-2 h-4 w-4' /> {t('materials.download')}
							</a>
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}
