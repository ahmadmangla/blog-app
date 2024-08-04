import { getPost } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import BlogGrid from "@/components/blog-grid";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await getPost(Number(params.id));

  return {
    title: post?.title,
    description: post?.body,
  };
}

const page = async ({ params }: { params: { id: number } }) => {
  console.log(params);
  const post = await getPost(params.id);
  return (
    <div>
      <section className="w-full h-[500px] relative overflow-hidden mt-0">
        <img src="/robert-richarz-WOhTfiB-ECs-unsplash.jpg" alt="Blog cover image" width={1920} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl text-white font-bold text-primary-foreground sm:text-5xl md:text-6xl">{post?.title}</h1>
          <div className="mt-4 text-muted-foreground">
            <p className="text-lg text-white">
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
          <BlogGrid limit={6} />
        </div>
      </section>
    </div>
  );
};

export default page;
