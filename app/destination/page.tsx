"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

const page = () => {
  const destination = ["Paris", "Tokyo", "NewYork"];
  const router = useRouter();
  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen p-2 sm:p-4 md:p-6 text-center">

  <div className="font-bold uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    Choose Your Destination
  </div>

  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 my-4 sm:my-5 md:my-6 p-2">
    {destination.map((d, index) => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        key={index}
        className="text-black font-bold text-sm sm:text-base md:text-xl lg:text-2xl text-center rounded-xl sm:rounded-2xl w-[120px] h-20 sm:w-[140px] sm:h-[90px] md:w-[150px] md:h-[100px] lg:w-[180px] lg:h-[110px] bg-white hover:opacity-50 transition-all cursor-pointer flex items-center justify-center"
        onClick={() => router.push(`/destination/${d}`)}
      >
        {d}
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default page;
