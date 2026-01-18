import { Layout } from '@/components/layout/Layout'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AboutPage } from '@/pages/AboutPage'
import { AuthorPage } from '@/pages/AuthorPage'
import { HomePage } from '@/pages/HomePage'
import { MaterialsPage } from '@/pages/MaterialsPage'
import { ReferencesPage } from '@/pages/ReferencesPage'
import { TopicsPage } from '@/pages/TopicsPage'
import { VirtualLabPage } from '@/pages/VirtualLabPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const queryClient = new QueryClient()

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider>
			<LanguageProvider>
				<TooltipProvider>
					<Toaster />
					<Sonner />
					<BrowserRouter>
						<Layout>
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/about' element={<AboutPage />} />
								<Route path='/topics' element={<TopicsPage />} />
								<Route path='/lab' element={<VirtualLabPage />} />
								<Route path='/materials' element={<MaterialsPage />} />
								<Route path='/references' element={<ReferencesPage />} />
								<Route path='/author' element={<AuthorPage />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</Layout>
					</BrowserRouter>
				</TooltipProvider>
			</LanguageProvider>
		</ThemeProvider>
	</QueryClientProvider>
)

export default App
