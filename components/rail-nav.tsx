"use client";

import { useEffect, useState } from "react";
import { sections, type SectionId } from "../content/site";

/**
 * El índice de secciones: un índice, no una constelación de puntos.
 *
 * Son anclas reales, no botones con `scrollIntoView`: así funcionan con el
 * teclado, con el clic central y se pueden copiar. La sección activa se detecta
 * con `IntersectionObserver` — el listener de `scroll` anterior recorría el DOM
 * en cada píxel de desplazamiento.
 *
 * Solo existe a partir de 1024 px, que es donde el plano abre su columna de
 * margen y el raíl tiene sitio propio. Por debajo no hay gutter que le sirva de
 * casa: fijarlo al borde izquierdo lo dejaría encima del contenido. Ahí lo
 * sustituyen el filete de progreso y el índice del pie.
 */
export function RailNav() {
  const [activa, setActiva] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            setActiva(entrada.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const seccion of sections) {
      const el = document.getElementById(seccion.id);
      if (el) observador.observe(el);
    }
    return () => observador.disconnect();
  }, []);

  return (
    <nav
      aria-label="Secciones"
      className="sticky top-[40vh]"
    >
      <ul className="flex flex-col">
        {sections.map((seccion) => {
          const esActiva = activa === seccion.id;
          return (
            <li key={seccion.id}>
              <a
                href={`#${seccion.id}`}
                aria-current={esActiva ? "true" : undefined}
                className="rail-item t-mono group"
              >
                <span className="rail-filete" aria-hidden="true" />
                <span
                  className="whitespace-nowrap"
                >
                  {seccion.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
