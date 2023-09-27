"use client"

import PostItem from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function BlogPage({
     params: { locale }
}: {
     params: { locale: string }
}) {
     const router = useRouter()

     return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[50px]">
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
          </div>
     );
}