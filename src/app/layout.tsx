import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Flexnode Solutions',
    default: 'Flexnode Solutions - We build and scale products that matter',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-sky-900 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
