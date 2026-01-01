"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-2 px-4 md:px-10 fixed bottom-0 w-full">
      <div className="max-w-6xl mx-auto ">

        {/* Bottom Text */}
        <div className="text-center text-gray-600 border-t border-gray-300 pt-4 text-sm md:text-base">
          © {new Date().getFullYear()} Travel Guide. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

