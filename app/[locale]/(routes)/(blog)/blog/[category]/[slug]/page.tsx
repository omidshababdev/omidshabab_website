import axios from "axios";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown"
import { redirect } from "next/navigation"
import rehypeHighlight from "rehype-highlight";
// import SyntaxHighlighter from "react-syntax-highlighter"
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"


// Dynamic Metadata based on locales
export async function generateMetadata({
     params: {
          locale,
          slug
     },
}: {
     params: {
          locale: Locale,
          slug: string,
     },
     parent?: ResolvingMetadata
}): Promise<Metadata> {

     const res = await axios.get(`${process.env.BACKEND_URL}/posts?locale=${locale}&populate=*&filters[slug][$contains]=${slug}`, {
          headers: {
               Authorization:
                    `Bearer ${process.env.BACKEND_API_KEY}`,
          },
     })

     const posts = res.data;

     return {
          title: posts.data[0].attributes.title,
          description: posts.data[0].attributes.short_desc,
     }
}


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

     // const options = {
     //      mdxOptions: {
     //           remarkPlugins: [],
     //           rehypePlugins: [rehypeHighlight],
     //      }
     // }

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
                         children={posts.data[0].attributes.desc}
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
                              image: ({ src, alt, ...props }: { src: string, alt: string }) => {
                                   return (
                                        <Image
                                             src={src}
                                             alt={alt}
                                             style={{ width: "100%", height: "auto" }}
                                             layout="responsive"
                                             {...props}
                                        />
                                   )
                              },
                              code({
                                   node,
                                   inline,
                                   className,
                                   children,
                                   ...props }: {
                                        node: string;
                                        inline: boolean;
                                        className: string;
                                        children: React.ReactNode;
                                   }) {
                                   const match = /language-(\w+)/.exec(className || '')
                                   return
                                   // inline && match ? (
                                   <div dir="ltr">
                                        {children}
                                   </div>
                                   // <pre>
                                   //      <code className="language-js">
                                   //           {children}
                                   //      </code>
                                   // </pre>
                                   // <SyntaxHighlighter
                                   //      children={String(children).replace(/\n$/, '')}
                                   //      style={dracula}
                                   //      language=""
                                   // PreTag="div"
                                   // {...props}
                                   // >
                                   //      {children}
                                   // </SyntaxHighlighter>
                                   // ) : (
                                   //      <span className={className} {...props}>
                                   //           {children}
                                   //      </span>
                                   // )
                              }
                         }}
                    />
               </div>

          </div>
     )
}

export default PostPage