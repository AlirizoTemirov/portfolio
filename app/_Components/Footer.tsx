import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="border-t border-gray-800 mt-10">
      <div className="max-w-360 px-5 mx-auto text-gray-400 flex justify-between items-center py-5">
        <p className="text-sm flex items-center gap-2 max-[770px]:text-[10px]">
          <FaRegCopyright /> 2026 Alirizo Temirov. All rights reserved.
        </p>

        <div className="text-2xl flex gap-5 max-[770px]:hidden">
          <a
            target="_blank"
            className="hover:text-blue-500"
            href="https://github.com/AlirizoTemirov"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            className="hover:text-blue-500"
            href="https://www.linkedin.com/in/alirizo-temurov-189769444"
          >
            <FaLinkedin />
          </a>

          <a className="hover:text-blue-500" href="#">
            <FaTwitter />
          </a>
        </div>

        <p className="text-sm flex items-center gap-2 max-[770px]:text-[10px] max-[440px]:hidden">
          Built with ❤️ and{" "}
          <a
            target="_blank"
            className="text-blue-500"
            href="https://nextjs.org/"
          >
            Next.js
          </a>
        </p>
      </div>
    </section>
  );
}
