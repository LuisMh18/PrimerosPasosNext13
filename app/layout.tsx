import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nabvar } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luis Mh',
  description: 'Probando next en su versión 13',
}

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Nabvar />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
