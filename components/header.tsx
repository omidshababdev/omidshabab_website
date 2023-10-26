import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Header() {
     const router = useRouter();
     const general = useTranslations("general");
     const header = useTranslations("header");

     return (
          <div className="flex w-full top-0 gap-[20px] py-[20px] sm:py-[30px] justify-between items-center px-5 sm:px-0">
               <div className="flex gap-[20px] sm:gap-[30px] h-full items-center">
                    <div
                         className="text-[18px] gap-[10px] flex items-center justify-center"
                    >
                         <a
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer"
                              onClick={() => router.push("/")}
                         >
                              {general("omid_shabab")}
                         </a>

                         <span className="text-[12px] px-3 py-1 bg-black bg-opacity-5 rounded-full">توسعه نرم افزار</span>
                    </div>
                    <div className="hidden sm:flex gap-[20px] text-[14px]">

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
                         {/* <div
                              onClick={() => router.push("/ebooks")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              ایبوک
                         </div> */}

                         {/* <div
                              onClick={() => router.push("/about-me")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              درباره من
                         </div>
                         <div
                              onClick={() => router.push("/contact")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              تماس با من
                         </div> */}
                    </div>
               </div>

               <div className="flex">
                    <Button className="rounded-lg capitalize" variant="outline">
                         نقشه راه رایگان
                    </Button>
               </div>
          </div>
     )
}