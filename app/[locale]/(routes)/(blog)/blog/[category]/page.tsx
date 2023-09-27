import PostItem from "@/components/post-item";

export default async function CategoryPage() {
     return (
          <div className="flex flex-1 flex-col h-full space-y-[30px]">
               <p className="text-lg">
                    دسته بندی
               </p>
               <PostItem />
          </div>
     )
}