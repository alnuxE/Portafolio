# Portafolio — Daniel Alejandro Estrada Olalde (`alnuxE`)

Portafolio personal y generador de currículum imprimible. Está construido como
una **ficha técnica**, no como una galería: retícula milimetrada, cuadro de
rótulo, tablas cotadas y una sola tinta de sello. La idea es que la forma de la
página sostenga lo que la página afirma — que quien firma trabaja con precisión.

## Qué contiene

* **Portada (`/`).** Cuadro de rótulo con los datos duros, stack agrupado por
  capas, cuatro proyectos con sus métricas reales, experiencia y formación.
* **Currículum (`/cv`).** Tres presentaciones conmutables, las tres imprimibles
  en A4: **Clásico** (formato Harvard, serif, blanco y negro), **Destacado**
  (para empresa, con jerarquía visual y color contenido, legible fotocopiado) y
  **Soporte TI** (el mismo expediente reordenado para ofertas de operaciones y
  mesa de ayuda).
* **Dos temas de primera clase.** Claro «papel de delineante» y oscuro
  «instrumento». El oscuro no es el claro invertido: cambia el acento, porque un
  guinda oscuro sobre fondo oscuro desaparece.

## Decisiones que conviene conocer antes de tocar nada

* **Todo color vive en un token** de `app/globals.css`. Ningún componente
  escribe un hexadecimal. `--brand-classly`, `--brand-prompt` y `--brand-switch`
  son los hex exactos de cada producto y se usan **solo** en su logotipo; para
  texto o trazos finos existe la variante `--brand-*-fg`, ajustada por tema.
* **Los logotipos son SVG en línea** (`components/brand/`), no ficheros de
  `public/`. El sitio se despliega bajo un `basePath` en GitHub Pages y las rutas
  absolutas a `public/` se romperían ahí.
* **El contenido vive en `content/site.ts`**, tipado y como fuente única. Las
  cifras agregadas (808 pruebas, 218 ficheros) se **calculan** desde los
  proyectos: escribirlas a mano las desincroniza a la primera corrección.
* **Ninguna sección anima al entrar en pantalla.** Todo el movimiento cabe en la
  primera pantalla y dura menos de 900 ms (`app/motion.css`). La cascada de
  desvanecidos sección a sección obliga a leer a la velocidad de la animación.
* **Con `prefers-reduced-motion` el estado final es el estado por defecto** y la
  animación va *desde* un estado inicial. Al revés, quien reduce el movimiento se
  queda mirando una página en blanco.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 · App Router · Turbopack |
| Interfaz | React 19 · TypeScript estricto |
| Estilos | Tailwind CSS v4 con tokens propios |
| Temas | `next-themes` (claro · oscuro · sistema) |
| Tipografía | Martian Mono (display) · IBM Plex Sans / Mono · EB Garamond (solo `/cv`) |
| Iconos | `lucide-react`, más trazados propios para GitHub y LinkedIn |
| Despliegue | GitHub Actions → GitHub Pages (exportación estática) |

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # compilación de producción
npm run lint         # ESLint
```

El currículum se imprime desde `/cv` con el botón de la barra o con `Ctrl+P`. El
formato elegido viaja en la URL (`/cv?formato=destacado`,
`/cv?formato=operaciones`), así que el enlace que se comparta abre la
presentación que se quiere que se vea.

**Para adaptar el CV a una oferta nueva**: el contenido dirigido vive en un
único bloque de `content/site.ts` (`cvOperaciones` es el ejemplo) y la
presentación reutiliza la retícula de «Destacado». No se duplica ni un hecho:
lo que cambia es el orden de lectura y qué parte de cada hecho va delante.
El presupuesto es **una página**, y se comprueba imprimiendo, no a ojo.

## Autor

**Daniel Alejandro Estrada Olalde** — Desarrollador backend · Ingeniería en
Informática, IPN. [github.com/alnuxE](https://github.com/alnuxE)
