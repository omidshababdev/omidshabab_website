import PostItem from "@/components/post-item";

export default async function CategoryPage() {
     return (
          <div className="flex flex-1 flex-col h-full space-y-[30px]">
               <p className="text-lg">
                    دسته بندی
               </p>
               <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
               </div>
          </div>
     )
}