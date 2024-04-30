import Image from "next/image";
import React from "react";

const HomeComponent = () => {
  return (
    <div className="   w-full h-full">
      {/* <VideoPlayer src="/Video.mp4" /> */}
      {/* <Image
        src={"/image.png"}
        width={300}
        height={100}
        alt="banner"
        className=" w-full h-full"
      /> */}
      {/* inser vidio her  take all width*/}
      {/* <p className=" text-3xl text-center mb-5">VineNet: Grasp of the Grapes</p> */}
      <video
        width="100%"
        height={"100%"}
        autoPlay
        muted
        loop
        className="relative"
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className=" absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl text-center text-white font-bold mb-5">
        VineNet: Grasp of the Grapes
      </p>
    </div>
  );
};

export default HomeComponent;
