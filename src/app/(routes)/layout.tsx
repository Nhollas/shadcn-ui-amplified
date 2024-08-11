import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Shadcn UI Calendar V9 Migration",
  description: "This is a cool description",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="mx-auto mb-16 flex max-w-screen-md flex-row gap-x-8 p-4 sm:p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
