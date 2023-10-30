import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
     Sheet,
     SheetClose,
     SheetContent,
     SheetDescription,
     SheetFooter,
     SheetHeader,
     SheetTitle,
     SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

export default function Header() {
     const router = useRouter();
     const general = useTranslations("general");
     const header = useTranslations("header");

     return (
          <div className="flex w-full top-0 gap-[20px] py-[20px] sm:py-[30px] justify-between items-center px-5 sm:px-0 border-b">
               <div className="flex gap-[20px] sm:gap-[30px] h-full items-center">
                    <div
                         className="text-[18px] gap-[10px] sm:flex flex-1 items-center justify-center"
                    >
                         <a
                              className="hover:text-black hover:text-opacity-[50%] font-bold text-2xl dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                              onClick={() => router.push("/")}
                         >
                              {general("omid_shabab")}
                         </a>

                         {/* <span className="hidden lg:block text-[12px] px-3 py-1 bg-black bg-opacity-5 rounded-full">توسعه نرم افزار</span> */}
                    </div>
                    <div className="hidden sm:flex gap-[25px] text-[16px] font-medium">

                         <div
                              onClick={() => router.push("/courses")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              دوره آموزشی
                         </div>
                         <div
                              onClick={() => router.push("/portfolios")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              نمونه کار
                         </div>
                         <div
                              onClick={() => router.push("/blog")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              {general("blog")}
                         </div>
                         <div
                              onClick={() => router.push("/ebooks")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              ایبوک
                         </div>

                         <div
                              onClick={() => router.push("/about")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              درباره من
                         </div>
                         <div
                              onClick={() => router.push("/contact")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              تماس با من
                         </div>
                    </div>
               </div>
               <div className="flex sm:hidden">
                    <Sheet>
                         <SheetTrigger asChild>
                              <Button variant="outline" className="rounded-none font-bold">منو</Button>
                         </SheetTrigger>
                         <SheetContent>
                              <SheetClose asChild>
                                   <div className="flex flex-col gap-5 pt-[50px] text-slate-700">
                                        <Link
                                             className="w-full rounded-none font-bold text-[25px] text-start cursor-pointer"
                                             href="/courses"
                                        >
                                             دوره آموزشی
                                        </Link>
                                        <Link
                                             className="w-full rounded-none font-bold text-[25px] text-start cursor-pointer"
                                             href="/portfolios"
                                        >
                                             نمونه کار
                                        </Link>
                                        <Link
                                             className="w-full rounded-none font-bold text-[25px] text-start cursor-pointer"
                                             href="/blog"
                                        >
                                             وبلاگ
                                        </Link>
                                        <Link
                                             className="w-full rounded-none font-bold text-[25px] text-start cursor-pointer"
                                             href="/ebooks"
                                        >
                                             ایبوک
                                        </Link>
                                   </div>
                              </SheetClose>
                         </SheetContent>
                    </Sheet>
               </div>
               <div className="hidden sm:flex">
                    <Button className="capitalize rounded-none font-bold" size="lg" variant="outline">
                         نقشه راه رایگان
                    </Button>
               </div>
          </div>
     )
}