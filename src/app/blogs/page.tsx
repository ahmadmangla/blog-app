import BlogGrid from "@/components/blog-grid";
import BlogGridSkeleton from "@/components/blog-grid-skeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Checkout my Blogs",
};

const Blogs = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-4 font-bold">All Blogs</h1>
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid refresh={true} />
      </Suspense>
    </>
  );
};

export default Blogs;
