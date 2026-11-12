---
name: Escenario de lanzamiento
description: Portada del portafolio de Daniel Alejandro Estrada Olalde (alnuxE) como keynote de lanzamientos — un escenario neutro y un capítulo a sangre por producto.
colors:
  ink: "#0b0d12"
  bg: "#f5f6f8"
  panel: "#ffffff"
  muted: "#474d59"
  faint: "#626875"
  line: "#d8dbe1"
  line-strong: "#b9bec8"
  live: "#0f8a5f"
  classly: "#0362d6"
  prompt: "#5b34e0"
  switch: "#0d6e6e"
  chapter-ink: "#ffffff"
  ink-dark: "#eef0f3"
  bg-dark: "#0b0d12"
  panel-dark: "#12151c"
  muted-dark: "#b0b5bf"
  faint-dark: "#8d939e"
  line-dark: "#232733"
  line-strong-dark: "#353b49"
  live-dark: "#34d399"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3rem, 1.2rem + 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.1rem + 6vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.625rem, 1.1rem + 2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 80"
  lead:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.55vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 115"
  numeral-stage:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(7rem, 3rem + 14vw, 13.5rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 62"
  numeral-chapter:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(6rem, 3rem + 9vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 62"
  numeral-cell:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.8rem + 2.4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 62"
  numeral-year:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1, 'lnum' 1"
    fontVariation: "'wdth' 62"
  contact:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 0.6rem + 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 70"
rounded:
  hairline: "2px"
  panel: "10px"
  node: "12px"
  figure: "14px"
  pill: "999px"
spacing:
  seam: "4px"
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  max-width: "84rem"
  bar-height: "4rem"
  section: "clamp(4rem, 2rem + 6vw, 8rem)"
  chapter: "clamp(4rem, 2rem + 7vw, 8.5rem)"
  closing: "clamp(5rem, 3rem + 8vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "3rem"
    typography: "{typography.body}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "3rem"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.5rem"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.75rem"
  top-bar:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    height: "{spacing.bar-height}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  app-chip:
    backgroundColor: "{colors.classly}"
    textColor: "{colors.chapter-ink}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.85rem 0.35rem 0.6rem"
  layer:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.25rem 1.5rem"
  layer-live:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.panel}"
    padding: "1.25rem 1.5rem"
  format-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "1.25rem 1.5rem"
  chapter-classly:
    backgroundColor: "{colors.classly}"
    textColor: "{colors.chapter-ink}"
    padding: "{spacing.chapter} 0"
  chapter-prompt:
    backgroundColor: "{colors.prompt}"
    textColor: "{colors.chapter-ink}"
    padding: "{spacing.chapter} 0"
  chapter-switch:
    backgroundColor: "{colors.switch}"
    textColor: "{colors.chapter-ink}"
    padding: "{spacing.chapter} 0"
  alignment-segment:
    backgroundColor: "{colors.switch}"
    height: "1.25rem"
  mechanism-figure:
    rounded: "{rounded.figure}"
    padding: "1.25rem"
---

# Design System: Escenario de lanzamiento

## Overview

**Creative North Star: "El escenario de lanzamiento"**

La portada (`app/page.tsx`) se presenta como un keynote de lanzamientos de producto: un escenario neutro, grafito en oscuro y blanco frío en claro, sobre el que cada aplicación propia sube con su capítulo entero bañado en su color de marca. El color no se reparte en acentos: cada capítulo es una sola tinta a sangre y el escenario no lleva ninguna. La prueba la dan las cifras —808 pruebas automatizadas, 338/320/150 por app— compuestas a escala de escenario con dígitos tabulares que ruedan una sola vez al aparecer.

La jerarquía no sale de mezclar familias, sino de mover los ejes de una sola: Archivo variable, de condensada negra para cifras y titulares a semiexpandida en versales para rótulos. La densidad es de cartel en la primera pantalla (nombre, cifra, alineación proporcional y dos acciones) y de documento sobrio en las secciones de escenario (trayectoria como un hilo continuo, stack como capas apiladas, cierre con el correo a escala de titular). El escenario es plano: la profundidad la dan el cambio de tinta entre capítulos, no las sombras.

**Alcance.** Este sistema cubre solo la portada: todos sus tokens viven en `app/home.css` con prefijo `--e-` y se aplican bajo `.escena`. La ruta `/cv` (`app/cv/*`, `app/globals.css`, `components/cv/*`) es una superficie de documento imprimible con sus propios tokens anteriores de «ficha técnica» (Martian Mono, IBM Plex, acento granate); queda fuera de este mundo y se dejó intacta a propósito. No forma parte de este sistema ni debe tomarse como referencia para él, ni al revés.

**Key Characteristics:**
- Un capítulo por producto, a sangre, en una sola tinta de marca; el escenario es neutro.
- Una sola familia (Archivo) cuya jerarquía la dan los ejes de anchura y peso.
- Cifras tabulares a escala de escenario con rodillo de dígitos que rueda una vez.
- Barra de alineación proporcional (338/320/150) que liga el héroe con cada capítulo.
- Un hilo continuo de trayectoria con estaciones; lo vivo se tiñe de verde.
- Superficies planas; el estado final de toda animación es el estado de reposo.

## Colors

Escenario neutro de grises fríos y casi negro grafito, tres tintas de marca saturadas que solo existen como capítulos (o como enlaces a ellos), y un verde reservado para lo que está vivo. Cada token tiene su valor de tema oscuro (sufijo `-dark` en el frontmatter), declarado en `.dark`.

### Primary
- **Tinta de escenario** (`ink`): texto principal, filetes gruesos de 2px (marcador del héroe, tablero, puesto), hilo de trayectoria, botón primario y capa viva. En oscuro se invierte a un blanco hueso (`ink-dark`).

### Secondary
- **Azul Classly** (`classly`): tinta a sangre del capítulo de Classly y su tramo en la alineación del héroe.
- **Violeta PromptEngine** (`prompt`): tinta a sangre del capítulo de PromptEngine. Es la variante oscura del violeta de logotipo (#7c5cff), elegida para que el texto blanco del capítulo pase contraste.
- **Verde azulado SwitchIot** (`switch`): tinta a sangre del capítulo de SwitchIot.
- **Blanco de capítulo** (`chapter-ink`): toda la tinta dentro de un capítulo. Sus grados secundarios se derivan con `color-mix(in oklab, #ffffff 92% / 88% / 26%, var(--tono))` para texto secundario, terciario y filetes; el 88 % se calculó para dar ≥ 4,77:1 en las tres tintas.

### Tertiary
- **Verde en vivo** (`live`, `live-dark` en oscuro): el punto con pulso de «En producción desde…», el nodo de la estación actual con su halo y el riel del puesto en curso. Nada más.

### Neutral
- **Blanco frío** (`bg`): fondo del escenario en claro, también de `html` y `body` mientras la portada está montada, para que el rebote del scroll no enseñe otro fondo.
- **Panel** (`panel`): fondo de capas del stack y tarjetas de formato del CV; apenas se separa del escenario.
- **Gris de lectura** (`muted`): entradillas, párrafos, subtítulo del héroe, enlaces de navegación en reposo.
- **Gris de rótulo** (`faint`): rótulos, periodos y pie.
- **Filete** (`line`) y **filete fuerte** (`line-strong`): divisiones entre secciones y listas; bordes de chips y botón de icono.

Los activos de identidad conservan sus colores exactos y no son tokens del escenario: los logotipos de producto (`components/brand/project-logos.tsx`, p. ej. el violeta #7c5cff y el degradado #3B9BFF → #0362D6 de Classly) y el monograma.

### Named Rules
**La Regla de Una Tinta por Capítulo.** Cada producto es un solo color a sangre; dentro del capítulo todo es blanco y sus mezclas. No hay acentos sueltos de marca en el escenario.

**La Regla del Color que Enlaza.** En el escenario, una tinta de marca solo aparece como referencia a su capítulo: el tramo de la alineación del héroe y la píldora de la app en la estación «Hoy», ambos enlaces a ese capítulo.

**La Regla del Verde Vivo.** El verde solo marca lo que está ocurriendo ahora (el puesto actual y el contador en producción). Nunca decora.

## Typography

**Display Font:** Archivo variable (ejes `wght` y `wdth`, cargada con `next/font` como `--font-archivo`), con respaldo `'Helvetica Neue', Arial, sans-serif`
**Body Font:** Archivo, la misma familia, a anchura normal
**Label/Mono Font:** Archivo semiexpandida en versales para rótulos. La única monoespaciada es la pila del sistema `ui-monospace` dentro de la figura de PromptEngine, porque representa una salida en Markdown.

**Character:** Un cartel de keynote compuesto con una sola grotesca: la condensada negra (`wdth` 62–72) pone cifras y titulares a escala de escenario; la anchura normal se lee; la semiexpandida (`wdth` 115) rotula.

### Hierarchy
- **Display** (`display`): el nombre en el héroe; `text-wrap: balance`.
- **Headline** (`headline`): título de cada sección y de cada capítulo de producto.
- **Title** (`title`): posicionamiento bajo el nombre, puesto actual, «Formación», «Idiomas» y la frase de cierre.
- **Lead** (`lead`): entradilla del héroe y de cada capítulo; máximo 40ch, `text-wrap: pretty`.
- **Body** (`body`): texto corrido de sección, máximo 62ch.
- **Label** (`label`): rótulos en versales junto al dato que nombran («pruebas automatizadas», «versión», «Sistemas que usan»).
- **Cifras** (`numeral-stage` 808 del héroe, `numeral-chapter` pruebas del capítulo, `numeral-cell` celdas del tablero, `numeral-year` años de la trayectoria): condensada negra, `tabular-nums lining-nums`, para que las posiciones decimales cuadren.
- **Contacto** (`contact`): el correo del cierre a escala de titular, subrayado que crece al pasar.

### Named Rules
**La Regla de Una Familia.** Archivo es la única voz. La jerarquía la dan el peso y el eje de anchura; no se añade una segunda familia de display.

**La Regla de la Cifra Tabular.** Toda cifra que se compara con otra se compone con `tabular-nums lining-nums` y anchura condensada; las columnas cuadran.

**La Regla del Rótulo Debajo.** El rótulo va debajo del dato o junto a lo que rotula, nunca encima de un título como antetítulo.

## Layout

Un marco centrado de ancho máximo `max-width` con medianil fluido `gutter`. El héroe ocupa casi la primera pantalla: en ≥1080px es una rejilla `1.15fr / 1fr` (nombre y acciones a la izquierda, marcador 808 y alineación a la derecha) con altura `min(calc(100svh - 4rem), 56rem)`; por debajo, una sola columna. Los capítulos son franjas a sangre de borde a borde con relleno vertical `chapter`; dentro, rejilla `1.2fr / 1fr` en ≥1080px que se refleja (`--espejo`) en capítulos alternos. Las secciones de escenario usan relleno `section` y una cabecera `1.2fr / 1fr` con el título a la izquierda y el texto alineado abajo.

Los conjuntos proporcionales (tramos de la alineación, capas del stack, tarjetas de formato) se separan por una costura de `seam`. La alineación reparte su ancho con `flex-grow` igual al número de pruebas de cada app.

Puntos de corte observados: 560px (ajustes estrechos del tablero y la figura de red), 640px (compositor de PromptEngine en columnas), 760px (formatos en tres columnas), 900px (aparece la navegación, capas y formación en dos columnas, hilo con columna de año de 9rem) y 1080px (rejillas de dos columnas del héroe, capítulos, cabeceras y puesto).

**La Regla de la Costura.** Los elementos que forman un solo todo proporcional se separan 4px, no con huecos de rejilla genéricos: se leen como una pieza partida, no como tarjetas sueltas.

## Elevation & Depth

El escenario es plano. No hay sombras de elevación: la profundidad la dan el cambio de tinta entre escenario y capítulo, los filetes (1px de sección, 2px de marcador) y las superficies `panel` apenas despegadas del fondo. Las figuras de mecanismo dentro de un capítulo oscurecen su tinta un 14 % (`color-mix(in oklab, #000000 14%, var(--tono))`) en lugar de levantarse. El único halo es el anillo del nodo vivo de la trayectoria. El foco se marca con contorno, nunca con sombra.

### Shadow Vocabulary
- **Halo vivo** (`box-shadow: 0 0 0 5px color-mix(in oklab, var(--e-live) 22%, transparent)`): solo en el nodo de la estación actual.

### Named Rules
**La Regla del Escenario Plano.** Nada flota. Si algo necesita separarse, cambia de tinta o recibe un filete.

## Shapes

Dos lenguajes conviven a propósito. Lo que se pulsa es píldora (`pill`): botones, botón de icono, chips de tecnología, píldoras de app y piezas del compositor. Lo que contiene es rectángulo de esquina suave: capas y tarjetas de formato (`panel`), cajas de nodo de la figura de red (`node`), figuras (`figure`). Las franjas de capítulo, los tramos de la alineación y los filetes son rectos, sin redondeo. Los marcadores de lista de la migración son cuadritos de `hairline` con borde de 1.5px (vacíos antes, rellenos después). Bordes de trazo: 1px para filetes, 1.5px para controles, 2px para el énfasis (marcador, tablero, lado «después»).

## Components

### Buttons
- **Shape:** píldora (`pill`), borde de 1.5px en la tinta actual.
- **Primary** (`button-primary`): fondo de tinta y texto de fondo, alto mínimo 3rem, peso 600. Lleva flecha que avanza 3px al pasar; al pulsar baja 1px. Dentro de un capítulo las variables `--tinta`/`--fondo` se reasignan, así que el mismo botón sale blanco con texto en la tinta del capítulo.
- **Hover / Focus:** transición de 180ms con la curva de escenario; foco con contorno de 2px en la tinta y separación de 3px.
- **Hueco** (`button-ghost`): transparente con borde y texto en tinta; al pasar se rellena con la tinta al 8 %.
- **Chico** (`button-small`): 2.5rem de alto, para la barra superior, los enlaces de proyecto y las redes del cierre.
- **De icono** (`button-icon`): círculo de 2.75rem con borde `line-strong` que pasa a tinta al pasar; tema, GitHub y LinkedIn.

### Chips
- **Style** (`chip`): píldora con borde de 1px `line-strong`, 0.8125rem, peso 500; tecnologías del puesto.
- **Píldora de app** (`app-chip`): rellena con la tinta de su app y texto blanco, con el logotipo; sube 2px al pasar y enlaza a su capítulo.

### Cards / Containers
- **Corner Style:** `panel` para capas y formatos; `figure` para figuras de mecanismo.
- **Background:** `panel` sobre el escenario; la capa viva del stack invierte a tinta.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1px `line`; la tarjeta de formato pasa a borde de tinta y sube 2px al pasar.
- **Internal Padding:** 1.25rem × 1.5rem.

### Navigation
- **Barra superior** (`top-bar`): fija arriba, 4rem, fondo de escenario. Sin filete en reposo; el filete inferior aparece al despegarse (scroll > 8px), para que arriba del todo la barra sea parte del escenario. Monograma + alias a la izquierda, enlaces de sección (desde 900px) y a la derecha tema y «Currículum».
- **Enlaces:** 0.9375rem, peso 500, gris de lectura; al pasar o en la sección activa (`aria-current`) pasan a tinta y una raya de 2px crece desde la izquierda en 260ms.

### Barra de alineación (componente de firma)
Tres tramos con altura de 1.25rem, uno por app, en su tinta de marca, de ancho proporcional a sus pruebas y separados por la costura. Debajo de cada uno, la cifra en negrita tabular y el nombre. Cada tramo es un enlace a su capítulo: al pasar engorda a 2.25rem y los demás bajan al 55 % de opacidad. Al cargar, los tramos crecen desde la izquierda en 600ms escalonados 70ms.

### Rodillo de dígitos (componente de firma)
Cada dígito es una columna 0–9 repetida dos veces que en reposo ya muestra la cifra final; la animación (760ms, 60ms de escalón por dígito) sale de la primera vuelta. El 808 del héroe rueda al cargar; las cifras de capítulo ruedan una sola vez al entrar en pantalla desde fuera, nunca si la página se abre ya con ellas a la vista. La cifra real va además en texto para lectores de pantalla.

### Tablero de capítulo
Filete de 2px en la tinta del capítulo arriba; la cifra de pruebas manda a lo ancho (`numeral-chapter`) y debajo tres celdas (`numeral-cell`) separadas por filetes de 1px: ficheros, plataformas y versión, cada una con su rótulo debajo.

### Hilo de trayectoria
Una lista ordenada donde cada estación es año (`numeral-year`, alineado a la derecha) + nodo circular de 1.375rem + cuerpo. Un trazo de 2px en tinta une todas las estaciones y termina exactamente en «Hoy». Lo que sigue en curso corre como riel de 4px pegado al hilo desde su estación hasta el final; el nodo en curso se rellena de tinta y el vivo de verde con halo.

### Figura de mecanismo
Recuadro `figure` con filete y la tinta del capítulo oscurecida, que dibuja lo que la app hace con los hechos del contenido (red local de SwitchIot con enlaces discontinuos que fluyen; secciones que se componen en Markdown en PromptEngine). No son capturas ni pantallas fingidas.

## Do's and Don'ts

### Do:
- **Do** montar cada producto nuevo como capítulo a sangre en una sola tinta, con todo su contenido en blanco y sus mezclas `color-mix` al 92 / 88 / 26 %; comprobar ≥ 4,5:1 del texto terciario sobre la tinta.
- **Do** declarar todo token nuevo de la portada en `app/home.css`, con prefijo `--e-` y su valor en `.dark`.
- **Do** componer las cifras comparables con Archivo condensada negra y `tabular-nums lining-nums`.
- **Do** dejar que el estado de reposo sea el estado final: animaciones con `backwards`, desactivadas en `prefers-reduced-motion: reduce`, y una sola entrada escalonada (600ms, 70ms de escalón) en la primera pantalla.
- **Do** usar la curva de escenario `cubic-bezier(0.16, 1, 0.3, 1)` para todo movimiento con dirección; lineal solo para color y opacidad.
- **Do** separar las piezas de un mismo todo proporcional con la costura de 4px.

### Don't:
- **Don't** usar una tinta de marca en el escenario salvo como enlace a su capítulo (tramo de alineación, píldora de app).
- **Don't** usar el verde vivo para nada que no esté ocurriendo ahora.
- **Don't** añadir una segunda familia de display ni sombras de elevación.
- **Don't** poner un rótulo encima de un título como antetítulo; va debajo o junto al dato.
- **Don't** reducir los capítulos a una fila de tarjetas iguales ni volver al héroe con botones sobre tarjetas.
- **Don't** mostrar capturas o pantallas inventadas: las figuras dibujan el mecanismo con hechos de `content/site.ts`.
- **Don't** añadir nuevas lecturas de tokens de `app/globals.css` desde la portada, ni de tokens `--e-*` desde `/cv`: son mundos separados.
