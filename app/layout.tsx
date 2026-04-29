import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deer Designer Family Law | Durham, Raleigh, Cary NC',
  description: 'Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle, and Throughout North Carolina. Led by Board Certified Specialists in Family Law.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
