"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-col min-h-full max-w-[1200px]">
               <Header />
               <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
                    <div className="w-full">
                         {children}
                    </div>
                    <div className="hidden sm:block w-[380px]">
                         <div className="top-10 sticky space-y-[20px]">
                              <div className=" bg-black bg-opacity-[3%] dark:bg-white dark:bg-opacity-[3%] w-full px-5 py-4 space-y-5">
                                   <div className="space-y-2">
                                        <p>
                                             خبرنامه آموزشی
                                        </p>
                                        <p className="text-[12px] text-[#3e3e3e] dark:text-[#cbcbcb] leading-[24px]">
                                             با عضویت در این خبرنامه از جدیدترین پست ها با خبر میشی و هیچ چیزی رو از دست نمیدی!
                                        </p>
                                   </div>
                                   <div className="space-y-2">
                                        <Input className="bg-transparent rounded-lg dark:border-1 dark:border-white dark:border-opacity-5 focus:border-2 focus:border-opacity-10" placeholder="ایمیل مبارکت رو وارد کن ..." />
                                        <Button className="w-full rounded-lg" variant="outline">
                                             می خوام عضو بشم
                                        </Button>
                                        <p className="text-[12px] text-[#3e3e3e] dark:text-[#cbcbcb]">
                                             قول میدم اذیتت نکنم!
                                        </p>
                                   </div>
                              </div>
                              <div className=" bg-black bg-opacity-[3%] dark:bg-white dark:bg-opacity-[3%] w-full px-6 py-6 space-y-5">
                                   <div className="space-y-5">
                                        <p className="text-[18px] text-[#3e3e3e] dark:text-[#cbcbcb] leading-[40px]">
                                             با عضویت در این خبرنامه از جدیدترین پست ها با خبر میشی و هیچ چیزی رو از دست نمیدی!
                                        </p>
                                        <p className="text-sm">
                                             استیو جابز
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="h-[50px]" />
               <Footer />
          </div>
     )
}