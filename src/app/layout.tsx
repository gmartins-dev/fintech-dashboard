import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import { ThemeProvider } from '@/components/ThemeProvider'
import { GlobalErrorBoundary } from '@/components/GlobalErrorBoundary';

export const metadata: Metadata = {
  title: "Fintech Dashboard",
  description: "A modern financial portfolio dashboard",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let theme = localStorage.getItem("theme")
              if (!theme) {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                  theme = "dark"
                } else {
                  theme = "light"
                }
              }
              document.documentElement.classList.toggle("dark", theme === "dark")
            `,
          }}
        />
      </head>
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
