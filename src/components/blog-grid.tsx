import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getPosts } from "@/lib/utils";
import Link from "next/link";

const BlogGrid = async () => {
  const data = await getPosts();
  return (
    <section className="blogs-list flex-col md:flex-row flex flex-wrap justify-center items-center space-between gap-4 ">
      {data.map((item) => {
        return (
          <Card className="w-[350px]" key={item.id}>
            <Image
              src="https://i0.wp.com/port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png?fit=1200%2C800&ssl=1"
              alt="Blog post image"
              width={350}
              height={200}
              className="rounded-t-md object-cover w-full"
            />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.body.slice(0, 200) + "..."}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`/blogs/${item.slug}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
};

export default BlogGrid;
