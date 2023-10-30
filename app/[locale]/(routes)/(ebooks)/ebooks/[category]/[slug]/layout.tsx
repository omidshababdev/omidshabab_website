"use client"

import EbookSidebar from "@/app/[locale]/(routes)/(ebooks)/_components/ebook-sidebar"

export default function EbookLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    {children}
               </div>
               <EbookSidebar />
          </div>
     )
}