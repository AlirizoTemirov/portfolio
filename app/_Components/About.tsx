import { FaArrowRight, FaCode } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { IoCheckmarkCircleOutline, IoLocationOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";

export default function About() {
  return (
    <section id="about">
      <div className="bg-[url('/about-background.png')] bg-cover bg-center">
        <div className="max-w-360 px-5 mx-auto pb-14 pt-38 flex">
          <div className="w-[50%] max-[950px]:w-full">
            <p className="text-blue-400 text-[12px] max-[580px]:text-[10px] max-[1270px]:text-[10px] max-[1060px]:text-[8px] max-[950px]:text-[12px] font-semibold">
              FRONTEND DEVELOPER
            </p>
            <h1 className="text-6xl max-[580px]:text-[41px] max-[580px]:leading-13 max-[950px]:text-6xl max-[950px]:leading-15 max-[1270px]:text-[52px] max-[1060px]:text-[48px] leading-14 max-[1060px]:leading-12 font-bold text-white mt-2 flex flex-col gap-2">
              Hi, I'm <span className="text-blue-600">Alirizo Temirov</span>
            </h1>
            <p className="text-gray-400 mt-5 max-[580px]:text-[13px] max-[950px]:text-[16px] max-[1270px]:text-[14px] max-[1060px]:text-[12px] max-w-90 max-[950px]:max-w-90 max-[1270px]:max-w-80 max-[1060px]:max-w-70">
              I build modern, responsive and user-friendly web applications with
              clean code and great experience.
            </p>

            <div className="flex gap-5 mt-7">
              <a
                className="flex pl-7 max-[580px]:pl-4 max-[950px]:pl-7 max-[1270px]:pl-5 max-[1060px]:pl-4 items-center max-[580px]:text-sm max-[950px]:text-[16px] max-[1270px]:text-sm max-[1060px]:text-[12px] py-3 max-[580px]:py-2 max-[950px]:py-3 max-[1060px]:py-2 gap-2 text-white bg-blue-600 w-45 max-[580px]:w-38 max-[950px]:w-45 max-[1270px]:w-38 max-[1060px]:w-32 rounded-2xl max-[580px]:rounded-md max-[950px]:rounded-2xl max-[1060px]:rounded-md hover:gap-3 hover:bg-blue-500 transition-all"
                href="#projects"
              >
                View Projects <FaArrowRight className="mt-0.5" />
              </a>
              <a
                className="flex items-center max-[580px]:text-sm max-[950px]:text-[16px] max-[1270px]:text-sm max-[1060px]:text-[12px] justify-center py-3 max-[580px]:py-2 max-[950px]:py-3 max-[1060px]:py-2 gap-2 text-white border border-gray-400 w-45 max-[580px]:w-38 max-[950px]:w-45 max-[1270px]:w-38 max-[1060px]:w-32 rounded-2xl max-[950px]:rounded-2xl max-[580px]:rounded-md max-[1060px]:rounded-md hover:border-white transition-all"
                href="#contact"
              >
                <MdOutlineMailOutline size={21} className="mt-[1]" /> Contact Me
              </a>
            </div>

            <div className="flex mt-10">
              <div className="flex items-center pr-10 max-[580px]:pr-6 max-[950px]:pr-10 max-[1270px]:pr-6 gap-3">
                <FaCode className="text-blue-500 text-[25px] max-[580px]:text-[20px] max-[950px]:text-[25px] max-[1270px]:text-[22px]" />
                <p className="flex flex-col text-white text-lg max-[580px]:text-[15px] max-[950px]:text-lg max-[1270px]:text-[14px] font-bold">
                  +10{" "}
                  <span className="text-[12px] max-[580px]:text-[8px] max-[950px]:text-[12px] max-[1270px]:text-[10px] text-gray-400 font-normal">
                    Projects
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3 px-10 max-[580px]:px-6 max-[950px]:px-10 max-[1270px]:px-6 border-x border-gray-600">
                <CiCalendar className="text-blue-500 text-[30px] max-[580px]:text-[25px] max-[950px]:text-[30px] max-[1270px]:text-[27px]" />
                <p className="flex flex-col text-white text-lg max-[580px]:text-[15px] max-[950px]:text-lg max-[1270px]:text-[14px] font-bold">
                  1+{" "}
                  <span className="text-[12px] max-[580px]:text-[8px] max-[950px]:text-[12px] max-[1270px]:text-[10px] text-gray-400 font-normal">
                    Years Learning
                  </span>
                </p>
              </div>

              <div className="flex items-center pl-10 max-[580px]:pl-6 max-[950px]:pl-10 max-[1270px]:pl-6 gap-3">
                <IoCheckmarkCircleOutline className="text-blue-500 text-[25px] max-[580px]:text-[20px] max-[950px]:text-[25px] max-[1270px]:text-[22px]" />
                <p className="flex flex-col text-white text-lg max-[580px]:text-[15px] max-[950px]:text-lg max-[1270px]:text-[14px] font-bold">
                  100%{" "}
                  <span className="text-[12px] max-[580px]:text-[8px] max-[950px]:text-[12px] max-[1270px]:text-[10px] text-gray-400 font-normal">
                    Dedication
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[50%] max-[950px]:hidden relative">
            <img
              className="w-25 max-[1200px]:w-22 max-[1060px]:w-20 absolute top-35 right-128 max-[1180px]:right-120 max-[1150px]:right-115 max-[1060px]:right-98 animate-bounce-slow"
              src="/react.png"
              alt="react"
            />
            <img
              className="w-25 max-[1200px]:w-22 max-[1060px]:w-20 absolute top-4 right-115 max-[1180px]:right-105 max-[1150px]:right-100 max-[1060px]:right-86 animate-bounce-medium"
              src="/code.png"
              alt="code"
            />
            <img
              className="w-25 max-[1200px]:w-22 max-[1060px]:w-20 absolute top-8 max-[1060px]:top-10 right-8 max-[1180px]:right-3 max-[1060px]:right-0 animate-bounce-fast"
              src="/nextjs.png"
              alt="nextjs"
            />
            <img
              className="w-25 max-[1200px]:w-22 max-[1060px]:w-20 absolute bottom-6 right-10 max-[1180px]:right-5 max-[1060px]:right-3 animate-bounce-long"
              src="/tailwind.png"
              alt="tailwindcss"
            />
            <img
              className="w-25 max-[1200px]:w-22 max-[1060px]:w-20 absolute top-38 max-[1060px]:top-36 right-15 max-[1180px]:right-11 max-[1060px]:right-8 animate-bounce-delay"
              src="/ts.png"
              alt="typescript"
            />
            <img
              className="w-125 max-[1270px]:w-120 max-[1150px]:w-110 max-[1060px]:w-100 absolute object-contain animate-float right-38 max-[1180px]:right-32 max-[1060px]:right-26 mt-10 max-[1060px]:mt-14"
              src="/noutbook.png"
              alt="Developer leptop"
            />
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="max-w-350 px-15 py-8 max-[631px]:px-4 max-[631px]:py-5  bg-[#050E20] border border-gray-800 rounded-2xl mx-auto flex max-[921px]:flex-col max-[921px]:items-center gap-15 max-[1200px]:gap-10">
          <img
            className="w-87.5 h-87.5 max-[631px]:w-85 max-[631px]:h-80 max-[921px]:w-87.5 max-[921px]:h-87.5 max-[1200px]:w-80 max-[1200px]:h-80 max-[1020px]:w-70 max-[1020px]:h-68.75 max-[1001px]:h-72.5 object-cover rounded-2xl"
            src="/my-photo.png"
            alt="my photo"
          />
          <div className="w-[72%] max-[921px]:w-full">
            <p className="font-bold max-[631px]:text-[9px] max-[1200px]:text-[14px] max-[1020px]:text-[12px] text-blue-500">
              ABOUT ME
            </p>
            <h1 className="text-white font-semibold mt-2 text-4xl max-[631px]:text-[18px] max-[1200px]:text-[32px] max-[1020px]:text-[30px]">
              Building the web with passion
            </h1>
            <p className="text-gray-400 mt-5 max-[631px]:text-[10px] text-[17px] max-[1200px]:text-[15px] max-[1020px]:text-[13px] max-w-145 flex flex-col">
              I'm a frontend developer who loves turning ideas into functional
              and beautiful web applications. I focus on writing clean,
              maintainable code and creating seamless user experiances.{" "}
              <span className="mt-2">
                I work with modern technologies like Next.js, React, TypeScript
                and Tailwind CSS. I'm always learning and building to improve
                every day.
              </span>
            </p>

            <div className="max-w-200 border-2 border-gray-800 mt-11 max-[1103px]:mt-7 rounded-2xl flex justify-between max-[631px]:flex-col">
              <div className="flex items-center gap-5 max-[631px]:gap-3 justify-center max-[631px]:w-full max-[631px]:justify-start max-[631px]:py-2 max-[631px]:px-5 w-[32%] px-2">
                <IoLocationOutline className="text-blue-500 text-[23px] max-[1020px]:text-[21px] max-[631px]:text-[19px]" />
                <div>
                  <p className="text-[14px] max-[631px]:text-[10px] text-gray-400 max-[1260px]:text-[12px] max-[1020px]:text-[10px]">
                    Location
                  </p>
                  <p className="text-white max-[1260px]:text-[14px] max-[1020px]:text-[12px] max-[631px]:text-[12px]">
                    Bukhara, Uzbekistan
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 max-[631px]:gap-3 max-[631px]:w-full max-[631px]:justify-start max-[631px]:py-2 max-[631px]:px-5 border-x max-[631px]:border-y py-3 px-2 w-[32%] border-gray-800">
                <PiStudent className="text-blue-500 text-[23px] max-[1020px]:text-[21px] max-[631px]:text-[19px]" />
                <div>
                  <p className="text-[14px] text-gray-400 max-[1260px]:text-[12px] max-[1020px]:text-[10px] max-[631px]:text-[10px]">
                    Education
                  </p>
                  <p className="text-white max-[1260px]:text-[14px] max-[1020px]:text-[12px] max-[631px]:text-[12px]">
                    Engineering Student
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 max-[631px]:gap-3 max-[631px]:w-full max-[631px]:justify-start max-[631px]:py-2 max-[631px]:px-5 justify-center w-[32%] px-2">
                <CiCalendar className="text-blue-500 text-[23px] max-[1020px]:text-[21px] max-[631px]:text-[19px]" />
                <div>
                  <p className="text-[14px] text-gray-400 max-[1260px]:text-[12px] max-[1020px]:text-[10px] max-[631px]:text-[10px]">
                    Availability
                  </p>
                  <p className="text-green-400 max-[1260px]:text-[14px] max-[1020px]:text-[12px] max-[631px]:text-[12px]">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
