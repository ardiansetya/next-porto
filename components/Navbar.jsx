import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
     const sideMenuRef = useRef()
     const [isScroll, setIsScroll] = useState(false)

     const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
     }
     const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
     }

     useEffect(()=> {
      window.addEventListener('scroll', () => {
        if (scrollY > 50) {
          setIsScroll(true)
        }else{
          setIsScroll(false);
        }
      })
     }, [])
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header"
          className="w-full"></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white shadow-sm bg-opacity-50 backdrop-blur-lg" : ""
        } `}>
        <a className="sm:text-3xl md:text-4xl text-2xl font-Outfit" href="#top">
          <span className="text-red-700">My</span> Portfolio
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? "duration-500"
              : "bg-white shadow-sm bg-opacity-50 duration-500"
          } `}>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#project">
              My Project
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex gap-6">
          {/* <button>
            <Image src={assets.moon_icon} alt="moon-icon" className="w-6" />
          </button> */}
          <a
            className="hidden font-Ovo lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="https://linkedin.com/in/ardiansetya"
            target="_blank">
            Connect with me{" "}
            <Image src={assets.arrow_icon} alt="arrow-icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image className="w-6" src={assets.menu_black} alt="menu" />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-50 transition duration-500">
          <div className="absolute top-6 right-6">
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#project">
              My Project
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
