import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Header() {
     const router = useRouter();
     const general = useTranslations("general");
     const header = useTranslations("header");

     return (
          <div className="flex flex-1 w-full gap-[20px] py-[30px] justify-between items-center">
               <div className="flex gap-[30px] h-full items-center">
                    <div
                         onClick={() => router.push("/")}
                         className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] transition-opacity cursor-pointer font-bold text-[18px]"
                    >
                         {general("omid_shabab")}
                    </div>
                    <div className="flex gap-[20px] font-semibold text-[14px]">
                         <div
                              onClick={() => router.push("/")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              {general("home")}
                         </div>
                         <div
                              onClick={() => router.push("/blog")}
                              className="hover:text-black hover:text-opacity-[50%] dark:hover:text-white dark:hover:text-opacity-[90%] capitalize transition-opacity cursor-pointer"
                         >
                              {general("blog")}
                         </div>
                    </div>
               </div>

               <div className="flex">
                    <Button className="rounded-lg font-semibold capitalize" variant="outline">
                         {header("free_downloads")}
                    </Button>
               </div>
          </div>
     )
}