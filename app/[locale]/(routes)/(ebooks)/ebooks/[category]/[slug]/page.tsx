export default function EbookPage({
     params: {
          lang,
          category,
          slug
     }
}: {
     params: {
          lang: string,
          category: string,
          slug: string
     }
}) {
     return (
          <div className="flex flex-col h-full space-y-[30px]">

               <div className="block top-10 sticky space-y-[20px]">
                    {[1, 2, 3, 4, 5].map((index) => (
                         <div key={index} className="bg-black bg-opacity-[5%] dark:bg-white dark:bg-opacity-[5%] w-full aspect-[5/3]">

                         </div>
                    ))}
               </div>

          </div>
     )
}