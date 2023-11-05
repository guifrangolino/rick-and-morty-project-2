import type { Metadata } from 'next'
import { Poppins, Shadows_Into_Light_Two } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins' })
const shadowsIntoLight = Shadows_Into_Light_Two({ subsets: ['latin'], weight: '400', variable: '--font-shadow-into-light' })

export const metadata: Metadata = {
  title: 'Rick And Morty Project',
  other: {
    google: "notranslate"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${shadowsIntoLight.variable} font-sans`}>
        <Header />
        <ReactQueryClientProvider>
          {children}
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
