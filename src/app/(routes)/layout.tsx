import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shadcn UI Amplified",
  description: "This is a cool description",
}

export default async function RootLayout({
  v9,
  v8,
}: {
  v9: React.ReactNode
  v8: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto mb-16 flex max-w-screen-md flex-row gap-x-8 p-4 sm:mb-[72px] sm:p-6">
          {v9}
          {v8}
        </main>
      </body>
    </html>
  )
}
