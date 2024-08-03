import BlogGrid from "@/components/blog-grid";
import BlogGridSkeleton from "@/components/blog-grid-skeleton";
import React, { Suspense } from "react";

const Blogs = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-4 font-bold">All Blogs</h1>
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid />
      </Suspense>
    </>
  );
};

export default Blogs;
