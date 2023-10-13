"use client"

import { useRouter } from "next/navigation";

const CourseItem = () => {
     const router = useRouter()

     return (

          <div onClick={() => router.push("/courses/software-development/nextjs")} className="group space-y-5 cursor-pointer">
               <div className="bg-black bg-opacity-[5%] group-hover:bg-opacity-[8%] dark:bg-white dark:bg-opacity-[5%] dark:group-hover:bg-opacity-[8%] w-full aspect-[6/4]">

               </div>
               <div className="space-y-2">
                    <p className="text-lg">
                         عنوان دوره
                    </p>
                    <p className="text-sm text-[#3e3e3e] dark:text-[#cbcbcb] leading-[28px]">
                         با عضویت در این خبرنامه از جدیدترین پست ها با خبر میشی و هیچ چیزی رو از دست نمیدی!
                    </p>
               </div>
          </div>
     );
}

export default CourseItem;