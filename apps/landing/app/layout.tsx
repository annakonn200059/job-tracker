import { Geist_Mono, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@workspace/ui/lib/utils"

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Job Tracker - Track your job search smarter",
  description:
    "Organize, prepare, and land offers faster with Job Tracker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        nunitoSans.variable,
        geistMonoHeading.variable
      )}
    >
      <body className="bg-white">{children}</body>
    </html>
  )
}
