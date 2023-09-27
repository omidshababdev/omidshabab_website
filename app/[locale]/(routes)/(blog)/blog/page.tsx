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
          <>
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
               <PostItem />
          </>
     );
}