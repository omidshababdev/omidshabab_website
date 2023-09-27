"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"

export default function BlogLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-col items-center h-screen max-w-[1200px] w-[1200px]">
               <Header />
               {children}
               <Footer />
          </div>
     )
}