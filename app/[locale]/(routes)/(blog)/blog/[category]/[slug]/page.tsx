export default async function PostPage({
     params: {
          lang,
          category,
          slug
     }
}: {
     params: {
          lang: string,
          category: string,
          slug: string
     }
}) {
     return (
          <div className="flex flex-1 h-full">
               پست تکی
          </div>
     )
}