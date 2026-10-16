/**
 * Marcas de producto del portafolio.
 *
 * Las tres son isotipos reconstruidos desde los ficheros originales de cada
 * proyecto (ver el comentario de cada componente) y se presentan sobre la misma
 * teja: una superelipse de exponente 4,6 —la forma nativa del icono de Classly—
 * que aquí se reutiliza para las tres, de modo que la fila de proyectos se lea
 * como un sistema y no como tres logos pegados.
 *
 * El color de marca ES la marca, así que no se usa `currentColor`: cada teja va
 * pintada con su token (`--brand-classly`, `--brand-prompt`, `--brand-switch`) y
 * el símbolo va en blanco puro. Ese blanco no es un color de tema: siempre cae
 * sobre la teja de marca, nunca sobre el papel de la página, de manera que el
 * contraste es idéntico en claro y en oscuro.
 *
 * Cada marca reacciona al `:hover`/`:focus-within` de la tarjeta que la envuelve
 * (`.group`, el patrón de Tailwind). Todo el movimiento es `transform` y
 * `opacity`, entre 260 y 400 ms, y queda anulado bajo `prefers-reduced-motion`.
 */

/* Teja compartida: superelipse |x/256|^4.6 + |y/256|^4.6 = 1, ajustada con ocho
   cúbicas (error máximo 0,37 px sobre 512). Es la silueta real del icono de
   Classly, medida sobre el original. */
const TILE =
  "M512 256C512 411.8 507.1 445.3 476.2 476.2C445.3 507.1 411.8 512 256 512C100.2 512 66.7 507.1 35.8 476.2C4.9 445.3 0 411.8 0 256C0 100.2 4.9 66.7 35.8 35.8C66.7 4.9 100.2 0 256 0C411.8 0 445.3 4.9 476.2 35.8C507.1 66.7 512 100.2 512 256Z";

const MARK_CSS = `
.brand-mark{display:block}

/* ¿Qué producto es este y qué hace? — Classly cierra el anillo: la pieza que
   sella la boca de la C entra girando y completa el ciclo lectivo. */
.brand-mark__seal{
  opacity:0;
  transform-box:view-box;transform-origin:256px 256px;
  transform:rotate(-30deg) scale(.94);
  transition:opacity 340ms cubic-bezier(.16,1,.3,1),transform 340ms cubic-bezier(.16,1,.3,1);
}
.group:hover .brand-mark__seal,
.group:focus-within .brand-mark__seal,
.brand-mark--classly:hover .brand-mark__seal{opacity:1;transform:rotate(0) scale(1)}

/* PromptEngine compone: la sección activa se estira y las otras dos la siguen
   en cascada, como un raíl que acaba de reordenarse. */
.brand-mark__rail,.brand-mark__pill{
  transform-box:view-box;
  transition:transform 260ms cubic-bezier(.16,1,.3,1);
}
.brand-mark__pill{transform-origin:170.67px 256px}
.brand-mark__rail{transform-origin:256px 256px}
.brand-mark__pill--2{transition-delay:70ms}
.brand-mark__pill--3{transition-delay:140ms}
.group:hover .brand-mark__pill--1,
.group:focus-within .brand-mark__pill--1,
.brand-mark--prompt:hover .brand-mark__pill--1{transform:scaleX(1.055)}
.group:hover .brand-mark__pill--2,
.group:focus-within .brand-mark__pill--2,
.brand-mark--prompt:hover .brand-mark__pill--2{transform:translateX(14px)}
.group:hover .brand-mark__pill--3,
.group:focus-within .brand-mark__pill--3,
.brand-mark--prompt:hover .brand-mark__pill--3{transform:translateX(14px)}
.group:hover .brand-mark__rail,
.group:focus-within .brand-mark__rail,
.brand-mark--prompt:hover .brand-mark__rail{transform:scaleY(1.05)}

/* SwitchIot enciende: la gota se hunde como un pulsador y el anillo suelta un
   halo de luz justo después. */
.brand-mark__drop{transform-box:view-box}
.brand-mark__glow{
  opacity:0;
  transform-box:view-box;transform-origin:256px 282.5px;
  transform:scale(.86);
}
.group:hover .brand-mark__drop,
.group:focus-within .brand-mark__drop,
.brand-mark--switch:hover .brand-mark__drop{animation:brand-switch-press 380ms cubic-bezier(.34,1.56,.64,1)}
.group:hover .brand-mark__glow,
.group:focus-within .brand-mark__glow,
.brand-mark--switch:hover .brand-mark__glow{animation:brand-switch-glow 380ms cubic-bezier(.16,1,.3,1) 90ms}
@keyframes brand-switch-press{
  0%{transform:translateY(0)}
  38%{transform:translateY(7px)}
  100%{transform:translateY(0)}
}
@keyframes brand-switch-glow{
  0%{opacity:0;transform:scale(.86)}
  35%{opacity:.34}
  100%{opacity:0;transform:scale(1.34)}
}

/* Si el usuario ha pedido no ver movimiento, las marcas se quedan quietas en su
   estado de reposo, que ya es el estado legible. */
@media (prefers-reduced-motion:reduce){
  .brand-mark__seal,.brand-mark__rail,.brand-mark__pill,.brand-mark__glow,.brand-mark__drop{
    transition:none;animation:none
  }
  .group:hover .brand-mark__pill,.group:focus-within .brand-mark__pill,
  .group:hover .brand-mark__rail,.group:focus-within .brand-mark__rail,
  .brand-mark--prompt:hover .brand-mark__pill,
  .brand-mark--prompt:hover .brand-mark__rail{transform:none}
}
`;

function MarkStyles() {
  // React 19 iza este bloque a <head> y lo deduplica por `href`, así que da
  // igual cuántas marcas se pinten en la página: el CSS se emite una vez.
  return (
    <style
      href="brand-marks"
      precedence="medium"
      dangerouslySetInnerHTML={{ __html: MARK_CSS }}
    />
  );
}

/**
 * Classly · una C que también es un anillo abierto: el ciclo de una clase que
 * empieza y termina. Reconstruida desde `classly_mark.svg`, que venía como un
 * único trazado aplanado de 16 KB; aquí son dos recorridos de superelipse
 * (r 128 exterior, r 79 interior) con la boca cortada entre y=214 e y=298,
 * verificados contra el original píxel a píxel.
 */
export function ClasslyMark({ className }: { className?: string }) {
  return (
    <>
      <MarkStyles />
      <svg
        viewBox="0 0 512 512"
        className={["brand-mark", "brand-mark--classly", className]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
        focusable="false"
      >
        <defs>
          {/* Degradado de marca de Classly, #3B9BFF → #0362D6, en diagonal. */}
          <linearGradient id="brand-classly-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" style={{ stopColor: "var(--brand-classly-2, #3B9BFF)" }} />
            <stop offset="1" style={{ stopColor: "var(--brand-classly, #0362D6)" }} />
          </linearGradient>
        </defs>
        <path d={TILE} fill="url(#brand-classly-g)" />
        <path
          d="M383.6 214C382.4 171 378.3 158.1 366.1 145.9C350.6 130.5 333.9 128 256 128C178.1 128 161.4 130.5 145.9 145.9C130.5 161.4 128 178.1 128 256C128 333.9 130.5 350.6 145.9 366.1C161.4 381.5 178.1 384 256 384C333.9 384 350.6 381.5 366.1 366.1C378.3 353.9 382.4 341 383.6 298L333.9 298C332.5 312.2 329.7 318.2 323.9 323.9C314.4 333.5 304.1 335 256 335C207.9 335 197.6 333.5 188.1 323.9C178.5 314.4 177 304.1 177 256C177 207.9 178.5 197.6 188.1 188.1C197.6 178.5 207.9 177 256 177C304.1 177 314.4 178.5 323.9 188.1C329.7 193.8 332.5 199.8 333.9 214Z"
          fill="#FFFFFF"
        />
        {/* La pieza que falta para cerrar el anillo: invisible en reposo. */}
        <path
          className="brand-mark__seal"
          d="M383.6 214C383.9 225.6 384 239.4 384 256C384 272.6 383.9 286.4 383.6 298L333.9 298C334.8 288.5 335 275.3 335 256C335 236.7 334.8 223.5 333.9 214Z"
          fill="#FFFFFF"
        />
      </svg>
    </>
  );
}

/**
 * PromptEngine · el editor en miniatura: un raíl de arrastre y tres secciones de
 * distinto ancho, la primera activa. Geometría exacta de `icon.svg` (lienzo de
 * 24, reescalado ×21,333 a 512). El original monta el raíl sobre el lienzo negro
 * del editor; aquí la teja lleva el violeta de marca y la jerarquía
 * activo/inactivo pasa a la opacidad del blanco, para que las tres marcas del
 * portafolio compartan tratamiento.
 */
export function PromptEngineMark({ className }: { className?: string }) {
  return (
    <>
      <MarkStyles />
      <svg
        viewBox="0 0 512 512"
        className={["brand-mark", "brand-mark--prompt", className]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
        focusable="false"
      >
        <path d={TILE} fill="var(--brand-prompt, #7C5CFF)" />
        <rect
          className="brand-mark__rail"
          x="85.33" y="106.67" width="38.4" height="298.67" rx="19.2"
          fill="#FFFFFF" fillOpacity="0.45"
        />
        <rect
          className="brand-mark__pill brand-mark__pill--1"
          x="170.67" y="117.33" width="256" height="74.67" rx="37.33"
          fill="#FFFFFF"
        />
        <rect
          className="brand-mark__pill brand-mark__pill--2"
          x="170.67" y="224" width="149.33" height="74.67" rx="37.33"
          fill="#FFFFFF" fillOpacity="0.45"
        />
        <rect
          className="brand-mark__pill brand-mark__pill--3"
          x="170.67" y="330.67" width="202.67" height="74.67" rx="37.33"
          fill="#FFFFFF" fillOpacity="0.45"
        />
      </svg>
    </>
  );
}

/**
 * SwitchIot · el símbolo universal de encendido con una gota ocupando el hueco
 * del anillo: interruptor y agua en una sola silueta. Geometría literal de
 * `icono.svg` —hueco de 33° a cada lado del eje, anillo bajado 22 px respecto al
 * centro para compensar el peso de la gota, terminaciones redondeadas del grosor
 * del trazo— con el mismo `scale(1.2)` del icono original.
 */
export function SwitchIotMark({ className }: { className?: string }) {
  return (
    <>
      <MarkStyles />
      <svg
        viewBox="0 0 512 512"
        className={["brand-mark", "brand-mark--switch", className]
          .filter(Boolean)
          .join(" ")}
        aria-hidden
        focusable="false"
      >
        <path d={TILE} fill="var(--brand-switch, #0D6E6E)" />
        {/* Halo de luz: el anillo completo, ya escalado, que sale disparado
            hacia fuera al encender. Invisible en reposo. */}
        <circle
          className="brand-mark__glow"
          cx="256" cy="282.5" r="146.4"
          fill="none" stroke="#FFFFFF" strokeWidth="45.6"
        />
        <g transform="translate(256 256) scale(1.2) translate(-256 -256)">
          <path
            d="M 322.4 175.7 A 122 122 0 1 1 189.6 175.7"
            fill="none" stroke="#FFFFFF" strokeWidth="38" strokeLinecap="round"
          />
          <path
            className="brand-mark__drop"
            d="M 256 90 L 293.1 148.4 A 44 44 0 1 1 218.9 148.4 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </>
  );
}
