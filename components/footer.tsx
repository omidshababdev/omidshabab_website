import { useTranslations } from "next-intl";
// import { usePathname, useRouter } from "next-intl/client";
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
     const router = useRouter();
     const pathname = usePathname();
     const general = useTranslations("general");
     const lang = useTranslations("lang");
     const footer = useTranslations("footer");

     return (
          <div className="flex w-full gap-[20px] bottom-0 py-[20px] sm:py-[30px] justify-between items-center text-[14px] px-5 sm:px-0 border-t">
               <div className="hidden text-[15px] font-semibold text-slate-700 sm:w-full sm:flex sm:flex-grow">
                    {footer("copyright")}
               </div>
               <div className="flex flex-auto sm:flex-none gap-[15px] h-full justify-end items-center">
                    <div className="hidden sm:flex gap-[15px]">
                         <div
                              onClick={() => router.push("/privacy")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer capitalize"
                         >
                              {general("privacy")}
                         </div>
                         <div
                              onClick={() => router.push("/terms")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer capitalize"
                         >
                              {general("terms")}
                         </div>
                    </div>
                    <div className="flex gap-[15px]">
                         <ModeToggle />
                         {/* <DropdownMenu>
                              <DropdownMenuTrigger>
                                   <Button className="rounded-none capitalize font-bold" variant="outline">
                                        {footer("select_language")}
                                   </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="rounded-none text-center">
                                   <DropdownMenuItem onClick={() => router.replace(pathname, { locale: "en" })}>{lang("english")}</DropdownMenuItem>
                                   <DropdownMenuItem onClick={() => router.replace(pathname, { locale: "fa" })}>{lang("persian")}</DropdownMenuItem>
                              </DropdownMenuContent>
                         </DropdownMenu> */}

                    </div>
               </div>
          </div>
     )
}