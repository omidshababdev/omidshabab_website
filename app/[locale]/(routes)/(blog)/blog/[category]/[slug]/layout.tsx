"use client"

import PostSidebar from "@/components/post-sidebar"

export default function PostLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    {children}
               </div>
               <PostSidebar />
          </div>
     )
}