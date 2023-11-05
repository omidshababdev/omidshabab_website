import Sidebar from "@/components/sidebar"
import axios from "axios"
import { Metadata, ResolvingMetadata } from "next";

// Dynamic Metadata based on locales
// export async function generateMetadata({
//      params: {
//           locale,
//           slug
//      },
// }: {
//      params: {
//           locale: Locale,
//           slug: string,
//      },
//      parent?: ResolvingMetadata
// }): Promise<Metadata> {

//      const res = await axios.get(`${process.env.BACKEND_URL}/posts?locale=${locale}&populate=*&filters[slug][$contains]=${slug}`, {
//           headers: {
//                Authorization:
//                     `Bearer ${process.env.BACKEND_API_KEY}`,
//           },
//      })

//      const posts = res.data;

//      return {
//           title: posts.data[0].attributes.title,
//           description: posts.data[0].attributes.short_desc,
//           openGraph: {
//                title: posts.data[0].attributes.title,
//           }
//      }
// }

export default function PostLayout({
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