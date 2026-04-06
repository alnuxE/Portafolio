"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "experiencia", label: "Experiencia" },
  { id: "educacion", label: "Educación" },
  { id: "proyectos", label: "Proyectos" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "inicio";

      // Si estamos muy cerca de arriba, es inicio
      if (window.scrollY < 100) {
        currentSection = "inicio";
      } else {
        // Encontrar en qué sección estamos
        for (const section of sections) {
          if (section.id === "inicio") continue;
          
          const element = document.getElementById(section.id);
          if (element) {
            const { top } = element.getBoundingClientRect();
            // Si la parte superior del elemento está por encima de la mitad de la pantalla
            if (top < window.innerHeight / 2) {
              currentSection = section.id;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-6">
      {sections.map((section, index) => (
        <div key={section.id} className="relative flex items-center justify-center">
          {/* Línea conectora */}
          {index < sections.length - 1 && (
            <div className="absolute top-6 left-1/2 w-[2px] h-6 -translate-x-1/2 bg-[var(--border-line)] opacity-40 pointer-events-none"></div>
          )}
          
          <button
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none"
            aria-label={`Ir a ${section.label}`}
          >
            {/* Punto de scroll */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[var(--accent)] scale-[1.5] shadow-[0_0_12px_var(--accent)]"
                  : "bg-[var(--border-line)] group-hover:bg-[var(--accent)]/50 group-hover:scale-125"
              }`}
            />
            
            {/* Tooltip con nombre de sección */}
            <span
              className={`absolute left-8 px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-line)] rounded-lg text-xs md:text-sm font-semibold text-[var(--text-page)] whitespace-nowrap transition-all duration-300 shadow-md ${
                  activeSection === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"
              }`}
            >
              {section.label}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
