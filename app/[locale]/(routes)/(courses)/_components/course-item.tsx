"use client"

import { useRouter } from "next/navigation";

const CourseItem = ({
     title,
     price,
     category,
     slug,
}: {
     title: string,
     price: string,
     category: string,
     slug: string
}) => {
     const router = useRouter()

     return (

          <div onClick={() => router.push(`/courses/${category}/${slug}`)} className="group space-y-5 cursor-pointer">
               <div className="bg-black bg-opacity-[5%] group-hover:bg-opacity-[8%] dark:bg-white dark:bg-opacity-[5%] dark:group-hover:bg-opacity-[8%] w-full aspect-[6/4]">

               </div>
               <div className="space-y-2">
                    <p className="text-lg">
                         {title}
                    </p>
                    <p className="text-sm text-[#3e3e3e] dark:text-[#cbcbcb] leading-[28px]">
                         {price}
                    </p>
               </div>
          </div>
     );
}

export default CourseItem;