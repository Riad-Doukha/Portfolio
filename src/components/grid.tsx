"use client";
import { Details, Layer } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
// 1. Import the Masonry component
import Masonry from "react-masonry-css";

// 2. Define the responsive column layout
const breakpointColumnsObj = {
  default: 2,
  767: 1,
};

const Gallery = ({
  assets,
  istrue,
  num = 0,
}: {
  assets: any;
  istrue: boolean;
  num?: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid py-16"
      columnClassName="my-masonry-grid_column"
    >
      {istrue
        ? assets.map((item: Details, i: number) => (
            <Link
              key={i}
              href={`/projects/${item.id}`}
            >
              <div
                className={`border border-[#ffffff27] hover:border-white bg-[#111111c8] overflow-hidden rounded-2xl transition transform hover:scale-[1.02] cursor-pointer duration-300 
                ${
                  num == 0
                    ? i % 4 === 0 || i % 4 === 3
                      ? "h-[60vh]"
                      : "h-[30vh] flex items-center justify-center"
                    : "h-[50vh]"
                } 
                w-[40vw] p-5 [@media(max-width:767px)]:w-[78vw] mb-5 [@media(max-width:767px)]:h-[45vh]`}
                onMouseEnter={() =>
                  setIsOpen((prev) => {
                    const newState = [...prev];
                    newState[i] = true;
                    return newState;
                  })
                }
                onMouseLeave={() =>
                  setIsOpen((prev) => {
                    const newState = [...prev];
                    newState[i] = false;
                    return newState;
                  })
                }
              >
                <img
                  src={isOpen[i] ? item.image : item.black}
                  alt={item.url}
                  className="w-full h-full object-cover block rounded-2xl border-[#ffffff27] border-2"
                />
              </div>
            </Link>
          ))
        : assets.map((item: Layer, i: number) => (
            <div
              key={i}
              className={`border border-[#ffffff27] hover:border-white bg-[#111111c8] overflow-hidden rounded-2xl transition transform hover:scale-[1.02] cursor-pointer duration-300 
            ${
              i % 4 === 0 || i % 4 === 3
                ? "h-[60vh]"
                : "h-[30vh] flex items-center justify-center"
            } 
            w-full p-5 [@media(max-width:767px)]:w-full`}
              onMouseEnter={() =>
                setIsOpen((prev) => {
                  const newState = [...prev];
                  newState[i] = true;
                  return newState;
                })
              }
              onMouseLeave={() =>
                setIsOpen((prev) => {
                  const newState = [...prev];
                  newState[i] = false;
                  return newState;
                })
              }
            >
              <div
                className={`${
                  i % 4 !== 0 && i % 4 !== 3
                    ? "flex flex-col items-center justify-center"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3 w-full">
                  <div className="text-white text-2xl">{item.icon}</div>
                  <h2 className="text-white text-h5 font-semibold">
                    {item.title}
                  </h2>
                </div>
                <p className="text-p text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Conditionally Render Image for Big Containers */}
              {(i % 4 === 0 || i % 4 === 3) && (
                <img
                  src={isOpen[i] ? item.image : item.black}
                  alt={item.title}
                  className="w-full h-full object-cover mt-4 rounded-2xl border-[#ffffff27]"
                />
              )}
            </div>
          ))}
    </Masonry>
  );
};

export default Gallery;
