"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";

export type Formato = "clasico" | "destacado" | "operaciones";

const FORMATOS: readonly { readonly id: Formato; readonly etiqueta: string }[] = [
  { id: "clasico", etiqueta: "Clásico" },
  { id: "destacado", etiqueta: "Destacado" },
  { id: "operaciones", etiqueta: "Soporte TI" },
];

function esFormato(valor: string | null): valor is Formato {
  return (
    valor === "clasico" || valor === "destacado" || valor === "operaciones"
  );
}

/* ---------------------------------------------------------------------------
   La URL es el estado, no una copia del estado.
   ---------------------------------------------------------------------------
   El formato vive en `?formato` y en ningún otro sitio: así el enlace que él
   manda por correo abre la presentación que quiere que se vea, y Ctrl+P
   imprime esa. Duplicarlo en un useState obliga a mantener dos verdades
   sincronizadas a mano, que es de donde salen las desincronizaciones.

   `useSyncExternalStore` es la forma que tiene React de leer algo que vive
   fuera de él sin provocar un desajuste de hidratación: `leerServidor`
   devuelve el valor con el que se generó el HTML estático y `leerUrl` toma el
   mando en cuanto hidrata.

   `replaceState` no dispara `popstate`, así que las pulsaciones propias hay
   que anunciarlas a mano.
   ------------------------------------------------------------------------- */

const oyentes = new Set<() => void>();

function suscribir(alCambiar: () => void) {
  oyentes.add(alCambiar);
  window.addEventListener("popstate", alCambiar);
  return () => {
    oyentes.delete(alCambiar);
    window.removeEventListener("popstate", alCambiar);
  };
}

function leerUrl(): Formato {
  const valor = new URLSearchParams(window.location.search).get("formato");
  return esFormato(valor) ? valor : "clasico";
}

/** Sin parámetro, «Clásico»: es el valor por defecto y el que no ofende a
 *  nadie. En un export estático el HTML se genera una vez en el build, sin
 *  petición y por tanto sin parámetros, así que éste es siempre el documento
 *  que va dentro del HTML. */
function leerServidor(): Formato {
  return "clasico";
}

function escribirUrl(nuevo: Formato) {
  const url = new URL(window.location.href);
  if (nuevo === "clasico") url.searchParams.delete("formato");
  else url.searchParams.set("formato", nuevo);
  // `window.history.replaceState` está integrado con el router de App Router.
  window.history.replaceState(null, "", url);
  for (const avisar of oyentes) avisar();
}

type Props = {
  /** Las tres presentaciones llegan ya renderizadas desde el servidor. Se
   *  monta solo una: así la página tiene un único <h1>. */
  readonly clasico: ReactNode;
  readonly destacado: ReactNode;
  readonly operaciones: ReactNode;
};

/**
 * El armazón de pantalla del CV: la barra de herramientas y la elección de
 * presentación. El documento en sí no pasa por aquí, solo se coloca.
 *
 * Por qué el parámetro se lee en el cliente y no en el servidor: esta ruta se
 * exporta como sitio estático y `searchParams` es una API de tiempo de
 * petición. En un export no hay petición, así que leerlo en el servidor no es
 * que sea inelegante — el build falla con «Route /cv with `dynamic = "error"`
 * couldn't be rendered statically because it used `await searchParams`».
 * Comprobado contra este proyecto con `output: "export"`, no supuesto.
 *
 * `useSearchParams()` tampoco vale: obliga a un límite de <Suspense> y deja
 * fuera del HTML estático todo lo que hay dentro de ese límite, que aquí es el
 * CV entero. Sin JavaScript se serviría un documento vacío. Queda lo que la
 * propia guía de export estático recomienda para las APIs del navegador:
 * leer `window.location`. A cambio, el CV está completo en el HTML y se
 * imprime aunque el JavaScript no llegue a cargar.
 */
export function VistaCv({ clasico, destacado, operaciones }: Props) {
  const formato = useSyncExternalStore(suscribir, leerUrl, leerServidor);

  return (
    <>
      <div className="barra-cv no-imprimir">
        <Link href="/" className="volver-cv" aria-label="Volver al inicio">
          <ArrowLeft size={16} aria-hidden="true" />
          <span className="cv-etiqueta">Volver</span>
        </Link>

        <div
          className="conmutador-formato"
          role="group"
          aria-label="Formato del currículum"
        >
          {FORMATOS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="seg"
              aria-pressed={formato === f.id}
              onClick={() => escribirUrl(f.id)}
            >
              {f.etiqueta}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn"
          aria-label="Imprimir el currículum"
          onClick={() => window.print()}
        >
          <Printer size={16} aria-hidden="true" />
          <span className="cv-etiqueta">Imprimir</span>
        </button>
      </div>

      <div className="marco-hoja">
        {formato === "clasico"
          ? clasico
          : formato === "destacado"
            ? destacado
            : operaciones}
      </div>
    </>
  );
}
