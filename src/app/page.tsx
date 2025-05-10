"use client";
import Draggable from "@/components/cards";
import Faq from "@/components/faq";
import Gallery from "@/components/grid";
import NavBar from "@/components/navBar";
import Process from "@/components/process";
import { Scroller } from "@/components/scroller";
import { details, items1, items2, layers, riad } from "@/data/assets";
import { RiArrowRightUpLine, RiCodeSSlashLine, RiCursorLine, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiMailLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     // Simulate setup logic: API calls, auth checks, etc.
  //     await new Promise(resolve => setTimeout(resolve, 2000)); // Example delay
  //     // Once everything is ready
  //     setIsReady(true);
  //   }

  //   prepare();
  // }, []);

  // if (!isReady) {
  //   return <div>Loading...</div>; // or your custom loading component
  // }

  const handleClick = () => {
    window.location.href =
      "mailto:doukhamohamedriad@gmail.com?subject=Job%20Offer";
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full h-[150vh] sky">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 [mask-image:linear-gradient(to_bottom,black_0%,transparent_0%,white_20%,white_90%,transparent_100%,black_100%)]"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="star rounded-full"></div>
        <div className="star rounded-full"></div>
        <div className="star rounded-full"></div>

        <div
          className="relative z-10 flex flex-col items-center justify-center h-auto px-[50px]"
          id="home"
        >
          <NavBar></NavBar>

          <div className="max-w-[1400px] self-start flex justify-between h-[100vh] [@media(max-width:1130px)]:h-[80vh] items-center">
            <div className="">
              <button className="group button-b flex gap-2 rounded-full text-p max-w-max cutsor-pointer mb-5 items-center [@media(max-width:450px)]:mx-auto">
                <RiCodeSSlashLine className="group-hover:text-white group-hover:border-white"></RiCodeSSlashLine>
                <p className="group-hover:text-white group-hover:border-white">
                  Web Developer
                </p>
              </button>
              <div className="flex flex-col [@media(max-width:450px)]:justify-center w-full">
                <div className="flex gap-2 items-center">
                  <h1 className="text-h1 [@media(max-width:450px)]:text-center [@media(max-width:450px)]:w-full">
                    <span className="text-white">Mohamed Riad</span> Doukha
                  </h1>
                  <a href="#about">
                    <div className="bg-black p-3 [@media(max-width:450px)]:hidden rounded-full text-white max-w-max border-t-2 border-t-[#ffffff27] border-l-2 border-l-[#ffffff26] cursor-pointer">
                      <RiArrowRightUpLine></RiArrowRightUpLine>
                    </div>
                  </a>
                </div>
                <p className="w-[50vw] text-p [@media(max-width:450px)]:text-center [@media(max-width:450px)]:w-full">
                  I'm a full-stack web developer with a passion for building
                  dynamic, responsive web applications. I enjoy handling both
                  the front-end and back-end to create seamless user experiences
                  and robust solutions.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-5 [@media(max-width:450px)]:justify-center [@media(max-width:365px)]:flex-col">
                <button className="button-b rounded-full text-p hover:text-white hover:border-white">
                  <Link href={"/projects"}>See All Projects</Link>
                </button>
                <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                  <Link href="/contact">Contact Now</Link>
                </button>
              </div>
            </div>
            <div className="[@media(max-width:1130px)]:hidden">
              <div className="bouncing-element1 rounded-2xl ml-[5vw] mb-2 rotate-[-12deg] border-2 hover:border-white border-[#ffffff27] flex justify-center items-center p-5">
                <h1 className="text-white">
                  "Working with him was a game changer"
                </h1>
                <RiCursorLine className="absolute bottom-[-20px] right-[-20px] text-white rotate-[85deg]"></RiCursorLine>
              </div>
              <div className="bouncing-element2 text-white rounded-2xl ml-[25vw] rotate-[8deg] border-2 hover:border-white border-[#ffffff27] flex justify-center items-center p-5">
                <h1 className="text-white">
                  "He built me a stunning web application"
                </h1>
                <RiCursorLine className="absolute top-[-20px] left-[-30px] text-white rotate-[-45deg]"></RiCursorLine>
              </div>
            </div>
          </div>
          <Gallery assets={details} istrue={true}></Gallery>
          <div className="min-h-screen w-[84.5vw] px-6 py-20" id="about">
            {/* Badge + Heading */}
            <div className="text-center mb-10">
              <h1 className="text-h1">
                <span className="text-white">Mohamed Riad</span> Doukha
              </h1>
              <p className=" mt-2 text-p">
                Brief initial presentation of myself and my previous
                experiences.
              </p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row justify-center gap-10">
              {/* Left Card (Profile) */}
              <div
                className="bg-[#111111c8] rounded-xl p-6 w-full md:w-1/3 shadow-md border-[#ffffff27] group hover:border-white border-1"
                onMouseEnter={() =>
                  setIsOpen((prev) => {
                    return !prev;
                  })
                }
                onMouseLeave={() =>
                  setIsOpen((prev) => {
                    return !prev;
                  })
                }
              >
                {isOpen ? (
                  <img
                    src={riad.image}
                    alt="Riad Doukha"
                    className="rounded-lg mb-4 w-full h-60 object-cover"
                  />
                ) : (
                  <img
                    src={riad.black}
                    alt="Riad Doukha"
                    className="rounded-lg mb-4 w-full h-60 object-cover"
                  />
                )}
                <p className="text-green-400 text-sm mb-2">
                  Available for work
                </p>
                <h2 className="text-h2 text-white mb-1">
                  Hello, I'm Riad Doukha
                </h2>
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

                <button className="button-b rounded-full text-sm hover:opacity-60 group-hover:text-white group-hover:border-white">
                  Connect with me
                </button>
              </div>

              {/* Right Card (About + Skills + Experience) */}
              <div className="bg-[#111111c8] rounded-xl p-6 w-full md:w-2/3 group shadow-md flex flex-col gap-6 border-[#ffffff27] hover:border-white border-1">
                {/* Bio */}
                <p className=" leading-relaxed group-hover:text-white">
                  I'm Mohamed Riad Doukha, a dedicated Full-Stack Developer
                  based in the vibrant city of Algiers, Algeria. I specialize in
                  building responsive, user-friendly web applications, combining
                  intuitive front-end design with powerful back-end systems.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 text-sm border-t border-[#2a2a2a] group-hover:border-white pt-4">
                  {[
                    "Responsive Design",
                    "RESTful API",
                    "UI/UX",
                    "Version Control",
                    "Deployment",
                    "Databases",
                    "Problem Solving",
                    "WebSockets",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 bg-[#1d1d1d] rounded-md group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <div className="border-t border-[#2a2a2a] group group-hover:border-white py-4 grid grid-cols-1 gap-4 text-sm">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-white">
                        Artificial Intelligence Engineering Student
                      </span>
                      <span>
                        ENSIA (National Higher School of Artifitial
                        Intelligence)
                      </span>
                    </div>
                    <span className="ml-5 group-hover:text-white">present</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-white">
                        Full stack web developement
                      </span>
                      <span>GoMyCode</span>
                    </div>
                    <span className="ml-5 group-hover:text-white">2025</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-white">
                        Baccalaureat - Mathematics Stream
                      </span>
                      <span>Mohamed Mazari High School</span>
                    </div>
                    <span className="ml-5 group-hover:text-white">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="min-h-screen flex items-center justify-center bg-black rounded-[64px]"
          id="services"
        >
          <div className="w-[84.5vw] px-6 pb-20 max-w-[1400px]">
            <Process></Process>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-[84.5vw] px-6 py-20 max-w-[1400px]">
            <div className="flex items-center justify-between [@media(max-width:865px)]:text-center [@media(max-width:865px)]:flex-col">
              <div className="text-left mb-10">
                <h1 className="text-h1 [@media(max-width:865px)]:text-center">
                  <span className="text-white">Web</span> Services
                </h1>
                <p className="mt-2 text-p [@media(max-width:865px)]:text-center">
                  Explore a suite of web-dev services to elevate your brand.
                </p>
              </div>
              <button className="text-p text-black bg-white px-5 py-2.5 rounded-full font-semibold cursor-pointer hover:opacity-60">
                <Link href="/contact">Contact Now</Link>
              </button>
            </div>
            <Gallery assets={layers} istrue={false}></Gallery>
            <Scroller items={items1}></Scroller>
            <Scroller items={items2} direction="right"></Scroller>
          </div>
        </div>

        <div
          className="min-h-screen flex flex-col items-center justify-center"
          id="projects"
        >
          <div className="w-[84.5vw] px-6 pb-10 pt-20 max-w-[1400px]">
            <div className="flex items-center justify-between gap-3 [@media(max-width:865px)]:flex-col">
              <div className="text-left">
                <h1 className="text-h1 [@media(max-width:865px)]:text-center">
                  <span className="text-white">Recent</span> Projects
                </h1>
                <p className="mt-2 text-p [@media(max-width:865px)]:text-center">
                  Showcase of some of my recent sleek websites.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-4 [@media(max-width:365px)]:flex-col">
                <button className="button-b rounded-full text-p hover:text-white hover:border-white">
                  <Link href={"/projects"}>See All Projects</Link>
                </button>
                <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                  <Link href="/contact">Contact Now</Link>
                </button>
              </div>
            </div>
          </div>
          <Gallery assets={details} istrue={true}></Gallery>
        </div>

        <div className="min-h-screen z-0 flex flex-col items-center justify-center pb-20">
          <div className="w-[84.5vw] px-6 pt-20 max-w-[1400px]">
            <div className="flex items-center justify-center gap-3 [@media(max-width:865px)]:flex-col">
              <div className="text-left">
                <h1 className="text-h1 text-center">
                  <span className="text-white">Why me as</span> your developer
                </h1>
                <p className="mt-2 text-p text-center">
                  Why Partner with Me for Excellence
                </p>
              </div>
            </div>
            <Draggable></Draggable>
          </div>
        </div>

        <div
          className="min-h-screen flex flex-col items-center justify-center relative [mask-image:linear-gradient(to_bottom,black_0%,transparent_0%,white_15%,white_90%,transparent_100%,black_80%)]"
          id="testimonials"
        >
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="w-[84.5vw] px-6 max-w-[1400px]">
            <div className="container mx-auto h-full">
              {/* Main content with sticky cards */}
              <div className="relative flex [@media(max-width:755px)]:flex-col justify-between gap-3 py-[100px]">
                {/* Left sticky title */}
                <div className="h-53 sticky top-[150px] w-[40vw] [@media(max-width:755px)]:h-[500px] [@media(max-width:755px)]:w-full  [@media(max-width:1042px)]:h-70">
                  <div className="sticky top-0">
                    <div className="flex items-start justify-start h-[420px] [@media(max-width:755px)]:h-[620px]">
                      <div className="text-left [@media(max-width:755px)]:w-full">
                        <h1 className="text-h1 [@media(max-width:755px)]:text-center">
                          <span className="text-white">Clients</span> Love me
                        </h1>
                        <p className="mt-2 text-p [@media(max-width:755px)]:text-center">
                          Trusted by 10+ happy clients, adding $2k+ in revenue.
                        </p>
                        <div className="mt-10 mb-5 flex [@media(max-width:755px)]:justify-center [@media(max-width:365px)]:flex-col items-center gap-5">
                          <button className="button-b rounded-full text-p hover:text-white hover:border-white">
                            <Link href={"/projects"}>See All Projects</Link>
                          </button>
                          <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                            <Link href="/contact">Contact Now</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right sticky cards column */}
                <div className="flex flex-col gap-15">
                  <div className="border border-[#ffffff27] hover:border-white bg-[#111111] w-[31vw] [@media(max-width:755px)]:w-full h-auto sticky top-[150px] [@media(max-width:755px)]:top-[420px] p-6 rounded-md shadow-md">
                    <h3 className="text-h5 text-white font-semibold mb-2">
                      Sara J.
                    </h3>
                    <p className="text-p italic">
                      "An outstanding experience! The design is smooth and
                      user-friendly."
                    </p>
                    <p className="mt-4 text-yellow-600 font-bold">★★★★★</p>
                  </div>

                  <div className="border border-[#ffffff27] hover:border-white bg-[#111111] w-[31vw] h-auto sticky top-[170px] [@media(max-width:755px)]:w-full [@media(max-width:755px)]:top-[440px] p-6 rounded-md shadow-md">
                    <h3 className="text-h5 text-white font-semibold mb-2">
                      Rayan R.
                    </h3>
                    <p className="text-p italic">
                      "Highly professional work and great attention to detail.
                      Strongly recommended!"
                    </p>
                    <p className="mt-4 text-yellow-600 font-bold">★★★★☆</p>
                  </div>

                  <div className="border border-[#ffffff27] hover:border-white bg-[#111111] w-[31vw] [@media(max-width:755px)]:w-full h-auto sticky top-[190px] [@media(max-width:755px)]:top-[460px] p-6 rounded-md shadow-md">
                    <h3 className="text-h5 text-white font-semibold mb-2">
                      Layla M.
                    </h3>
                    <p className="text-p italic">
                      "The project was done exactly as envisioned, and the team
                      was very cooperative."
                    </p>
                    <p className="mt-4 text-yellow-600 font-bold">★★★★★</p>
                  </div>

                  <div className="border border-[#ffffff27] hover:border-white bg-[#111111] w-[31vw] [@media(max-width:755px)]:w-full h-auto sticky top-[210px] [@media(max-width:755px)]:top-[480px] p-6 rounded-md shadow-md">
                    <h3 className="text-h5 text-white font-semibold mb-2">
                      Karim A.
                    </h3>
                    <p className="text-p italic">
                      "Fast delivery, excellent communication, and high-quality
                      final result."
                    </p>
                    <p className="mt-4 text-yellow-600 font-bold">★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="min-h-screen flex flex-col items-center justify-center py-[100px] bg-black rounded-b-[64px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_0%,white_20%)]"
          id="qaa"
        >
          <div className="w-[84.5vw] px-6 max-w-[1400px]">
            <div className="container mx-auto h-full">
              {/* Main content with sticky cards */}
              <div className="relative flex [@media(max-width:755px)]:flex-col justify-between gap-3">
                {/* Left sticky title */}
                <div className="h-53 [@media(max-width:1285px)]:h-80 w-[40vw] sticky top-[150px] [@media(max-width:755px)]:h-[830px] [@media(max-width:365px)]:h-[880px] [@media(max-width:755px)]:w-full">
                  <div className="text-left [@media(max-width:755px)]:h-[620px] [@media(max-width:755px)]:w-full">
                    <h1 className="text-h1 [@media(max-width:755px)]:text-center">
                      <span className="text-white">Questions, </span>Answers
                    </h1>
                    <p className="mt-2 text-p [@media(max-width:755px)]:text-center">
                      Get quick answers to your most pressing questions
                    </p>
                    <div className="mt-10 mb-5 [@media(max-width:365px)]:flex-col flex [@media(max-width:755px)]:justify-center items-center gap-5">
                      <button className="button-b rounded-full text-p hover:text-white hover:border-white">
                        <Link href={"/projects"}>See All Projects</Link>
                      </button>
                      <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                        <Link href="/contact">Contact Now</Link>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right sticky cards column */}
                <Faq></Faq>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[43vh] flex flex-col items-center justify-center mb-[200px]  rounded-b-[64px]">
          <div className="w-[50vw] px-6 max-w-[1400px]"></div>
          <footer className="p-8 flex flex-col justify-center space-y-6 w-[84.5vw]">
            <div className="text-left flex justify-between items-center gap-5 [@media(max-width:1000px)]:gap-0 [@media(max-width:1000px)]:flex-col">
              <h1 className="text-h1 [@media(max-width:1000px)]:text-center">
                <span className="text-white">Let's start</span> working
              </h1>
              <div className="mt-10 mb-5 flex items-center gap-5">
                <button className="text-p text-black bg-white px-[20px] py-[10px] rounded-full font-semibold cursor-pointer hover:opacity-60">
                  <Link href="/contact">Contact Now</Link>
                </button>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="flex space-x-8 text-sm [@media(max-width:1000px)]:justify-center [@media(max-width:486px)]:space-y-1 [@media(max-width:486px)]:space-x-0 [@media(max-width:486px)]:items-center [@media(max-width:486px)]:flex-col">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
              <a href="#profile" className="hover:text-white">
                Profile
              </a>
              <a href="#testimonials" className="hover:text-white">
                Reviews
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
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
      </div>
    </div>
  );
}
