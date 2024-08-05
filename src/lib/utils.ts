
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Product } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTime(str: string) {;
  const wpm = 225;
  const words = str.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export const getUser = async( id: number) =>{
  const res = await fetch(`https://dummyjson.com/user/${id}`);
  const user = await res.json();

  return user;
}

export const getPosts = async (limit?: number) => {
    const res = await fetch(`https://dummyjson.com/posts?limit=${limit ? limit : "30"}`);
    const {posts} = await res.json();

    if(posts.length > 0){
      // Fetch user details for each post
    const usersPromises = posts.map((post: { userId: number }) => getUser(post.userId));
    const users = await Promise.all(usersPromises);

    if(users.length > 0){

      // Combine post and user data
      const combinedData = posts.map((post: { userId: number }) => ({
        ...post,
        user: {
          email: users.find(user => user.id === post.userId)?.email,
        name: `${users.find(user => user.id === post.userId)?.firstName} ${users.find(user => user.id === post.userId)?.lastName}`,
        image: users.find(user => user.id === post.userId)?.image,
        }
      }));
  
      return combinedData;
    }
  
    }

}

export const getPost = async (id: number) : Promise<any> => {
   const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json()

    const {userId} = data;

    const user = await getUser(userId);

    const combinedData = {
      ...data, user: {
        email: user.email,
        name: `${user.firstName} ${user?.lastName}`,
        image: user?.image,
      },
    };

    return combinedData;
}

export const getTags = async () =>{
  const res = await fetch(`https://dummyjson.com/posts/tags?limit=5`);
  const data = await res.json();

  return data.slice(0,5);
}
