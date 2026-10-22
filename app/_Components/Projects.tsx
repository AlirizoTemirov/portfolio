"use client";

import ProjectsCard from "./ProjectsCard";
import project from "@/data/projects";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastInteraction = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (Date.now() - lastInteraction.current < 5000) return;

      const firstCard = slider.firstElementChild as HTMLElement | null;
      if (!firstCard) return;

      const gap = 20;
      const cardWidth = firstCard.offsetWidth + gap;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 5) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleInteraction = () => {
    lastInteraction.current = Date.now();
  };

  return (
    <section id="projects" className="max-w-360 mx-auto mt-10 px-5">
      <p className="text-blue-500 text-sm font-bold max-[600px]:text-[12px]">
        FEATURED PROJECTS
      </p>
      <h1 className="text-3xl font-semibold text-white mt-1 max-[600px]:text-2xl">
        Things I've built
      </h1>

      <div
        ref={sliderRef}
        onPointerDown={handleInteraction}
        onTouchStart={handleInteraction}
        onWheel={handleInteraction}
        className="flex gap-5 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        {project.map((project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
