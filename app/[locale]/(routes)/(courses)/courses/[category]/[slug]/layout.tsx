"use client"

import CourseSidebar from "@/app/[locale]/(routes)/(courses)/_components/course-sidebar"
import Sidebar from "@/components/sidebar"

export default function CourseLayout({
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