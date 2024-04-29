"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
const Header = ({ active, setActive }) => {
  // const [active, setActive] = useState("Home");
  const navArr = ["Home", "Inference", "Team", "Contact"];
  return (
    <div className=" flex justify-between items-center py-4 px-6 bg-black text-white">
      <div className=" text-3xl ">AI Innovation 3.0</div>
      <ul className=" flex gap-20 font-semibold text-xl">
        {navArr.map((item, idx) => (
          <li
            onClick={() => setActive(item)}
            key={idx}
            className={` ${
              active === item ? "text-yellow-500" : "text-white"
            } cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
      <Link href={"/profile"}>
        <RxAvatar size={40} />
      </Link>
    </div>
  );
};

export default Header;
