import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 flex justify-center items-center w-full my-10 z-[1000] [@media(max-width:620px)]:hidden">
      <ul className="list-none w-[65vw] flex justify-evenly rounded-full bg-transparent backdrop-blur-sm py-3 font-semibold text-p border-2 border-[#ffffff27] hover:text-white hover:border-white">
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <a href="#about">About me</a>
        </li>
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <a href="#qaa">FAQ</a>
        </li>
        <li className="hover:text-white transition transform hover:scale-105 duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
