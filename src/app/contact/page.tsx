"use client";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
} from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const handleClick = () => {
    window.location.href =
      "mailto:doukhamohamedriad@gmail.com?subject=Job%20Offer";
  };

  const [isOpen, setIsOpen] = useState("/me-black.png");
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center my-10 w-[84.5vw]">
          <h1 className="text-h1 text-center">
            <span className="text-white">Lets Collaborate</span> and Begin the
            work
          </h1>
          <p className=" mt-2 text-p text-center">
            We will reach out to you within the next 48hrs
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center gap-10 w-[84.5vw]">
          {/* Left Card (Profile) */}
          <div
            className="bg-[#111111c8] rounded-xl p-6 w-full md:w-1/3 shadow-md border-[#ffffff27] group hover:border-white border-1"
            onMouseEnter={() => setIsOpen("/me.png")}
            onMouseLeave={() => setIsOpen("/me-black.png")}
          >
            <img
              src={isOpen}
              alt="Riad Doukha"
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />
            <p className="text-green-400 text-sm mb-2">Available for work</p>
            <h2 className="text-h2 text-white mb-1">Hello, I'm Riad Doukha</h2>
            <p className="text-sm mb-4">
              Full-Stack Web Developer based in Algiers
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 text-xl mb-6">
              <a
                href="https://www.instagram.com/riad_doukha/"
                target="_blank"
                className="transition transform hover:scale-102 cursor-pointer duration-300 group-hover:text-white"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://github.com/Riad-Doukha"
                target="_blank"
                className="transition transform hover:scale-102 cursor-pointer duration-300 group-hover:text-white"
              >
                <RiGithubLine />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-riad-doukha-3a11b3332/"
                target="_blank"
                className="transition transform hover:scale-110 cursor-pointer duration-300 group-hover:text-white"
              >
                <RiLinkedinLine />
              </a>
              <button
                onClick={handleClick}
                className="transition transform hover:scale-110 cursor-pointer duration-300 group-hover:text-white"
                aria-label="Send email"
              >
                <RiMailLine />
              </button>
            </div>

            <a href="#to">
              <button className="button-b rounded-full text-sm hover:opacity-60 group-hover:text-white hover:border-white">
                Connect with me
              </button>
            </a>
          </div>

          {/* Right Card (About + Skills + Experience) */}
          <div className="bg-[#111111c8] rounded-xl p-6 w-full md:w-2/3 group shadow-md flex flex-col gap-6 border-[#ffffff27] group hover:border-white border-1 mt-5" id="to">
            <form className="w-full mx-auto p-5">
              <div className="flex justify-between [@media(max-width:600px)]:flex-col">
                <div className="mb-5 w-[47%] [@media(max-width:600px)]:w-full">
                  <label className="block mb-1 text-white">NAME</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border border-[#ffffff27] rounded-xl bg-background hover:border-white focus:outline-none focus:border-white placeholder:text-p text-p"
                  />
                </div>

                <div className="mb-5 w-[47%] [@media(max-width:600px)]:w-full">
                  <label className="block mb-1 text-white">EMAIL</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-[#ffffff27] rounded-xl bg-background hover:border-white focus:outline-none focus:border-white placeholder:text-p text-p"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-white">WEBSITE</label>
                <input
                  type="url"
                  placeholder="Company Website"
                  className="w-full p-2 border border-[#ffffff27] rounded-xl bg-background hover:border-white focus:outline-none focus:border-white placeholder:text-p text-p"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-white">BUDGET</label>
                <select className="w-full bg-background p-2 border border-[#ffffff27] rounded-xl hover:border-white focus:outline-none focus:border-white placeholder:text-p text-p">
                  <option className="bg-background">Select Budget...</option>
                  <option className="bg-background">
                    10 000 Da - 50 000 DA
                  </option>
                  <option className="bg-background">
                    50 000 DA - $150 000 DA
                  </option>
                  <option className="bg-background">150 000 DA +</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-white">MESSAGE</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-[#ffffff27] rounded-xl h-[100px] bg-background hover:border-white focus:outline-none focus:border-white placeholder:text-p text-p"
                />
              </div>

              <button
                type="submit"
                className="button-b rounded-full text-p hover:text-white [@media(max-width:600px)]:mx-auto [@media(max-width:600px)]:w-full"
              >
                Send your message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="min-h-[15vh] my-10 flex flex-col items-center justify-center  rounded-b-[64px]">
        <div className="w-[50vw] px-6 max-w-[1400px]"></div>
        <footer className="py-8 flex flex-col justify-center space-y-6 w-[84.5vw]">
          <div className="text-left flex justify-between items-center gap-5 [@media(max-width:1400px)]:gap-0 [@media(max-width:1400px)]:flex-col">
            <h1 className="text-h2 [@media(max-width:1400px)]:text-center">
              <span className="text-white">What are you waiting for?</span>{" "}
              Let's start working
            </h1>
            <div className="mt-10 mb-5 flex items-center [@media(max-width:400px)]:flex-col gap-5">
              <button className="button-b rounded-full text-p hover:text-white hover:border-white">
                <Link href={"/projects"}>See All Projects</Link>
              </button>
              <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                <Link href={"/"}>Go Back Home</Link>
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
