"use client"

import PortfolioSidebar from "@/app/[locale]/(routes)/(portfolios)/_components/portfolio-sidebar"

export default function PortfolioLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    {children}
               </div>
               <PortfolioSidebar />
          </div>
     )
}