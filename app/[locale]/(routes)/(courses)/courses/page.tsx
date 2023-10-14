import CourseItem from "@/app/[locale]/(routes)/(courses)/_components/course-item"
import Sidebar from "@/components/sidebar"
import Courses from "@/data/courses.json"

export default function CoursesPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     return (
          <div className="flex flex-1 w-full min-h-max py-2 font-normal gap-[30px] px-5 sm:px-0">
               <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                         {Courses.map((index) =>
                              index.lang === locale && (
                                   <CourseItem
                                        title={index.title}
                                        price={index.price}
                                        category={index.category}
                                        slug={index.slug}
                                   />
                              ),
                         )}
                    </div>
               </div>
               <Sidebar />
          </div>
     )
}