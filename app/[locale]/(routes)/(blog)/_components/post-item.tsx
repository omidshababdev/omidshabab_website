"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const PostItem = ({
     title,
     slug,
     image,
     category
}: {
     title: string,
     slug: string
     image?: string,
     category: string
}) => {
     const router = useRouter()

     return (

          <div onClick={() => router.push(`/blog/${category}/${slug}`)} className="group space-y-5 cursor-pointer">
               <div className="bg-black bg-opacity-[5%] object-cover group-hover:bg-opacity-[8%] dark:bg-white dark:bg-opacity-[5%] dark:group-hover:bg-opacity-[8%] w-full aspect-[6/4]">
                    {image && (
                         <Image
                              src={`https://api.omidshabab.com/${image}`}
                              alt="image"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: '100%', height: 'auto' }}
                              layout="responsive"
                         />
                    )}
               </div>
               <div className="space-y-2">
                    <p className="text-lg font-semibold">
                         {title}
                    </p>
               </div>
          </div>
     );
}

export default PostItem;