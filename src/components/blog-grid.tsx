import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getPosts, readingTime } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";
import slugify from "slugify";

const BlogGrid = async ({ limit }: { limit?: number }) => {
  const data = await getPosts(limit);

  return (
    <section className="blogs-list flex-col md:flex-row flex flex-wrap mx-6 justify-center items-center space-between gap-4 ">
      {data.map((item) => {
        const randomImage = "https://picsum.photos/1920/1080";
        return (
          <Card className="w-[350px] relative border-none outline-none shadow-none px-0" key={item.id}>
            <Badge className="py-2 absolute top-0 m-3 z-10 bg-white bg-opacity-25 backdrop-blur-lg hover:bg-white hover:bg-opacity-25"> {item.tags[1]} </Badge>
            <Link href={`/blogs/${item.id}`}>
              <Image src={"/robert-richarz-WOhTfiB-ECs-unsplash.jpg"} alt="Blog post image" width={350} height={200} className="rounded-lg object-cover w-full h-60 overflow-hidden" />
            </Link>
            <CardHeader className="px-0">
              <p className="text-slate-500">24 Jan 2024 . {readingTime(item.body)} mins read</p>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-base">{item.body.slice(0, 80) + "..."}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between px-0">
              <div className="profile">
                <div className="flex gap-2 mb-4 items-center">
                  <div className="image relative w-8 h-8">
                    <Image className="w-full h-full rounded-full shadow-lg object-cover" src={"/profile.jpg"} width={100} height={100} alt="profile image" />
                  </div>
                  <span className="text-sm font-bold">John Doe</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
};

export default BlogGrid;
