"use client";

import { useEffect, useRef, useState } from "react";

const VUELTA = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Una cifra como contador mecánico: cada dígito es una columna 0-9 repetida dos
 * veces que en reposo ya está en su valor final. La animación sale desde la
 * primera vuelta, así que sin JS, con movimiento reducido o antes de entrar en
 * pantalla la cifra se lee igual.
 *
 * `inmediato` rueda al cargar (la cifra del héroe, que ya está a la vista). El
 * resto rueda una sola vez, cuando entra en pantalla desde fuera: si la página
 * se abre con la cifra visible —un ancla, una recarga a media página— no se
 * reinicia, porque saltar a 0 delante del lector es peor que no animar.
 */
export function Rodillo({
  valor,
  className = "",
  inmediato = false,
}: {
  valor: number;
  className?: string;
  inmediato?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [rueda, setRueda] = useState(inmediato);

  useEffect(() => {
    if (inmediato) return;
    const nodo = ref.current;
    if (!nodo) return;
    let vistoFuera = false;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) {
          vistoFuera = true;
          return;
        }
        if (vistoFuera) {
          setRueda(true);
          observador.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observador.observe(nodo);
    return () => observador.disconnect();
  }, [inmediato]);

  const digitos = String(valor).split("");

  return (
    <span className={`e-cifra ${className}`}>
      <span className="sr-only">{valor}</span>
      <span
        ref={ref}
        className="e-rodillo"
        data-rueda={rueda ? "si" : undefined}
        aria-hidden="true"
      >
        {digitos.map((d, k) => (
          <span
            key={k}
            className="e-rodillo-col"
            style={{ ["--d" as string]: d, ["--k" as string]: k }}
          >
            {VUELTA.map((n) => (
              <span key={`a${n}`}>{n}</span>
            ))}
            {VUELTA.map((n) => (
              <span key={`b${n}`}>{n}</span>
            ))}
          </span>
        ))}
      </span>
    </span>
  );
}
