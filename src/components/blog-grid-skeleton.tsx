import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { Button } from "./ui/button";

const BlogGridSkeleton = () => {
  return (
    <section className="blogs-list flex-col md:flex-row flex flex-wrap justify-center items-center space-between gap-4 ">
      {Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
        return (
          <Card className="w-[350px]" key={item}>
            <Skeleton className="w-[100%] h-[200px]" />
            <CardHeader>
              <CardTitle>
                <Skeleton className="w-[100%] h-[20px] mb-2" />
                <Skeleton className="w-[100%] h-[20px]" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="w-[100%] h-[10px]" />
                <Skeleton className="w-[100%] h-[10px]" />
                <Skeleton className="w-[100%] h-[10px]" />
                <Skeleton className="w-[100%] h-[10px]" />
                <Skeleton className="w-[100%] h-[10px]" />
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Skeleton className="w-[100px] h-[20px]" />
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
};

export default BlogGridSkeleton;
