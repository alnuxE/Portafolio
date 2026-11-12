# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores técnicos, líderes de ingeniería y gerentes de contratación de empresas grandes que evalúan a un candidato a **Software Engineer** (perfil integral: backend, arquitectura, móvil, web y plataforma). Llegan desde un enlace en el CV, LinkedIn o un correo, normalmente en escritorio durante un filtro de candidatos, y deciden en segundos si vale la pena una entrevista. Un segundo público son los entrevistadores técnicos que vuelven al sitio para preparar preguntas.

## Product Purpose

Portafolio personal y generador de currículum imprimible de Daniel Alejandro Estrada Olalde (`alnuxE`). Su trabajo es que quien lo abra entienda, sin leerlo todo, que se trata de un ingeniero que ya trabaja en producción y que construye software con disciplina de ingeniería (arquitectura por capas, pruebas automatizadas, publicación multiplataforma). Éxito = el visitante descarga/abre el CV o escribe para entrevistar.

## Positioning

Experiencia real en producción (backend desde abril de 2024 en Fay Publicidad · Metrix, sobre sistemas que usan Walmart, Waldos y P&G) sumada a tres aplicaciones propias publicadas de principio a fin con 808 pruebas automatizadas. El código de las apps es privado: las cifras verificables y las decisiones de arquitectura son la prueba, no capturas ni demos.

## Operating Context

- Se comparte como enlace junto al CV; `/cv` imprime en A4 tres presentaciones (Clásico, Destacado, Soporte TI) seleccionables por URL (`?formato=`).
- Se revisa en escritorio y en móvil; debe funcionar en tema claro y oscuro.
- Idioma: español (es-MX).

## Capabilities and Constraints

- Next.js 16 (App Router) + React 19 + TypeScript estricto + Tailwind CSS v4; `next-themes`; `lucide-react`.
- Toda la información vive en `content/site.ts` como fuente única tipada; los totales (apps, pruebas, ficheros) se calculan, nunca se escriben a mano.
- Despliegue: GitHub Pages (workflow en `.github/workflows/`) y, desde oct-2026, contenedor Docker (`output: "standalone"`). Rutas a `public/` deben tolerar `basePath`; los logotipos son SVG en línea.
- La ruta `/cv` y sus tres formatos imprimibles deben seguir funcionando.
- No mencionar Gestión Nebula V2 en ninguna parte (sitio, CV ni documentación): el autor no quiere que se le asocie con ese trabajo.
- Se pueden pulir los textos para impacto, pero sin inventar cifras, clientes, logros ni tecnologías.
- Abierto: enlaces por proyecto a repos, tiendas o demos (el usuario quiere incluirlos; aún no los ha proporcionado; los repos de las tres apps son privados).

## Brand Commitments

- Nombre: Daniel Alejandro Estrada Olalde · alias `alnuxE` · monograma propio (`components/brand/monogram.tsx`).
- Logotipos de producto en SVG con sus colores exactos: Classly, PromptEngine, SwitchIot (`components/brand/project-logos.tsx`).
- Voz: primera persona, sobria, concreta; afirma con cifras y decisiones, no con adjetivos.

## Evidence on Hand

- `content/site.ts`: perfil, stack por capas, 3 apps (SwitchIot 338 pruebas/85 ficheros, PromptEngine 320/54, Classly 150/79), experiencia, formación (IPN, Oracle Next Education, Bachilleres), idiomas.
- GitHub público: github.com/alnuxE (los repos de las apps destacadas no son públicos).
- No existen: foto profesional, testimonios, certificaciones adicionales, capturas de las apps. No se deben fabricar.

## Product Principles

1. Probar, no afirmar: cada afirmación se respalda con una cifra o una decisión técnica verificable.
2. Una sola fuente de verdad: el contenido se edita en un lugar y se propaga al sitio y al CV.
3. Legible en segundos: lo esencial (quién, qué hace, prueba, contacto) cabe en la primera pantalla.
4. Ingeniería visible en la forma: el propio sitio debe demostrar el cuidado que describe (rendimiento, accesibilidad, temas, impresión).

## Accessibility & Inclusion

WCAG 2.2 AA; respeto a `prefers-reduced-motion` (el estado final es el estado por defecto); navegable por teclado; ambos temas con contraste suficiente.
