"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

/**
 * Un campo más del cuadro de rótulo, no un botón flotante.
 *
 * El control anuncia **el tema que hay**, no el que vendría: leer «oscuro»
 * cuando la página está oscura es una lectura de estado; leer «claro» cuando
 * está oscura obliga a deducir. La acción va en el `aria-label`.
 *
 * Hasta que next-themes hidrata no se sabe qué tema hay, así que el contenido
 * se oculta conservando su hueco. Pintar un icono por defecto y corregirlo
 * después produce un salto visible en cada carga.
 */
export function ThemeSwitcher({
  className = "",
  compacto = false,
}: {
  className?: string;
  /** Solo el icono: en móvil el control vive fuera del cuadro de rótulo y ahí
   *  la etiqueta no cabe sin robarle sitio al contenido. */
  compacto?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  // `useSyncExternalStore` con dos instantáneas distintas es la forma limpia de
  // preguntar «¿ya hidraté?»: devuelve `false` en el servidor y en el primer
  // pintado, y `true` a partir de ahí. Un `useState` + `useEffect` haría lo
  // mismo a costa de un renderizado en cascada.
  const montado = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const esOscuro = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(esOscuro ? "light" : "dark")}
      aria-pressed={montado ? esOscuro : undefined}
      aria-label={esOscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className={`group flex h-11 w-full items-center justify-center gap-2 px-3 text-fg-muted hover:bg-surface-2 hover:text-fg active:bg-bg-2 sm:h-10 lg:h-8 ${className}`}
      style={{ ["--focus-bg" as string]: "var(--surface)" }}
    >
      <span
        className="inline-flex items-center gap-2"
        style={{ visibility: montado ? "visible" : "hidden" }}
      >
        {esOscuro ? (
          <Moon size={14} aria-hidden="true" />
        ) : (
          <Sun size={14} aria-hidden="true" />
        )}
        {compacto ? null : (
          <span className="t-label !text-current">
            {esOscuro ? "oscuro" : "claro"}
          </span>
        )}
      </span>
    </button>
  );
}
