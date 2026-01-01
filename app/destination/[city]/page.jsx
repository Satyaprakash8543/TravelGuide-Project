"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import parisImg from "@/assets/paris.jpg";
import parisImg1 from "@/assets/paris1.jpg";
import parisImg3 from "@/assets/paris3.jpg";
import parisImg4 from "@/assets/paris4.jpg"
import tokyoImg from "@/assets/tokyo.jpg";
import newyorkImg from "@/assets/Newyork.jpg";

const Page = () => {
  const { city } = useParams();
  const paris = [parisImg, parisImg1,parisImg3,parisImg4];

  return (
    <div className="text-white flex flex-col flex-wrap justify-center  min-h-screen mt-[100px] w-4/5 mx-auto ml-4">
      {/* {city} is a beautiful city  */}
      <h1 className="font-bold text-xl md:text-2xl">Welcome to {city}! Discover amazing sights and culture here.</h1>
      {city === "Paris" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 mx-auto">
          {paris.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={800}
              height={800}
              alt={`Paris Image ${index + 1}`}
              className="rounded shadow hover:opacity-80 transition-all bg-cover "
            />
          ))}
        </div>
      )}
      {city === "Tokyo" && (
        <Image
          src={tokyoImg}
          width={400}
          height={400}
          alt="tokyo img"
          className=" rounded"
        />
      )}
      {city === "NewYork" && (
        <Image
          src={newyorkImg}
          width={400}
          height={400}
          alt="New York img"
          className="mt-3 rounded"
        />
      )}
    </div>
  );
};

export default Page;
