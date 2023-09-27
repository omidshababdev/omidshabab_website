"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

import { Sacramento } from "next/font/google"

const font = Sacramento({ subsets: ['latin'], weight: '400' })

export default function Home({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const home = useTranslations("home");

     return (
          <main className="flex flex-col items-center h-screen max-w-[800px]">
               <Header />
               <div className={cn(
                    "flex h-full items-center text-[30px] leading-[60px] md:text-[50px] sm:leading-[80px] font-light px-5 sm:px-0",
                    locale === "en" && font.className
               )}>
                    {home("title")}
               </div>
               <Footer />
          </main>
     )
}
