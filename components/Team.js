import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className=" flex justify-between gap-2 w-full">
      <div className=" w-1/2 px-5 py-20 bg-gray-400 flex flex-col justify-center items-center gap-5 text-center">
        <Image
          src={"/Vaibhav.jpg"}
          width={200}
          height={150}
          className=" w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl ">Vaibhav Sharma</p>
      </div>
      <div className="w-1/2 px-5 py-20 flex flex-col bg-gray-400 justify-center items-center gap-5 text-center">
        <Image
          src={"/Vinita.jpg"}
          width={200}
          height={150}
          className="  w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl">Vinita Shukla</p>
      </div>
      <div className="w-1/2 px-5 py-20 flex flex-col bg-gray-400 justify-center items-center gap-5 text-center">
        <Image
          src={"/Arshi.jpg"}
          width={200}
          height={150}
          className="  w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl">Arshi Rizvi</p>
      </div>
      <div className="w-1/2 px-5 py-20 flex flex-col bg-gray-400 justify-center items-center gap-5 text-center">
        <Image
          src={"/Ankit.png"}
          width={200}
          height={150}
          className="  w-[250px] h-[250px] object-cover rounded-full"
        />
        <p className=" text-2xl">Ankit Sharma</p>
      </div>
    </div>
  );
};

export default Team;
