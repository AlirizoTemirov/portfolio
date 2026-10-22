import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="max-w-360 mx-auto mt-10 px-5">
      <p className="text-blue-500 text-sm font-bold max-[600px]:text-[12px]">
        TECH STACK
      </p>
      <h1 className="text-3xl font-semibold text-white mt-1 max-[600px]:text-2xl">
        Technologies I work with
      </h1>

      <div className="mt-5">
        <div className="grid grid-cols-5 gap-3 text-[clamp(15px,1.5vw,20px)] max-[770px]:grid-cols-2">
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiNextdotjs className="text-black bg-white rounded-full p-px" />{" "}
            Next.js
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiReact className="text-cyan-400" /> React
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiTypescript className="text-blue-500" /> TypeScript
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiJavascript className="text-yellow-400" /> JavaScript
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiTailwindcss className="text-blue-500" /> Tailwind CSS
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiSupabase className="text-emerald-400" /> Supabase
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <img
              className="w-7.5 max-[1110px]:w-5.5"
              src="/postgresql.png"
              alt="postgresql"
            />{" "}
            PostgreSQL
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <img
              className="w-7.5 max-[1110px]:w-5.5"
              src="/zustand.png"
              alt="zustand"
            />{" "}
            Zustand
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiGit className="text-red-500" /> Git
          </div>
          <div className="max-w-68.75 bg-[#050E20] border border-gray-700 rounded-xl text-white flex items-center justify-center gap-3 py-2">
            <SiGithub /> GitHub
          </div>
        </div>
      </div>
    </section>
  );
}
