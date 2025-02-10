import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import { ThemeProvider } from '@/components/ThemeProvider'
import { GlobalErrorBoundary } from '@/components/GlobalErrorBoundary';

export const metadata: Metadata = {
  title: "My Wallet",
  description: "A modern financial portfolio dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalErrorBoundary>
            {children}
          </GlobalErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
