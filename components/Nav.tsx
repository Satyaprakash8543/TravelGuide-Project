"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // hamburger icons

import { motion } from "motion/react";

const Nav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

 

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-bold"
        >
          🌍Travel Guide
        </motion.h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-blue-500" : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destination"
              className={`${
                pathname === "/destination" ? "text-blue-500" : ""
              }`}
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "text-blue-500" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden bg-white flex flex-col gap-4 py-4 px-6 text-lg shadow-md">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-blue-500" : ""}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/destination"
              className={`${
                pathname === "/destination" ? "text-blue-500" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${pathname === "/contact" ? "text-blue-500" : ""}`}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
