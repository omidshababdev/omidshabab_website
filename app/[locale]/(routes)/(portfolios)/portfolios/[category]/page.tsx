import PortfolioItem from "@/app/[locale]/(routes)/(portfolios)/_components/portfolio-item";
import Sidebar from "@/components/sidebar";
import Portfolios from "@/data/portfolios.json"

export default async function CategoryPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-10 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="flex flex-1 flex-col h-full space-y-[30px]">
                         <p className="text-lg">
                              دسته بندی
                         </p>
                         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                              {/* {Portfolios.map((index) => (
                                   <PortfolioItem
                                        title={index.title}
                                        category={index.category}
                                        slug={index.slug}
                                   />
                              ))} */}
                         </div>
                    </div>
               </div>
               <Sidebar />
          </div>
     )
}