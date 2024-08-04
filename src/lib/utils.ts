import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types"
import { data } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTime(str: string) {;
  const wpm = 225;
  const words = str.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export const getPosts = async (limit?: number) : Promise<Product[]> => {
    const res = await fetch(`https://dummyjson.com/posts?limit=${limit ? limit : "30"}`);
    const data = await res.json();
    return data.posts;
}

export const getPost = async (id: number) : Promise<Product | undefined> => {
   const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json()

    return data;
}
