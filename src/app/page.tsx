import BlogGrid from "@/components/blog-grid";
import BlogGridSkeleton from "@/components/blog-grid-skeleton";
import Cover from "@/components/cover";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Cover />
      <div className="heading px-6 py-6">
        <h1 className="text-3xl  font-medium">Blog</h1>
        <p>Here we share travel tips, destination guides and stories that inspire your next adventure</p>
      </div>
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid limit={8} />
      </Suspense>
    </>
  );
}
