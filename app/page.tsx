import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "../components/icons";

import { ThemeSwitcher } from "../components/theme-switcher";
import { RailNav } from "../components/rail-nav";
import { ScrollProgress } from "../components/scroll-progress";
import { Monogram } from "../components/brand/monogram";
import {
  ClasslyMark,
  PromptEngineMark,
  SwitchIotMark,
} from "../components/brand/project-logos";
import {
  apps,
  education,
  experience,
  profile,
  sections,
  stackLayers,
  totals,
  work,
  type ProjectBrand,
} from "../content/site";

/* La marca y el canto de cada producto, resueltos en un solo sitio. El canto
   usa la variante `-fg` del color: el hex exacto de marca no es legible como
   trazo fino en los dos temas, y un canto es un trazo fino. */
const MARCAS: Record<
  ProjectBrand,
  { Mark: (p: { className?: string }) => ReactNode; canto: string }
> = {
  classly: { Mark: ClasslyMark, canto: "var(--brand-classly-fg)" },
  prompt: { Mark: PromptEngineMark, canto: "var(--brand-prompt-fg)" },
  switch: { Mark: SwitchIotMark, canto: "var(--brand-switch-fg)" },
  nebula: { Mark: () => null, canto: "var(--fg)" },
};

/** Una celda del cuadro de rótulo: rótulo arriba, dato, y matiz debajo. */
function CeldaRotulo({
  rotulo,
  valor,
  nota,
}: {
  rotulo: string;
  valor: string;
  nota: string;
}) {
  return (
    <div className="bg-surface p-3">
      <p className="t-label">{rotulo}</p>
      <p
        className="mt-1.5 font-[family-name:var(--font-display)] text-fg tabular-nums"
        style={{ fontVariationSettings: '"wdth" 87.5', fontWeight: 500 }}
      >
        {valor}
      </p>
      <p className="t-mono mt-0.5 text-fg-muted">{nota}</p>
    </div>
  );
}

/** Una lectura de instrumento: la cifra sola, con su unidad debajo. */
function Lectura({ valor, unidad }: { valor: string; unidad: string }) {
  return (
    <div className="pozo-celda">
      <p className="t-metric text-fg">{valor}</p>
      <p className="t-label mt-1.5">{unidad}</p>
    </div>
  );
}

export default function Home() {
  const [puesto] = experience;

  return (
    <div className="relative min-h-screen">
      {/* El papel milimetrado no es textura: es el soporte del que el cuadro de
          rótulo forma parte. Solo aparece donde la página se presenta como
          documento — al abrir y al cerrar. */}
      <div
        aria-hidden="true"
        className="substrato pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem]"
      />

      <ScrollProgress />

      {/* En móvil el conmutador sale del cuadro de rótulo: ahí no compite con
          nada, y a 360 px de ancho el cuadro no tiene sitio para él. */}
      <div className="fixed right-3 top-3 z-40 h-11 w-11 border border-border bg-surface sm:hidden">
        <ThemeSwitcher compacto />
      </div>

      <div className="envoltura">
        <div className="lg:grid lg:grid-cols-[var(--margin-col)_minmax(0,1fr)] lg:gap-x-10">
          <aside className="hidden lg:block">
            <RailNav />
          </aside>

          <main className="min-w-0">
            {/* ---------------------------------------------------------- HÉROE */}
            <section
              id="inicio"
              aria-labelledby="titulo-inicio"
              className="pb-14 pt-14 lg:pb-24 lg:pt-20"
            >
              <div className="anim-entrada mb-10 flex items-center gap-3 text-fg">
                <Monogram className="h-6 w-auto" />
                <span className="t-label">portafolio · {profile.alias}</span>
              </div>

              <h1 id="titulo-inicio" className="t-display anim-entrada text-fg">
                <span className="lg:block">Daniel Alejandro</span>{" "}
                <span className="lg:block">Estrada Olalde</span>
              </h1>

              <p className="t-lead anim-entrada-2 mt-6 text-fg-muted">
                {profile.headline}
              </p>

              <div className="anim-trazo rotulo mt-10 max-w-[46rem]">
                <div className="rotulo-franja">
                  <span className="t-label">ficha</span>
                  <div className="-mr-3 hidden self-stretch border-l border-border-soft sm:block">
                    <ThemeSwitcher className="!h-full w-auto px-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-border-soft sm:grid-cols-4">
                  <CeldaRotulo
                    rotulo="Rol"
                    valor="Backend"
                    nota="desarrollador"
                  />
                  <CeldaRotulo
                    rotulo="Desde"
                    valor="abr 2024"
                    nota="Fay · Metrix"
                  />
                  <CeldaRotulo
                    rotulo="Apps"
                    valor={String(totals.apps)}
                    nota="publicadas"
                  />
                  <CeldaRotulo
                    rotulo="Pruebas"
                    valor={String(totals.tests)}
                    nota="automatizadas"
                  />
                </div>

                <div className="grid grid-cols-1 gap-px border-t border-border-soft bg-border-soft sm:grid-cols-[1fr_1fr_2fr]">
                  <CeldaRotulo rotulo="Centro" valor="IPN" nota="CDMX" />
                  <CeldaRotulo
                    rotulo="Avance"
                    valor="9.º semestre"
                    nota="último"
                  />
                  <CeldaRotulo
                    rotulo="Carrera"
                    valor="Ing. Informática"
                    nota="titulación en curso"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                <Link href="/cv" className="btn w-full sm:w-auto">
                  Ver currículum
                </Link>
                <ul className="t-mono flex flex-wrap items-center gap-x-6 gap-y-3">
                  <li>
                    <a className="enlace" href={profile.githubUrl}>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a className="enlace" href={profile.linkedinUrl}>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a className="enlace" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* ---------------------------------------------------------- STACK */}
            <section
              id="stack"
              aria-labelledby="titulo-stack"
              className="seccion"
            >
              <h2 id="titulo-stack" className="t-h2 text-fg">
                Stack
              </h2>
              <p className="t-body mt-4 text-fg-muted">
                Agrupado por capas, que es como lo pienso cuando construyo.
              </p>

              <div className="-mx-3 mt-8">
                {stackLayers.map((capa) => (
                  <div
                    key={capa.id}
                    className={`grid gap-x-8 gap-y-2 border-t border-border-soft px-3 py-4 lg:grid-cols-[9rem_minmax(0,1fr)] ${
                      capa.viva ? "bg-accent-soft" : ""
                    }`}
                  >
                    <p className={`t-label ${capa.viva ? "marca-viva" : ""}`}>
                      {capa.label}
                    </p>
                    <ul className="t-mono flex flex-wrap gap-x-8 gap-y-2 text-fg">
                      {capa.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ------------------------------------------------------ PROYECTOS */}
            <section
              id="proyectos"
              aria-labelledby="titulo-proyectos"
              className="seccion"
            >
              <h2 id="titulo-proyectos" className="t-h2 text-fg">
                Proyectos
              </h2>
              <p className="t-body mt-4 text-fg-muted">
                Tres aplicaciones propias, diseñadas y publicadas de principio a
                fin, y un sistema en producción para cliente. El código es
                privado, así que aquí van las cifras.
              </p>

              {/* El total de la tabla, antes de las filas. */}
              <div className="pozo mt-8 border-y border-border">
                <Lectura valor={String(totals.apps)} unidad="apps propias" />
                <Lectura valor={String(totals.tests)} unidad="pruebas" />
                <Lectura
                  valor={String(totals.files)}
                  unidad="ficheros Dart"
                />
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {apps.map((app) => {
                  const { Mark, canto } = MARCAS[app.brand];
                  return (
                    <article
                      key={app.id}
                      className="tarjeta group"
                      style={{ ["--canto" as string]: canto }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <Mark className="h-10 w-10 shrink-0" />
                        <span className="t-mono text-fg-faint">
                          v{app.version}
                        </span>
                      </div>

                      <h3 className="t-h3 mt-4 text-fg">{app.name}</h3>
                      {/* Alto mínimo de cuatro líneas: sin él cada descripción
                          empuja su pozo a una altura distinta y las cifras dejan
                          de compararse en vertical, que es toda la razón de la
                          pieza. En una sola columna no hace falta. */}
                      <p className="mb-6 mt-2 text-[length:var(--fs-small)] leading-relaxed text-fg-muted sm:min-h-[6rem]">
                        {app.tagline}
                      </p>

                      {/* `mt-auto` empuja el pozo al pie de la tarjeta: las tres
                          comparten rejilla, así que 150 / 320 / 338 se comparan en
                          vertical de un vistazo. Ésa es toda la razón de la pieza. */}
                      <div className="pozo -mx-5 lg:-mx-6">
                        <Lectura valor={String(app.tests)} unidad="pruebas" />
                        <Lectura valor={String(app.files)} unidad="ficheros" />
                        <Lectura
                          valor={String(app.platforms.length)}
                          unidad="plataformas"
                        />
                      </div>

                      <p className="t-mono mt-4 flex flex-wrap justify-between gap-x-4 gap-y-1 text-fg-faint">
                        <span className="text-fg-muted">
                          {app.platforms.join(" · ")}
                        </span>
                        <span>código privado</span>
                      </p>

                      {app.note ? (
                        <p className="marca-viva mt-4 text-[length:var(--fs-small)] leading-snug text-fg-muted">
                          {app.note}
                        </p>
                      ) : null}
                    </article>
                  );
                })}
              </div>

              <div className="plano mt-10">
                <p className="margen lg:pt-1">trabajo profesional</p>
                <article
                  className="tarjeta"
                  style={{ ["--canto" as string]: MARCAS.nebula.canto }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="t-h3 text-fg">{work.name}</h3>
                    <span className="t-mono text-fg-faint">{work.client}</span>
                  </div>
                  <p className="t-body mt-3 text-[length:var(--fs-small)] leading-relaxed text-fg-muted">
                    {work.summary}
                  </p>
                  <div className="pozo -mx-5 mt-5 grid-cols-2 grid-flow-row sm:grid-flow-col lg:-mx-6">
                    {work.fields.map((campo) => (
                      <div key={campo.label} className="pozo-celda !text-left">
                        <p className="t-label">{campo.label}</p>
                        {campo.value.map((linea) => (
                          <p key={linea} className="t-mono mt-1 text-fg">
                            {linea}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </section>

            {/* ----------------------------------------------------- EXPERIENCIA */}
            <section
              id="experiencia"
              aria-labelledby="titulo-experiencia"
              className="seccion"
            >
              <h2 id="titulo-experiencia" className="t-h2 text-fg">
                Experiencia
              </h2>

              <div className="plano mt-8">
                <p className="margen lg:pt-1.5">{puesto.periodShort}</p>
                <div>
                  <h3 className="t-h3 text-fg">{puesto.role}</h3>
                  <p className="t-mono mt-1 text-fg-muted">{puesto.company}</p>

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {puesto.highlights.map((linea) => (
                      <li key={linea} className="logro text-fg-muted">
                        {linea}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border border-border-soft bg-surface-2 p-4">
                    <p className="t-label">Clientes</p>
                    <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-1 text-fg">
                      {puesto.clients.map((cliente) => (
                        <li key={cliente}>{cliente}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------- FORMACIÓN */}
            <section
              id="formacion"
              aria-labelledby="titulo-formacion"
              className="seccion"
            >
              <h2 id="titulo-formacion" className="t-h2 text-fg">
                Formación
              </h2>

              <div className="mt-8">
                {education.map((estudio, i) => (
                  <div
                    key={estudio.title}
                    className={`plano gap-y-1 py-5 ${
                      i > 0 ? "border-t border-border-soft" : ""
                    }`}
                  >
                    <p className="margen lg:pt-1.5">{estudio.period}</p>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <div>
                        <h3
                          className={`t-h3 text-fg ${
                            estudio.current ? "marca-viva" : ""
                          }`}
                        >
                          {estudio.title}
                        </h3>
                        <p className="t-mono mt-1 text-fg-muted">
                          {estudio.school}
                        </p>
                      </div>
                      {estudio.detail ? (
                        <p className="t-mono text-fg-faint">{estudio.detail}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* -------------------------------------------------------- CONTACTO */}
            <footer
              id="contacto"
              aria-labelledby="titulo-contacto"
              className="substrato substrato-invertido seccion pb-16 lg:pb-20"
            >
              <h2 id="titulo-contacto" className="t-h2 text-fg">
                ¿Hablamos?
              </h2>

              <div className="rotulo mt-8">
                <div className="grid grid-cols-1 gap-px bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex min-h-14 flex-col justify-center bg-surface p-3 hover:bg-surface-2 [&:hover_span]:decoration-accent"
                    style={{ ["--focus-bg" as string]: "var(--surface)" }}
                  >
                    <span className="t-label flex items-center gap-1.5">
                      <Mail size={14} aria-hidden="true" /> Correo
                    </span>
                    <span className="t-mono mt-1 break-all text-fg underline decoration-border underline-offset-[3px]">
                      {profile.email}
                    </span>
                  </a>
                  <a
                    href={profile.githubUrl}
                    className="flex min-h-14 flex-col justify-center bg-surface p-3 hover:bg-surface-2 [&:hover_span]:decoration-accent"
                    style={{ ["--focus-bg" as string]: "var(--surface)" }}
                  >
                    <span className="t-label flex items-center gap-1.5">
                      <GithubIcon size={14} /> GitHub
                    </span>
                    <span className="t-mono mt-1 text-fg underline decoration-border underline-offset-[3px]">
                      {profile.github}
                    </span>
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    className="flex min-h-14 flex-col justify-center bg-surface p-3 hover:bg-surface-2 [&:hover_span]:decoration-accent"
                    style={{ ["--focus-bg" as string]: "var(--surface)" }}
                  >
                    <span className="t-label flex items-center gap-1.5">
                      <LinkedinIcon size={14} /> LinkedIn
                    </span>
                    <span className="t-mono mt-1 text-fg underline decoration-border underline-offset-[3px]">
                      Daniel Estrada Olalde
                    </span>
                  </a>
                  <div className="flex min-h-14 flex-col justify-center bg-surface p-3">
                    <span className="t-label flex items-center gap-1.5">
                      <MapPin size={14} aria-hidden="true" /> Ubicación
                    </span>
                    <span className="t-mono mt-1 text-fg">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* El índice completo vive aquí donde el raíl lateral no existe. */}
              <nav aria-label="Índice" className="mt-8 lg:hidden">
                <ul className="t-mono flex flex-wrap gap-x-5 gap-y-2">
                  {sections.map((seccion) => (
                    <li key={seccion.id}>
                      <a className="enlace" href={`#${seccion.id}`}>
                        {seccion.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-10 border-t border-border-soft pt-6">
                <p className="t-colofon">
                  © {new Date().getFullYear()} {profile.name}
                </p>
                <p className="t-colofon mt-1">
                  Next.js · Tailwind CSS · Martian Mono e IBM Plex
                </p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
