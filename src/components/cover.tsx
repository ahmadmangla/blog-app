import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

const Cover = () => {
  return (
    <section className="relative rounded-lg m-2 overflow-hidden">
      <div className=" image-container">
        <Image className="md:h-[600px] object-cover" src={"/robert-richarz-WOhTfiB-ECs-unsplash.jpg"} alt="Lake" width={1920} height={1080} />
      </div>
      <div className="content absolute z-10 bottom-0 px-6 py-6 md:flex justify-between w-full items-center">
        <div className="left-section">
          <Badge className="py-2 bg-white bg-opacity-25 backdrop-blur-lg hover:bg-white hover:bg-opacity-25"> Destination </Badge>
          <h1 className="text-white text-2xl my-4">Exploring the Wonder of Hiking</h1>
          <p className="text-white w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates hic maiores?</p>
        </div>
        <div className="right-section">
          <div className="profile">
            <div className="flex gap-3 mb-4 items-center md:justify-end">
              <Image className="rounded-full h-12 overflow-hidden object-cover" src={"/profile.jpg"} width={50} height={40} alt="profile image" />
              <span className="text-white">John Doe</span>
            </div>
            <div>
              <p className="text-white">24 Jan 2024 . 10 mins read</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
