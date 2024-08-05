"use client";

import { getTags } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePostContext } from "@/context/PostContext";

interface tag {
  slug: string;
  name: string;
  url: string;
}

const PostTags = () => {
  const [tag, setTag] = useState([]);

  useEffect(() => {
    async function Tags() {
      const data = await getTags();
      setTag(data);
    }

    Tags();
  }, []);

  const { filterByTag } = usePostContext();

  return (
    <div className="tags flex gap-3">
      <Button variant={"secondary"} onClick={() => filterByTag("all")}>
        All
      </Button>
      {tag.map((tag: tag) => {
        return (
          <Button key={tag.slug} variant={"secondary"} onClick={() => filterByTag(tag.name)}>
            {tag.name}
          </Button>
        );
      })}
    </div>
  );
};

export default PostTags;
