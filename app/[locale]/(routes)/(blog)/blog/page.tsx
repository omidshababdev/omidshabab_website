"use client"

import PostItem from "@/app/[locale]/(routes)/(blog)/_components/post-item";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";

export default function BlogPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const router = useRouter()

     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                              <PostItem key={index} />
                         ))}
                    </div>
               </div>
               <Sidebar />
          </div>

     );
}