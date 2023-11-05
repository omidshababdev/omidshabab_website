import axios from "axios";
import Image from "next/image";
import ReactMarkdown from "react-markdown"
import { redirect } from "next/navigation"

// Main part
const PostPage = async ({
     params: {
          locale,
          category,
          slug
     }
}: {
     params: {
          locale: string,
          category: string,
          slug: string
     }
}) => {
     const res = await axios.get(`${process.env.BACKEND_URL}/posts?locale=${locale}&populate=*&filters[slug][$contains]=${slug}`, {
          headers: {
               Authorization:
                    `Bearer ${process.env.BACKEND_API_KEY}`,
          },
     })

     const posts = res.data;

     if (!posts.data[0]) redirect("/404")

     return (
          <div className="flex flex-col h-full space-y-[50px]">
               <div className="space-y-[30px]">
                    <h1 className="font-bold text-[25px] sm:text-[35px] leading-[50px] sm:leading-[70px]">
                         {posts.data[0].attributes.title}
                    </h1>
                    <Image
                         src={`https://api.omidshabab.com/${posts.data[0].attributes.image.data?.attributes?.url}`}
                         alt="image"
                         width={0}
                         height={0}
                         sizes="100vw"
                         style={{ width: '100%', height: 'auto' }}
                         className="bg-black bg-opacity-[5%] dark:bg-white dark:bg-opacity-[5%] w-full aspect-[5/3] my-5"
                         layout="responsive"
                    />
               </div>
               <div className="space-y-[10px]">
                    <ReactMarkdown
                         components={{
                              h1: ({ children }) =>
                                   <h1 className="text-2xl font-bold">{children}</h1>,
                              h2: ({ children }) =>
                                   <h2 className="text-[22px] sm:text-[25px] font-semibold leading-[50px] text-slate-800 py-5">{children}</h2>,
                              h3: ({ children }) =>
                                   <h3 className="text-[22px] sm:text-[25px] font-semibold leading-[50px] text-slate-800 py-5">{children}</h3>,
                              h4: ({ children }) =>
                                   <h4 className="text-[22px] sm:text-[25px] font-semibold leading-[50px] text-slate-800 py-5">{children}</h4>,
                              p: ({ children }) =>
                                   <p className="text-[20px] leading-[50px] sm:text-[22px] sm:leading-[60px] text-slate-600">{children}</p>,
                         }}
                    >
                         {posts.data[0].attributes.desc}
                    </ReactMarkdown>
               </div>

          </div>
     )
}

export default PostPage