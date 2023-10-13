import PortfolioItem from "@/components/portfolio-item";
import Sidebar from "@/components/sidebar";

export default async function CategoryPage() {
     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="flex flex-1 flex-col h-full space-y-[30px]">
                         <p className="text-lg">
                              دسته بندی
                         </p>
                         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                                   <PortfolioItem key={index} />
                              ))}
                         </div>
                    </div>
               </div>
               <Sidebar />
          </div>
     )
}