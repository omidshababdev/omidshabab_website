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
          <main className="flex flex-col items-center h-screen max-w-[800px]">
               <Header />
               <div className="flex flex-col justify-center items-center h-full text-center">
                    <div className="w-[120px] h-[120px] bg-black bg-opacity-[5%] rounded-full">
                         <Image src="/omidshabab.jpg" width={120} height={120} alt="My Image" className="rounded-full" />
                    </div>
                    <Spacer y={5} />
                    <h2 className="items-center text-[30px] leading-[60px] md:text-[40px] sm:leading-[80px] font-light px-5 sm:px-0">
                         {home("title")}
                    </h2>
                    <Spacer y={10} />
                    <div className="flex gap gap-x-5">
                         <Button variant="outline" size="lg" className="rounded-xl text-[15px]">تماس با من</Button>
                         <Button variant="secondary" size="lg" className="rounded-xl text-[15px]">کپی کردن ایمیل</Button>
                    </div>
               </div>
               <Footer />
          </main>
     )
}
