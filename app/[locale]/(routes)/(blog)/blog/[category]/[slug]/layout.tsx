"use client"

import PostSidebar from "@/app/[locale]/(routes)/(blog)/_components/post-sidebar"
import Sidebar from "@/components/sidebar"

export default function PostLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max px-5 py-5 font-normal gap-[30px] sm:px-0 sm:py-10">
               <div className="w-full">
                    {children}
               </div>
               <Sidebar />
          </div>
     )
}