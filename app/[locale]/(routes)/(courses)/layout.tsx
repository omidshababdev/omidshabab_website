"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CoursesLayout({
     children
}: {
     children: React.ReactNode
}) {
     return (
          <div className="w-full md:px-20">
               <Header />
               {children}
               <Footer />
          </div>
     )
}