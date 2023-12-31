import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'Math Monster',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen'>
        <Header/>
        {children}</body>
    </html>
  )
}
