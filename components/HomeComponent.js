import Image from "next/image";
import React from "react";

const HomeComponent = () => {
  return (
    <div className=" mt-10 px-20 fle3x flex-col gap-7">
      {/* <Image
        src={"/image.png"}
        width={300}
        height={100}
        alt="banner"
        className=" w-full h-full"
      /> */}
      {/* inser vidio her  take all width*/}
      <p className=" text-3xl text-center mb-5">VineNet: Grasp of the Grapes</p>
      <video width="100%" controls>
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeComponent;
