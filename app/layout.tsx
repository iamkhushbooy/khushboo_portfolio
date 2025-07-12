import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Khushboo Yadav - Full Stack Developer",
  description:
    "Portfolio of Khushboo Yadav - Full Stack Developer specializing in React, Next.js, Node.js and modern web technologies",
  keywords: ["Khushboo Yadav", "Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Khushboo Yadav" }],
  creator: "Khushboo Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khushboo-portfolio.vercel.app",
    title: "Khushboo Yadav - Full Stack Developer",
    description: "Portfolio of Khushboo Yadav - Full Stack Developer specializing in modern web technologies",
    siteName: "Khushboo Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushboo Yadav - Full Stack Developer",
    description: "Portfolio of Khushboo Yadav - Full Stack Developer specializing in modern web technologies",
    creator: "@khushboo",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-gray-950 text-white antialiased`}>
       <div className="overflow-hidden">
         {children}
       </div>
      </body>
    </html>
  )
}
