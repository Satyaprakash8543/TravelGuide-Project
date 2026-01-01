"use client";

import React from "react";
import { motion } from "motion/react";

const Page = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 40 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6 }}
    //   className=" flex justify-center items-center bg-gray-200 p-4 md:p-16  sm:my-2  "
    // >
    //   <form className="bg-gray-800 w-[600] h-[450]     rounded-lg shadow-lg p-6">
    //     <h2 className="text-center text-white font-bold text-3xl mb-6">
    //       Contact Form
    //     </h2>

    //     <div className="mb-5">
    //       <label className="block text-gray-300 mb-2">Name</label>
    //       <input
    //         type="text"
    //         placeholder="Enter name"
    //         className="w-full p-3 rounded bg-gray-700 text-white border border-gray-300 focus:outline-none focus:ring-2 "
    //       />
    //     </div>

    //     <div className="mb-5">
    //       <label className="block text-gray-300 mb-2">Email</label>
    //       <input
    //         type="email"
    //         placeholder="Enter email"
    //         className="w-full p-3 rounded bg-gray-700 text-white border border-gray-200 focus:outline-none focus:ring-2 "
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label className="block text-gray-300 mb-2">Password</label>
    //       <input
    //         type="password"
    //         placeholder="Enter password"
    //         className="w-full p-3 rounded bg-gray-700 text-white border border-gray-200 focus:outline-none focus:ring-2"
    //       />
    //     </div>

    //     <motion.button
    //       initial={{ opacity: 0 }}
    //       whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
    //       whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    //       whileInView={{ opacity: 1 }}
    //       type="submit"
    //       className="w-full bg-blue-600 cursor-pointer text-black font-semibold py-3 rounded transition-all"
    //     >
    //       Submit
    //     </motion.button>
    //   </form>
    // </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center bg-gray-200 p-4 sm:p-6 md:p-12 lg:p-16 min-h-screen"
    >
      <form className="bg-gray-800 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-lg p-4 sm:p-6 md:p-8  ">
        <h2 className="text-center text-white font-bold text-2xl sm:text-3xl mb-4 sm:mb-6">
          Contact Form
        </h2>

        <div className="mb-4 sm:mb-4">
          <label className="block text-gray-300 mb-1 sm:mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-300 focus:outline-none focus:ring-2"
          />
        </div>

        <div className="mb-4 sm:mb-4">
          <label className="block text-gray-300 mb-1 sm:mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-200 focus:outline-none focus:ring-2"
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label className="block text-gray-300 mb-1 sm:mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-200 focus:outline-none focus:ring-2"
          />
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
          whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          whileInView={{ opacity: 1 }}
          type="submit"
          className="w-full bg-blue-600 cursor-pointer text-black font-semibold py-2 sm:py-3 rounded transition-all"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Page;
