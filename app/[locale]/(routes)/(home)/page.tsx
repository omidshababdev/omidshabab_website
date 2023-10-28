"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export default function Home({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const home = useTranslations("home");

     return (
          <main className="flex flex-col items-center h-screen max-w-[800px]">
               <Header />
               <div className="flex flex-col justify-center items-center h-full text-center">
                    <div className="w-[120px] h-[120px] bg-black bg-opacity-[5%] rounded-full">

                    </div>
                    <h2 className="items-center text-[30px] leading-[60px] md:text-[40px] sm:leading-[80px] font-light px-5 sm:px-0">
                         {home("title")}
                    </h2>
               </div>
               <Footer />
          </main>
     )
}
