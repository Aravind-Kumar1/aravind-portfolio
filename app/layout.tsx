import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import ContactPreview from "@/components/sections/contact-preview"
// import ScrollToTop from "@/components/layout/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
    title: {
        default: "Aravind Chamaakuri - Senior Frontend Developer & UI Engineer",
        template: "%s | Aravind Chamaakuri",
    },
    description: "Portfolio of Aravind Chamaakuri, a Senior Frontend Developer specializing in React.js, Next.js, TypeScript, and high-performance, responsive web design. Explore interactive web applications, creative UI designs, and digital solutions engineered for growth and engagement.",
    keywords: [
        "Aravind",
        "Aravind Chamaakuri",
        "Aravind Kumar",
        "Chamaakuri Aravind Kumar",
        "Aravind Developer",
        "Aravind Portfolio",
        "Aravind Website",
        "Frontend Developer Portfolio",
        "React.js Developer",
        "TypeScript Engineer",
        "Next.js Portfolio",
        "Web Developer Portfolio",
        "UI/UX Design",
        "Responsive Web Design",
        "High Performance Web Applications",
        "Senior Web Engineer"
    ],
    authors: [{ name: "Aravind Chamaakuri", url: "https://aravindchamaakuri.com" }],
    creator: "Aravind Chamaakuri",
    metadataBase: new URL("https://aravindchamaakuri.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://aravindchamaakuri.com",
        title: "Aravind Chamaakuri - Senior Frontend Developer & UI Engineer",
        description: "Portfolio of Aravind Chamaakuri. Discover modern, responsive, and performance-optimized digital solutions crafted with React.js, Next.js, and TypeScript.",
        siteName: "Aravind Chamaakuri Portfolio",
        images: [
            {
                url: "/hero-cir.png",
                width: 512,
                height: 512,
                alt: "Aravind Chamaakuri - Senior Frontend Developer Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aravind Chamaakuri - Senior Frontend Developer & UI Engineer",
        description: "Portfolio of Aravind Chamaakuri. Custom web development, modern frontend designs, React.js, Next.js, and TypeScript.",
        images: ["/hero-cir.png"],
    },
    icons: [
        {
            url: "/hero-cir.png",
            rel: "icon",
            sizes: "452x45",
        },
        {
            url: "/hero-cir.png",
            rel: "icon",
            sizes: "64x64",
        },
        {
            url: "/hero-cir.png",
            rel: "icon",
            sizes: "128x128",
        },
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
      {/*<ScrollToTop />*/}
      <Navbar />
      {children}
      <ContactPreview />
      </body>
      </html>
  )
}