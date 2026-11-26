import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wavira — AI engineering, research, and real-world products.',
  description: 'Wavira researches, engineers, evaluates, and builds intelligent systems and proprietary AI technology for real-world problems.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
