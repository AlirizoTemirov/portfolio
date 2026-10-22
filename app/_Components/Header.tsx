"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section!);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 text-white">
        {/* Logo */}
        <h1 className="flex items-center gap-1 text-2xl max-[850px]:text-xl font-bold">
          <span className="text-blue-500">{"{"}</span>
          <span>AT</span>
          <span className="text-blue-500">{"}"}</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`
                      relative px-3 text-lg max-[850px]:text-[15px] max-[750px]:hidden font-medium
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-lg bg-blue-500/10 blur-md" />
                    )}

                    {item.name}

                    <span
                      className={`
                        absolute -bottom-6.25 left-1/2 h-0.5
                        -translate-x-1/2 rounded-full bg-blue-500
                        transition-all duration-500 ease-out
                        ${
                          isActive
                            ? "w-1/2 opacity-100 shadow-[0_0_10px_#3b82f6]"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social links */}
        <div>
          <ul className="flex items-center gap-5 text-2xl max-[850px]:text-xl">
            <li>
              <a
                href="https://github.com/AlirizoTemirov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-blue-400"
              >
                <FaGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/alirizo-temurov-189769444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
