import BlogGrid from "@/components/blog-grid";
import BlogGridSkeleton from "@/components/blog-grid-skeleton";
import Cover from "@/components/cover";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Cover />
      <h1 className="text-3xl text-center py-4 font-bold">Welcome to my Blog</h1>
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid />
      </Suspense>
    </>
  );
}
