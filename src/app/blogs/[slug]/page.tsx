import { getPost } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import BlogGrid from "@/components/blog-grid";

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  return (
    <div>
      <section className="w-full h-[400px] relative overflow-hidden">
        <img
          src="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
          alt="Blog cover image"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">{post?.title}</h1>
          <div className="mt-4 text-muted-foreground">
            <p className="text-lg">
              By <span className="font-medium">John Doe</span> | July 31, 2024
            </p>
          </div>
        </div>
      </section>
      <div className="container py-12 md:py-16 lg:py-20">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <p>{post?.body}</p>
        </article>
      </div>
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Posts</h2>
          <BlogGrid />
        </div>
      </section>
    </div>
  );
};

export default page;
