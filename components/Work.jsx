import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portofolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Project</h2>
      <p className="text-center max-2xl mx-auto mt-b mb-12 font-Ovo">
        Welcome to my web development portofolio! Explore a collection of
        project showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700 ">{project.description}</p>
              </div>
              <div className="border rouded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-slate-300 transition duration-500 rounded-xl">
                <a href={project.src} target="_blank">
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-5 "
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:shadow-black"
        href="https://github.com/ardiansetya">
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="right_arrow"
          className="w-4 "
        />
      </a>
    </div>
  );
};

export default Work;
