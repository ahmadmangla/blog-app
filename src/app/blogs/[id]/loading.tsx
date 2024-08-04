import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
<Skeleton className="w-[100px] h-[20px] rounded-full" />;

const loading = () => {
  return (
    <div>
      <section className="w-full h-[400px] relative overflow-hidden">
        <Skeleton className="w-[100vw] h-[400px]" />
      </section>
      <div className="container py-12 md:py-16 lg:py-20">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <Skeleton className="w-[100%] h-[20px] mb-4" />
          <Skeleton className="w-[100%] h-[20px] mb-4" />
          <Skeleton className="w-[100%] h-[20px] mb-4" />
          <Skeleton className="w-[100%] h-[20px] mb-4" />
        </article>
      </div>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
          <Skeleton className="w-[100%] h-[400px]" />
        </div>
      </section>
    </div>
  );
};

export default loading;
