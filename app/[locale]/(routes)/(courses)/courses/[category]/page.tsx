import CourseItem from "@/components/course-item";
import Sidebar from "@/components/sidebar";
import Courses from "@/data/courses.json"

export default async function CategoryPage() {
     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="flex flex-1 flex-col h-full space-y-[30px]">
                         <p className="text-lg">
                              دسته بندی
                         </p>
                         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                              {Courses.map((index) =>
                                   index.lang === locale && (
                                        <CourseItem
                                             key={index}
                                             title={index.title}
                                             price={index.price}
                                             category={index.category}
                                             slug={index.slug}
                                        />
                                   ),
                              )}
                         </div>
                    </div>
               </div>
               <Sidebar />
          </div>
     )
}