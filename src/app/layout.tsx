import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Inconsolata, Poppins } from "next/font/google";

// Font imports
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true
});

const poppins = Poppins({
  subsets: ['latin-ext'],
  variable: '--font-poppins',
  preload: true,
  weight: '400'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  preload: true
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  preload: true
})


export const metadata: Metadata = {
  title: "Hii! I'm Mitesh 👋",
  description: 'The portfolio website of Mitesh Sharma, who is a Full Stack Developer specialising in Javascript and Typescript based backend technologies.',
  authors: {
    url: "miteshryp@gmail.com",
    name: "Mitesh Sharma"
  },
  creator: "Mitesh Sharma",
  icons: "/assets/graphics/M Vector.svg",

  keywords: ["Developer", "Full Stack", "Backend", "Web Developer", "Javascript", "Typescript", "Technical Writer"],
  appleWebApp: {
    capable: true,
    title: "Hii! I'm Mitesh 👋",
    startupImage: "/assets/graphics/M Vector.svg",
    statusBarStyle: 'black'
  },
  category: "Developer Portfolio",
  classification: "Full Stack Developer",
  themeColor: "dark"
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${poppins.variable} ${inconsolata.variable}`}>{children}</body>
    </html>
  )
}
