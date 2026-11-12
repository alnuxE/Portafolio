"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Monogram } from "../brand/monogram";

const ENLACES = [
  { id: "lanzamientos", label: "Proyectos" },
  { id: "trayectoria", label: "Trayectoria" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
] as const;

/**
 * Barra superior del escenario. Se queda fija porque el currículum es la acción
 * de la página y tiene que estar a un clic desde cualquier capítulo. El filete
 * inferior solo aparece al despegarse del borde: arriba del todo la barra es
 * parte del escenario, no una franja.
 */
export function Barra({ alias }: { alias: string }) {
  const [despegada, setDespegada] = useState(false);
  const [activa, setActiva] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const montado = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  // Antes de hidratar no se sabe el tema: se pinta el de servidor (claro) y
  // se corrige después, oculto, para que no haya desajuste de hidratación.
  const esOscuro = montado && resolvedTheme === "dark";

  useEffect(() => {
    const alDesplazar = () => setDespegada(window.scrollY > 8);
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });

    const visibles = new Map<string, boolean>();
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) visibles.set(e.target.id, e.isIntersecting);
        const primera = ENLACES.find((l) => visibles.get(l.id));
        setActiva(primera ? primera.id : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of ENLACES) {
      const nodo = document.getElementById(id);
      if (nodo) observador.observe(nodo);
    }
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      observador.disconnect();
    };
  }, []);

  return (
    <header className="e-barra" data-despegada={despegada}>
      <div className="e-marco e-barra-fila">
        <a href="#inicio" className="e-firma" aria-label={`${alias}, volver al inicio`}>
          <Monogram className="h-6 w-auto" />
          <span>{alias}</span>
        </a>

        <nav className="e-nav" aria-label="Secciones">
          {ENLACES.map((l) => (
            <a key={l.id} href={`#${l.id}`} aria-current={activa === l.id ? "true" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="e-barra-acciones">
          <button
            type="button"
            className="e-icono-boton"
            onClick={() => setTheme(esOscuro ? "light" : "dark")}
            aria-label={esOscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            <span style={{ visibility: montado ? "visible" : "hidden", display: "inline-flex" }}>
              {esOscuro ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
            </span>
          </button>
          <Link href="/cv" className="e-boton e-boton--chico">
            Currículum
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
