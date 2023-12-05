import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/context'
import ReduxProvider from '@/store/provider'


export const metadata: Metadata = {
  title: 'Language App',
  description: 'Translate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='w-screen h-screen bg-white flex flex-col'>
        <ReduxProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
