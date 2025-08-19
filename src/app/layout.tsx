import { type Metadata } from 'next'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Flexnode Solutions',
    default: 'Flexnode Solutions - We build and scale products that matter',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const gaId = 'G-FN7FNMGXNM'

  return (
    <html lang="en" className="h-full bg-sky-900 text-base antialiased">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
