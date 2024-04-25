import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className=" flex justify-between gap-2 w-full">
      <div className=" w-1/2 px-5 py-20 bg-gray-400 flex flex-col justify-center items-center gap-5 text-center">
        <Image
          src={"/img1.jpg"}
          width={200}
          height={150}
          className=" w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl ">Name: Vaibhab</p>
      </div>
      <div className="w-1/2 px-5 py-20 flex flex-col bg-gray-400 justify-center items-center gap-5 text-center">
        <Image
          src={"/img2.jpg"}
          width={200}
          height={150}
          className="  w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl">Name: Souradeep</p>
      </div>
    </div>
  );
};

export default Team;
