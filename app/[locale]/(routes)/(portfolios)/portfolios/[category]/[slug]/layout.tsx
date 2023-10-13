"use client"

import CourseSidebar from "@/components/course-sidebar"

export default function PortfolioLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    {children}
               </div>
               <CourseSidebar />
          </div>
     )
}