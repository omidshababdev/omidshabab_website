import EbookItem from "@/app/[locale]/(routes)/(ebooks)/_components/ebook-item"
import Sidebar from "@/components/sidebar";
import Ebooks from "@/data/ebooks.json"


export default function EbooksPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                         {/* {Ebooks.map((index) =>
                              index.lang === locale && (
                                   <EbookItem
                                        title={index.title}
                                        price={index.price}
                                        category={index.category}
                                        slug={index.slug}
                                   />
                              ),
                         )} */}
                    </div>
               </div>
               <Sidebar />
          </div>
     )
}