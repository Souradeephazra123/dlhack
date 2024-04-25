"use client";
import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import Inference from "@/components/Inference";
import Team from "@/components/Team";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Home");
  return (
    <div>
      <Header active={active} setActive={setActive} />
      {active === "Home" && <HomeComponent />}
      {active === "Inference" && <Inference />}
      {active === "Team" && <Team />}
    </div>
  );
}
