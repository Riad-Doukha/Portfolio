"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  RiChatAiLine,
  RiEdit2Line,
  RiRocket2Line,
  RiTerminalLine,
} from "@remixicon/react";
import Link from "next/link";

function Process() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 500 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Set initial value and add event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${isSmallScreen?"-215vw":"-120vw"}`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "30% 30%",
          end: "1500 25%",
          scrub: 0,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" ref={triggerRef}>
      <div className="text-center mb-0 pt-20">
        <h1 className="text-h1">
          <span className="text-white">Process</span> Is Everything
        </h1>
        <p className="mt-2 text-p">
          Simple, streamlined process is what get's you results
        </p>
      </div>
      <div className="overflow-hidden">
        <div
          className="scroll-section-inner flex w-[400vw] md:flex-row flex-col"
          ref={sectionRef}
        >
          {/* Card 1 */}
          <div className="scroll-section w-screen md:w-[100vw] shrink-0  border bg-[#111111c8] m-5 px-5 py-8 rounded-lg group hover:text-white border-white">
            <div className="text-left [@media(max-width:550px)]:flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:text-center [@media(max-width:550px)]:items-center">
              <div className="mb-5 p-3 bg-black rounded-full max-w-max">
                <RiChatAiLine className="text-white"></RiChatAiLine>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-h2">
                Let's Get In Touch
              </h2>
              <p className="mb-4 line-clamp-5 text-p">
                Start by reaching out through our contact page. Fill out the
                form or book a call to discuss your project, goals, and ideas.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border  bg-[#111111c8] rounded-full text-center text-p text-white border-white">
                  Step 1
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="scroll-section w-screen md:w-[100vw] shrink-0  border bg-[#111111c8] m-5 p-8 rounded-lg group hover:text-white border-white">
            <div className="text-left [@media(max-width:550px)]:flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:text-center [@media(max-width:550px)]:items-center">
              <div className="mb-5 p-3 bg-black rounded-full max-w-max">
                <RiEdit2Line className="text-white"></RiEdit2Line>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-h2">
                Grab Your Designs
              </h2>
              <p className="mb-4 line-clamp-5 text-p">
                Tell me your unique vision, and I'll create stunning, functional
                designs that perfectly align with your goals
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border  bg-[#111111c8] rounded-full text-center text-p text-white border-white">
                  Step 2
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="scroll-section w-screen md:w-[100vw] shrink-0  border bg-[#111111c8] m-5 p-8 rounded-lg group hover:text-white border-white">
            <div className="text-left [@media(max-width:550px)]:flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:text-center [@media(max-width:550px)]:items-center">
              <div className="mb-5 p-3 bg-black rounded-full max-w-max">
                <RiTerminalLine className="text-white"></RiTerminalLine>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-h2">
                Kickstart Dev phase
              </h2>
              <p className="mb-4 line-clamp-5 text-p">
                I expertly transform your designs into a powerful, scalable
                solution, fully ready to launch
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border  bg-[#111111c8] rounded-full text-center text-p text-white border-white">
                  Step 3
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="scroll-section w-screen md:w-[100vw] shrink-0  border bg-[#111111c8] m-5 p-8 rounded-lg group hover:text-white border-white">
            <div className="text-left [@media(max-width:550px)]:flex [@media(max-width:550px)]:flex-col [@media(max-width:550px)]:text-center [@media(max-width:550px)]:items-center">
              <div className="mb-5 p-3 bg-black rounded-full max-w-max">
                <RiRocket2Line className="text-white"></RiRocket2Line>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-h2">And Hand Over</h2>
              <p className="mb-4 line-clamp-5 text-p">
                Receive a fully tested, polished, and high-quality product
                tailored to your needs with ongoing support
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border  bg-[#111111c8] rounded-full text-center text-p text-white border-white">
                  Step 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl px-3 mx-auto flex [@media(max-width:950px)]:flex-col items-center text-center md:text-start md:items-center justify-between gap-6 py-5">
        {/* Left Side */}
        <div>
          <div className="flex items-center justify-center mb-2">
            <h3 className="text-h2 text-white">I am with you in every step</h3>
          </div>
          <p className="text-p text-white">
            Alongside you at each step for a seamless experience
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-4 mt-4 md:mt-0 [@media(max-width:450px)]:flex-col">
          <button className="button-b rounded-full text-p hover:text-white hover:border-white">
            <Link href={"/projects"}>See All Projects</Link>
          </button>
          <button className="text-p text-black bg-white px-5 py-2.5 rounded-full font-semibold cursor-pointer hover:opacity-60">
            <Link href="/contact">Contact Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Process;
