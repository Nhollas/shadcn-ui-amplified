import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shadcn UI Amplified",
  description: "This is a cool description",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto mb-16 max-w-screen-sm p-4 sm:mb-[72px] sm:p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
