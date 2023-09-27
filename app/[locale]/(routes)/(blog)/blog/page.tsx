import { Button } from "@/components/ui/button";

export default function BlogPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     return (
          <div className="flex w-full h-full py-2 font-normal">
               <div className="flex w-full gap-2">
                    <div className="w-full bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 px-5 py-3">
                         پست ها
                    </div>
                    <div className="w-[350px] bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 px-5 py-3">
                         سایدبار
                    </div>
               </div>
          </div>
     );
}