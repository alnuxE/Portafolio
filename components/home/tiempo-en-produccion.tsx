"use client";

import { useSyncExternalStore } from "react";

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function duracion(anio: number, mes: number, hoy: Date) {
  const total = (hoy.getFullYear() - anio) * 12 + (hoy.getMonth() + 1 - mes);
  const a = Math.floor(total / 12);
  const m = total % 12;
  const partes = [];
  if (a > 0) partes.push(`${a} ${a === 1 ? "año" : "años"}`);
  if (m > 0) partes.push(`${m} ${m === 1 ? "mes" : "meses"}`);
  return partes.join(" y ");
}

/**
 * El tiempo en producción se calcula en el navegador de quien mira: escrito a
 * mano caduca el mes siguiente, y calculado en la compilación caduca con el
 * último despliegue. En el servidor (y antes de hidratar) solo se dice desde
 * cuándo, que es cierto siempre.
 */
export function TiempoEnProduccion({ anio, mes }: { anio: number; mes: number }) {
  const hoy = useSyncExternalStore(
    () => () => {},
    () => new Date().toDateString(),
    () => null,
  );
  const desde = `desde ${MESES[mes - 1]} ${anio}`;
  if (!hoy) return <>En producción {desde}</>;
  return (
    <>
      En producción {desde} · {duracion(anio, mes, new Date(hoy))}
    </>
  );
}
