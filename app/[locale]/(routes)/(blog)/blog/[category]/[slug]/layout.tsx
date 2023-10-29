"use client"

import PostSidebar from "@/app/[locale]/(routes)/(blog)/_components/post-sidebar"

export default function PostLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max px-20 py-10 font-normal gap-[30px] sm:px-0">
               <div className="w-full">
                    {children}
               </div>
               <PostSidebar />
          </div>
     )
}