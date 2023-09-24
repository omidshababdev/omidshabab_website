import { Button } from "@/components/ui/button";

export default function BlogPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     return (
          <div className="flex justify-center items-center bg-black">
               پست ها
               <Button className="rounded-lg font-semibold bg-black" variant="outline">
                    انتخاب زبان
               </Button>
          </div>
     );
}