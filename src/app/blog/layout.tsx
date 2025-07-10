
import { Suspense } from "react"
import "../globals.css"

import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | My Blog page",
    default: "Blog Page",
  },
  openGraph: {
    title: "Blog page",
    description: "Blog page",
    images: [
      {
        url: "https://i.pinimg.com/1200x/af/01/84/af01840d9a12d2caa2c75bbb2034ea9f.jpg",
        width: 800,
        height: 650,
        alt: "Car",
        type: "image/png",
      },
    ],
  },
};
export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center">
              <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
        </StyledComponentsRegistry>
        </div>
    )
}