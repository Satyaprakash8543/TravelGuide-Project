"use client";
import React from "react";

import { motion } from "motion/react";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center text-white font-bold text-[40px] h-[70%] mt-15 "
    >
      <h1 className="text-center"> Welcome to our Travel Guide Website</h1>
    </motion.div>
  );
}

export default page;
