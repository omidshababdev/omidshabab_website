"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Spacer } from "@nextui-org/spacer"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Home({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const home = useTranslations("home");

     return (
          <main className="flex flex-col w-full items-center">
               <div className="w-full min-w-max md:px-20">
                    <Header />
               </div>
               <div className="flex flex-col sm:flex-row w-full">
                    <div className="flex flex-col h-auto w-full py-[50px] md:px-20 md:py-30 justify-center items-center text-start">
                         <h2 className="w-full items-center text-[50px] font-bold leading-[80px] md:text-[80px] sm:leading-[120px] px-5 sm:px-0">
                              سلام 👋 من <br /> امید شباب هستم!
                         </h2>
                         <Spacer y={5} />
                         <p className="text-2xl font-medium leading-[50px] text-slate-600 px-5 sm:px-0">
                              {home("title")}
                         </p>
                         <Spacer y={10} />
                         <div className="w-full flex gap gap-x-5 px-5 sm:px-0">
                              <Button variant="outline" className="rounded-none text-[15px] font-bold" size="lg">تماس با من</Button>
                              <Button variant="secondary" className="rounded-none text-[15px] font-bold" size="lg">کپی کردن ایمیل</Button>
                         </div>
                    </div>

                    <div className="bg-black bg-opacity-[5%] container w-full h-[500px] lg:h-screen relative">
                         <Image
                              src="/omidshabab-image-2.jpg"
                              fill
                              style={{
                                   objectFit: 'cover',
                              }}
                              alt="Omid Shabab"
                         />
                    </div>
               </div>
               <div className="w-full min-w-max md:px-20">
                    <Footer />
               </div>
          </main>
     )
}
