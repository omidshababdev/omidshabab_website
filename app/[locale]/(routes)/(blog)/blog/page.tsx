import PostItem from "@/app/[locale]/(routes)/(blog)/_components/post-item";
import Sidebar from "@/components/sidebar";
import axios from "axios";

export interface Post {
     id: number
     attributes: {
          title: string
          short_desc: string
          desc: string
          slug: string
          comments: {
               commentsNumber: number
               populate: []
          },
          createdAt: string
          updatedAt: string
          publishedAt: string
          locale: string
          image: {
               data: {
                    id: number,
                    attributes: {
                         alternativeText: string
                         url: string
                    }
               }
          }
          category: {
               data:
               {
                    id: number
                    attributes: {
                         name: string
                         slug: string
                    }
               }
          }
     }
}

const BlogPage = async ({
     params: { locale },
}: {
     params: { locale: string }
}) => {
     const res = await axios.get(`${process.env.BACKEND_URL}/posts?locale=${locale}&populate=*`, {
          headers: {
               Authorization:
                    `Bearer ${process.env.BACKEND_API_KEY}`,
          },
     })

     const posts = res.data;

     if (!posts || !posts.data) {
          return (<div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                         هیچ پستی اینجا نیست!
                    </div>
               </div>
               <Sidebar />
          </div>)
     }

     return (
          <div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                         {posts.data.map((post: Post) =>
                              <PostItem
                                   key={post.id}
                                   title={post.attributes.title}
                                   slug={post.attributes.slug}
                                   category={post.attributes.category.data?.attributes?.slug}
                                   image={post.attributes.image.data?.attributes?.url}
                              />
                         )}
                    </div>
               </div>
               <Sidebar />
          </div>

     );
}

BlogPage.getInitialProps = async () => {
     try {
          const res = await axios.get("https://api.omidshabab.com/api/posts?locale=fa", {
               headers: {
                    Authorization:
                         `Bearer ${process.env.BACKEND_API_KEY}`,
               },
          })

          const posts = res.data;

          console.log(`Posts are: ${posts.data}`);

          return { posts }
     } catch (error) {
          return { error };
     }
}

export default BlogPage