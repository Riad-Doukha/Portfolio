"use client";
import { details } from "@/data/assets";
import { Details } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Det() {
  const { id } = useParams();
  const [selectedDetail, setSelectedDetail] = useState<Details | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const found = details.find((item) => item.id === id);
      setSelectedDetail(found ?? null);
    }
  }, [id]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text-center my-9 w-[60vw]">
          <h1 className="text-h1 text-center">
            <span className="text-white">Meet </span> My Project
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center gap-10 w-[84.5vw]">
          <div className="w-[40vw] [@media(max-width:767px)]:w-[78vw] [@media(max-width:767px)]:items-center [@media(max-width:767px)]:text-center flex flex-col justify-between">
            <div>
              <h1 className="text-h2 text-white">{selectedDetail?.title}</h1>
              <p className="text-p w-[90%] [@media(max-width:767px)]:w-full">
                {selectedDetail?.description}
              </p>
            </div>
            <div>
              <h3 className="text-h3 text-white mt-2">My task :</h3>
              <p className="text-p w-[90%] [@media(max-width:767px)]:w-full">
                {selectedDetail?.task}
              </p>
            </div>
            <button
              className={`button-b rounded-full max-w-max mt-5 text-p hover:text-white hover:border-white ${
                selectedDetail?.ready === false
                  ? "disable cursor-not-allowed"
                  : ""
              }`}
              onClick={(e) => {
                if (selectedDetail?.ready === false) {
                  e.preventDefault();
                }
              }}
            >
              <a
                href={selectedDetail?.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (selectedDetail?.ready === false) {
                    e.preventDefault();
                  }
                }}
              >
                {selectedDetail?.ready === false?"Coming Soon...":"See Demo"}
              </a>
            </button>
          </div>
          <div
            className={`border border-[#ffffff27] hover:border-white bg-[#111111c8] overflow-hidden rounded-2xl cursor-pointer h-[45vh] w-[40vw] p-5 [@media(max-width:767px)]:w-[78vw]`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img
              src={selectedDetail?.image}
              alt={selectedDetail?.title}
              className="w-full h-full object-cover block rounded-2xl border-[#ffffff27] border-2"
            />
          </div>
        </div>
      </div>
      <div
        className="min-h-[10vh] my-4 flex flex-col items-center justify-center  rounded-b-[64px]"
        id="qaa"
      >
        <div className="w-[50vw] max-w-[1400px]"></div>
        <footer className="py-5 flex flex-col justify-center space-y-6 w-[84.5vw]">
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
