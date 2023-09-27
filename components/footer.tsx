import { useTranslations } from "next-intl";
import { usePathname, useRouter } from 'next-intl/client';
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Footer() {
     const router = useRouter();
     const pathname = usePathname();
     const general = useTranslations("general");
     const lang = useTranslations("lang");
     const footer = useTranslations("footer");

     return (
          <div className="flex flex-1 w-full gap-[20px] py-[30px] justify-between items-center font-semibold text-[14px]">
               <div className="flex">
                    {footer("copyright")}
               </div>
               <div className="flex gap-[15px] h-full items-center">
                    <div
                         onClick={() => null}
                         className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer capitalize"
                    >
                         {general("privacy")}
                    </div>
                    <div
                         onClick={() => null}
                         className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer capitalize"
                    >
                         {general("terms")}
                    </div>
                    <DropdownMenu>
                         <DropdownMenuTrigger>
                              <Button className="rounded-lg font-semibold capitalize" variant="outline">
                                   {footer("select_language")}
                              </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className="rounded-lg text-center">
                              <DropdownMenuItem onClick={() => router.replace(pathname, { locale: "en" })}>{lang("english")}</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => router.replace(pathname, { locale: "fa" })}>{lang("persian")}</DropdownMenuItem>
                         </DropdownMenuContent>
                    </DropdownMenu>
                    <ModeToggle />
               </div>
          </div>
     )
}