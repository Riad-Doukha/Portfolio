"use client";
import Gallery from "@/components/grid";
import { details } from "@/data/assets";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center my-10 w-[60vw]">
          <h1 className="text-h1 text-center">
            <span className="text-white">Elevating Brands</span> to Drive Success and Impact
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center gap-10 w-[84.5vw]">
          <Gallery assets={details} istrue={true} num={1}></Gallery>
        </div>
      </div>
      <div
        className="min-h-[15vh] my-10 flex flex-col items-center justify-center  rounded-b-[64px]"
        id="qaa"
      >
        <div className="w-[50vw] px-6 max-w-[1400px]"></div>
        <footer className="p-8 flex flex-col justify-center space-y-6 w-[84.5vw]">
          <div className="text-left flex justify-between items-center gap-5 [@media(max-width:1400px)]:gap-0 [@media(max-width:1400px)]:flex-col">
            <h1 className="text-h2 [@media(max-width:1400px)]:text-center">
              <span className="text-white">What are you waiting for?</span>{" "}
              Let's start working
            </h1>
            <div className="mt-10 mb-5 flex items-center [@media(max-width:400px)]:flex-col gap-5">
              <button className="button-b rounded-full text-p hover:text-white hover:border-white">
              <Link href={"/"}>Go Back Home</Link>
              </button>
              <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                <Link href={"/contact"}>Contact Now</Link>
              </button>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-center space-y-2 flex justify-between w-full text-h6 gap-5 [@media(max-width:525px)]:gap-0 [@media(max-width:525px)]:flex-col">
            <p>&copy; 2025 - Mohamed Riad Doukha</p>
            <p className="text-sm opacity-80 text-h6">
              Made by Me • Built with love
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}