import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <section className=" rounded-lg m-2 overflow-hidden">
      <div className=" image-container">
        <Image className="md:h-[600px] object-cover" src={"/robert-richarz-WOhTfiB-ECs-unsplash.jpg"} alt="Lake" width={1920} height={1080} />
      </div>
      <div className="content"></div>
    </section>
  );
};

export default Cover;
