import BlogGrid from "@/components/blog-grid";
import BlogGridSkeleton from "@/components/blog-grid-skeleton";
import Cover from "@/components/cover";
import PostTags from "@/components/PostTags";
import { PostProvider } from "@/context/PostContext";
import { Suspense } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function Home() {
  return (
    <>
      <Cover />
      <div className="container-fluid mb-3">
        <div className="heading px-6 py-6">
          <h1 className="text-3xl  font-medium mb-3">Blog</h1>
          <p className="text-muted mb-3 text-neutral-600">Here we share travel tips, destination guides and stories that inspire your next adventure</p>
          <PostTags />
        </div>
        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Suspense>
      </div>
    </>
  );
}
