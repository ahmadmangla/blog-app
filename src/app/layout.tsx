import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { PostProvider } from "@/context/PostContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizone Blogs - World For Travellers",
  description: "Welcome to Horizon Blogs where we create amazing blogs covering travel tips and hotel experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <PostProvider>
          <main>{children}</main>
        </PostProvider>
      </body>
    </html>
  );
}
