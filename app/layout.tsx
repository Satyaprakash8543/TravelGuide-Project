import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Nav';
import Footer from "@/components/Footer";

 const poppins=Poppins({
  subsets:["latin"],
  weight:['400','600'],
  display:"swap"     
 })

export const metadata: Metadata = {
  title: "Travel Guide Website",
  description: "best travel guidence",
};

 export default function RootLayout({
  children,
 }: Readonly<{
  children: React.ReactNode;
 }>) {
      return (
         <html lang="en">
          <body
          className={`${poppins.className} w-screen h-screen bg-black` }
         
          >
            <Nav/>
          {children}
          <Footer/>
          </body>
          </html>
         );
    }
