"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Inference = () => {
  const [image, setImage] = useState("/image.png");
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  // const handleImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(event.target.files[0]);
  //   }
  // };

  const [fill, setFill] = useState(false);
  const [data, setData] = useState("");
  const submitImage = async () => {
    try {
      const formData = new FormData();
      formData.append("img", image);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/infer/segmentImage`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response from segment", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div className=" w-full flex">
      <div className="relative w-1/2 max-h-[300px] p-4 rounded 2xl:rounded-xl bg-black flex  flex-col gap-10 justify-center items-center">
        {image && (
          <Image
            src={image}
            width={80}
            height={80}
            alt="profile_image"
            onClick={() => setFill(!fill)}
            className={` w-full h-full ${
              fill === true ? "object-fill" : "object-contain"
            }  border-white border `}
          />
        )}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center items-center">
          <div>
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="bg-[#E9C638] text-sm 2xl:text-base text-black font-bold py-1 px-2 2xl:py-2 2xl:px-4 rounded-full w-fit"
            >
              Select Picture
            </label>
          </div>
          <button
            onClick={submitImage}
            type="submit"
            className=" text-black bg-white px-4 py-1 rounded-full w-fit"
          >
            Submit
          </button>
        </div>
      </div>
      <div className=" w-1/2 max-h-[300px] text-white flex justify-center items-center border-l border-[2px] bg-black text-center">
        <Image
          src={data}
          width={80}
          height={80}
          alt="profile_image"
          onClick={() => setFill(!fill)}
          className={` w-full h-full ${
            fill === true ? "object-fill" : "object-contain"
          }  border-white border `}
        />
      </div>
    </div>
  );
};

export default Inference;
