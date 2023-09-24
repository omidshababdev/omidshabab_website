"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"


export default function Home({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const router = useRouter()

     return (
          <main className="flex flex-col items-center h-screen max-w-[800px]">
               <div className="flex flex-1 w-full gap-[20px] py-[30px] justify-between items-center">
                    <div className="flex gap-[30px] h-full items-center">
                         <div
                              onClick={() => router.push("/")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer font-bold text-[18px]"
                         >
                              امید شباب
                         </div>
                         <div className="flex gap-[20px] font-semibold text-[14px]">
                              <div
                                   onClick={() => router.push("/")}
                                   className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                              >
                                   صفحه اصلی
                              </div>
                              <div
                                   onClick={() => router.push("/blog")}
                                   className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                              >
                                   وبلاگ
                              </div>
                         </div>
                    </div>

                    <div className="flex">
                         <Button className="rounded-lg font-semibold" variant="outline">
                              دانلود رایگان ایبوک
                         </Button>
                    </div>
               </div>
               <div className="flex h-full items-center text-[50px] leading-[80px] font-light">
                    سلام 👋 من امید هستم. توسعه دهنده فول استک با چند سال تجربه و عاشق طراحی سایت و اپ ها. متمرکزم روی ری اکت (نکست).
               </div>
               <div className="flex flex-1 w-full gap-[20px] py-[30px] justify-between items-center font-semibold text-[14px]">
                    <div className="flex">
                         ۱۴۰۲ - تمامی حقوق این سایت برای امید شباب محفوظ است.
                    </div>
                    <div className="flex gap-[20px] h-full items-center">
                         <div
                              onClick={() => null}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                         >
                              حریم خصوصی
                         </div>
                         <div
                              onClick={() => null}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                         >
                              شرایط و ضوابط
                         </div>
                         <DropdownMenu>
                              <DropdownMenuTrigger>
                                   <Button className="rounded-lg font-semibold" variant="outline">
                                        انتخاب زبان
                                   </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="rounded-lg text-center">
                                   <DropdownMenuItem>فارسی</DropdownMenuItem>
                                   <DropdownMenuItem>انگلیسی</DropdownMenuItem>
                              </DropdownMenuContent>
                         </DropdownMenu>
                         <ModeToggle />
                    </div>
               </div>
          </main>
     )
}
