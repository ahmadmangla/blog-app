import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types"
import { data } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPosts = async () : Promise<Product[]> => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json()
    return new Promise((res, rej) => {
      setTimeout(() => res(data), 2000)
     })
}

export const getPost = async (slug: string) : Promise<Product | undefined> => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json()

  const post = data.find((item=> item.slug === slug));

  return new Promise((res, rej) => {
    setTimeout(() => res(post), 2000)
   })
}
