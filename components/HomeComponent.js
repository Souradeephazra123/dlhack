import Image from "next/image";
import React from "react";

const HomeComponent = () => {
  return (
    <div className=" mt-10 px-20 fle3x flex-col gap-7">
      <Image
        src={"/image.png"}
        width={300}
        height={100}
        alt="banner"
        className=" w-full h-full"
      />
      <p className=" text-3xl text-center ">VineNet: Grasp of the Grapes</p>
      <p>
        Description: Viticulture is the science and art of grapes cultivation.
        In the bustling world of viticulture, precision is paramount. VineNet:
        Grasp of the Grapes is an exciting hackathon challenge tailored to
        revolutionize vineyard management through cutting-edge deep learning
        techniques. The task at hand? Crafting a lightweight fast deep learning
        model to precisely segment grape bunches in high-resolution vineyard
        images.
      </p>
    </div>
  );
};

export default HomeComponent;
