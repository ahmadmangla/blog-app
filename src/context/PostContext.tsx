"use client";
// context/PostContext.tsx
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { getPosts } from "@/lib/utils";
// Adjust the path as per your project structure

interface User {
  email: string;
  name: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  user: User;
}

interface PostContextType {
  posts: Post[];
  filteredPosts: Post[];
  filterByTag: (tag: string) => void;
  clearFilter: () => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setFilteredPosts(data);
    };

    fetchPosts();
  }, []);

  const filterByTag = (tag: string) => {
    if (tag === "all") {
      clearFilter();
      return;
    }
    const filtered = posts.filter((post) => post.tags.includes(tag.toLowerCase()));
    setFilteredPosts(filtered);
  };

  const clearFilter = () => {
    setFilteredPosts(posts);
  };

  return <PostContext.Provider value={{ posts, filteredPosts, filterByTag, clearFilter }}>{children}</PostContext.Provider>;
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
