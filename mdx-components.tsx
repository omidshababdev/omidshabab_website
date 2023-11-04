import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-[100px] font-semibold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-[200px] font-bold">{children}</h2>,
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     style={{ width: '100%', height: 'auto' }}
    //     {...props}
    //   />
    // ),
    ...components,
  }
}