import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center ">
        <a className="sm:text-3xl md:text-4xl text-2xl font-Outfit" href="#top">
          <span className="text-red-700">My</span> Portfolio
        </a>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          ardiansetya675@gmail.com
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p>&copy; 2025 Ardian Setya. All right reserved</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a target="_blank" href="https://github.com/ardiansetya">
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com/in/ardiansetya">
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/ardiiian_">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer
