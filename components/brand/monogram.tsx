/**
 * Monograma de Daniel Alejandro Estrada Olalde — alias en línea `alnuxE`.
 *
 * Por qué esta forma y no unas iniciales al uso:
 *
 * Un `DE` en una caja redondeada es lo que devuelve cualquier generador de
 * logos, y no dice nada de a qué se dedica quien firma. Lo que sí lo dice es el
 * sitio donde este perfil pasa el día: una terminal. De ahí las tres piezas:
 *
 *   · El chevron `❯` es el prompt de cualquier shell de Linux y, girado, es la
 *     A sin travesaño de Alejandro / alnux. Va en `var(--accent)` porque es la
 *     parte que invita: el símbolo de "escribe aquí".
 *   · La E es la mayúscula que cierra el alias `alnuxE` y la inicial de Estrada.
 *     Sus tres brazos son exactamente iguales —una E de rejilla, dibujada como
 *     se dibuja una fuente de mapa de bits, no como se caligrafía— y va en
 *     `currentColor` para heredar el color del texto de la cabecera.
 *   · El cursor de bloque cierra la línea. En reposo está atenuado; al pasar el
 *     ratón se enciende y parpadea: la firma responde, como responde un prompt.
 *
 * Todo con un único grosor de trazo y sobre una rejilla de enteros: la firma de
 * alguien que construye sistemas, no de alguien que elige una plantilla.
 *
 * Movimiento: entrada al montar (el prompt entra por la izquierda, la E por la
 * derecha, el cursor aparece al final — el orden en que se teclea una línea) y
 * un estado de hover en el que el prompt avanza y el cursor cobra vida.
 */

const MONOGRAM_CSS = `
.mono{display:block}
.mono__caret,.mono__e,.mono__cursor{transform-box:view-box;transform-origin:50% 50%}

/* ¿Quién firma esto? — La línea se escribe sola al montar la cabecera:
   prompt, nombre y cursor, en ese orden. «backwards» sostiene el estado inicial
   durante el retardo, y el estado de reposo del elemento ya es el final. */
.mono__caret{animation:mono-in-left 520ms cubic-bezier(.16,1,.3,1) 60ms backwards}
.mono__e{animation:mono-in-right 520ms cubic-bezier(.16,1,.3,1) 180ms backwards}
.mono__cursor{
  opacity:.32;
  transform-origin:38.5px 21px;
  animation:mono-in-cursor 360ms cubic-bezier(.34,1.56,.64,1) 420ms backwards;
  transition:opacity 200ms cubic-bezier(.16,1,.3,1);
}
@keyframes mono-in-left{from{opacity:0;transform:translateX(-7px)}}
@keyframes mono-in-right{from{opacity:0;transform:translateX(7px)}}
@keyframes mono-in-cursor{from{opacity:0;transform:scaleY(.2)}}

/* ¿Se puede pulsar? — El prompt avanza un paso y el cursor empieza a parpadear:
   la marca se comporta como una terminal esperando una orden. */
.mono__caret{transition:transform 220ms cubic-bezier(.16,1,.3,1)}
.mono:hover .mono__caret,
.mono:focus-visible .mono__caret,
.group:hover .mono__caret,
.group:focus-within .mono__caret{transform:translateX(2.5px)}
.mono:hover .mono__cursor,
.mono:focus-visible .mono__cursor,
.group:hover .mono__cursor,
.group:focus-within .mono__cursor{opacity:1;animation:mono-blink 1.05s steps(1,end) infinite}
@keyframes mono-blink{0%,55%{opacity:1}56%,100%{opacity:.15}}

/* Sin movimiento: la firma aparece entera y quieta, que es su estado legible. */
@media (prefers-reduced-motion:reduce){
  .mono__caret,.mono__e,.mono__cursor{animation:none;transition:none;opacity:1;transform:none}
  .mono:hover .mono__caret,.group:hover .mono__caret,
  .mono:focus-visible .mono__caret,.group:focus-within .mono__caret{transform:none}
  .mono:hover .mono__cursor,.group:hover .mono__cursor,
  .mono:focus-visible .mono__cursor,.group:focus-within .mono__cursor{animation:none;opacity:1}
}
`;

export function Monogram({ className }: { className?: string }) {
  return (
    <>
      {/* React 19 iza y deduplica este bloque por `href`. */}
      <style
        href="brand-monogram"
        precedence="medium"
        dangerouslySetInnerHTML={{ __html: MONOGRAM_CSS }}
      />
      <svg
        viewBox="0 0 45 26"
        className={["mono", className].filter(Boolean).join(" ")}
        role="img"
        aria-label="alnuxE"
      >
        <title>alnuxE</title>
        {/* El prompt: chevron de shell y, tumbada, la A de Alejandro. */}
        <path
          className="mono__caret"
          d="M5 5 L13 13 L5 21"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* La E de alnuxE / Estrada: tres brazos idénticos sobre rejilla. */}
        <path
          className="mono__e"
          d="M31 5 H22 V21 H31 M22 13 H31"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cursor de bloque: la línea sigue abierta. */}
        <rect
          className="mono__cursor"
          x="35.5" y="8.6" width="6" height="12.4" rx="1"
          fill="var(--accent)"
        />
      </svg>
    </>
  );
}

export default Monogram;
