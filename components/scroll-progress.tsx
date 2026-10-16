"use client";

import { useEffect, useState } from "react";
import { sections, type SectionId } from "../content/site";

/**
 * Sustituto móvil del índice lateral.
 *
 * Cubre todo lo que está por debajo de 1024 px, que es donde el raíl lateral no
 * cabe sin invadir el contenido. Responde a la única pregunta que uno se hace
 * desplazándose por un móvil —¿cuánto queda?— sin ocupar alto útil.
 *
 * `aria-hidden`: es orientación visual y el lector de pantalla ya tiene los
 * encabezados de sección para lo mismo.
 */
export function ScrollProgress() {
  const [progreso, setProgreso] = useState(0);
  const [activa, setActiva] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    let pendiente = false;

    const medir = () => {
      pendiente = false;
      const recorrido =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgreso(recorrido > 0 ? window.scrollY / recorrido : 0);
    };

    const alDesplazar = () => {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(medir);
    };

    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("resize", alDesplazar);
    medir();

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setActiva(entrada.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const seccion of sections) {
      const el = document.getElementById(seccion.id);
      if (el) observador.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("resize", alDesplazar);
      observador.disconnect();
    };
  }, []);

  const etiqueta = sections.find((s) => s.id === activa)?.label ?? "";

  return (
    <div
      aria-hidden="true"
      className="progreso-movil pointer-events-none fixed inset-x-0 bottom-0 z-30 lg:hidden"
    >
      <div className="flex justify-end bg-gradient-to-t from-bg to-transparent px-2 pb-1 pt-4">
        <span className="t-label">{etiqueta}</span>
      </div>
      <div className="h-[2px] w-full bg-border-soft">
        <div
          className="h-full bg-accent"
          style={{ transform: `scaleX(${progreso})`, transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}
