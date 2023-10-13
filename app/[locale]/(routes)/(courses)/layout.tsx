"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CoursesLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="flex flex-col min-h-full max-w-[1200px]">
               <Header />
               {children}
               <div className="h-[50px]" />
               <Footer />
          </div>
     )
}