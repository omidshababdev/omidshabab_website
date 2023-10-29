"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"

export default function BlogLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="w-full px-20">
               <Header />
               {children}
               <div className="h-[50px]" />
               <Footer />
          </div>
     )
}