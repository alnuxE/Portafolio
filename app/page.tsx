import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CloudOff,
  Cpu,
  Droplets,
  Lock,
  MapPin,
  Smartphone,
} from "lucide-react";

import "./home.css";

import { GithubIcon, LinkedinIcon } from "../components/icons";
import {
  ClasslyMark,
  PromptEngineMark,
  SwitchIotMark,
} from "../components/brand/project-logos";
import { Barra } from "../components/home/barra";
import { Rodillo } from "../components/home/rodillo";
import { TiempoEnProduccion } from "../components/home/tiempo-en-produccion";
import {
  apps,
  education,
  experience,
  languages,
  portada,
  profile,
  stackLayers,
  totals,
  type AppProject,
  type ProjectBrand,
} from "../content/site";

/* Cada producto tiene su tinta. El capítulo entero se baña en ella; en el héroe
   la misma tinta pinta su tramo de la alineación, de modo que el color ya
   significa «esta app» antes de llegar a su capítulo. */
const MARCAS: Record<
  ProjectBrand,
  { Mark: (p: { className?: string }) => ReactNode; tinta: string }
> = {
  switch: { Mark: SwitchIotMark, tinta: "var(--e-switch)" },
  prompt: { Mark: PromptEngineMark, tinta: "var(--e-prompt)" },
  classly: { Mark: ClasslyMark, tinta: "var(--e-classly)" },
};

const var_ = (vars: Record<string, string | number>) => vars as CSSProperties;

/* -------------------------------------------------------------------------
   Figuras de mecanismo: dibujan lo que la app hace, con los hechos del
   contenido. No son capturas: el código es privado y no se fingen pantallas.
   ------------------------------------------------------------------------- */

function FiguraSwitch() {
  return (
    <figure className="e-figura">
      <div className="e-red" role="img" aria-label="La app se conecta al ESP32 por la red local y el ESP32 controla la bomba, sin pasar por la nube.">
        <div className="e-nodo">
          <span className="e-nodo-caja"><Smartphone size={22} aria-hidden="true" /></span>
          App
        </div>
        <div className="e-enlace-red"><span>red local</span></div>
        <div className="e-nodo">
          <span className="e-nodo-caja"><Cpu size={22} aria-hidden="true" /></span>
          ESP32
        </div>
        <div className="e-enlace-red"><span>relé</span></div>
        <div className="e-nodo">
          <span className="e-nodo-caja"><Droplets size={22} aria-hidden="true" /></span>
          Bomba
        </div>
      </div>
      <p className="e-sin-nube">
        <CloudOff size={16} aria-hidden="true" />
        Sin nube y sin cuenta: si se cae internet, la bomba sigue respondiendo.
      </p>
    </figure>
  );
}

function FiguraPrompt() {
  const piezas = ["Rol", "Objetivo", "Contexto", "Formato"];
  return (
    <figure className="e-figura">
      <div className="e-compositor">
        <ul className="e-piezas" aria-label="Secciones del prompt">
          {piezas.map((p, i) => (
            <li key={p} className="e-pieza" style={var_({ "--i": i })}>
              <i aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
        <ArrowRight className="hidden sm:block" size={22} aria-hidden="true" />
        <pre className="e-salida" aria-label="Ejemplo de salida en Markdown">
          <b>## Rol</b>{"\n"}Revisor de código senior{"\n"}<b>## Objetivo</b>{"\n"}Detectar fugas de memoria{"\n"}<b>## Formato</b>{"\n"}Lista priorizada
        </pre>
      </div>
      <figcaption>Ejemplo ilustrativo de cómo las secciones se componen en Markdown.</figcaption>
    </figure>
  );
}

const FIGURAS: Partial<Record<ProjectBrand, () => ReactNode>> = {
  switch: FiguraSwitch,
  prompt: FiguraPrompt,
};

/* -------------------------------------------------------------------------
   Capítulo de lanzamiento
   ------------------------------------------------------------------------- */

function Capitulo({ app, espejo }: { app: AppProject; espejo: boolean }) {
  const marca = MARCAS[app.brand as ProjectBrand];
  const Figura = FIGURAS[app.brand];
  return (
    <section
      id={app.id}
      aria-labelledby={`titulo-${app.id}`}
      className={`e-capitulo e-capitulo--${app.brand} ${espejo ? "e-capitulo--espejo" : ""}`}
    >
      <div className="e-marco e-capitulo-rejilla">
        <div>
          <marca.Mark className="e-capitulo-marca" />
          <h3 id={`titulo-${app.id}`} className="e-titulo">
            {app.name}
          </h3>
          <p className="e-entradilla mt-6" style={{ color: "var(--tinta-2)" }}>
            {app.tagline}
          </p>
          <p className="e-ficha-linea">
            <span>v{app.version}</span>
            <span>{app.platforms.join(" · ")}</span>
          </p>

          <ul className="e-decisiones" aria-label={`Decisiones de ingeniería en ${app.name}`}>
            {[...app.decisiones, ...(app.note ? [app.note] : [])].map((d) => (
              <li key={d}>
                <Check size={18} aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="e-tablero">
            <div className="e-tablero-principal">
              <div>
                <Rodillo valor={app.tests} />
                <p className="e-rotulo">pruebas automatizadas</p>
              </div>
            </div>
            <div className="e-tablero-celda">
              <Rodillo valor={app.files} />
              <p className="e-rotulo">ficheros Dart</p>
            </div>
            <div className="e-tablero-celda">
              <Rodillo valor={app.platforms.length} />
              <p className="e-rotulo">
                {app.platforms.length === 1 ? "plataforma" : "plataformas"}
              </p>
            </div>
            <div className="e-tablero-celda">
              <span className="e-cifra" style={{ fontSize: "clamp(2.5rem, 1.8rem + 2.4vw, 3.75rem)" }}>
                {app.version.split(".")[0]}.{app.version.split(".")[1]}
              </span>
              <p className="e-rotulo">versión</p>
            </div>
          </div>

          {Figura ? <Figura /> : null}

          {app.enlaces && app.enlaces.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {app.enlaces.map((e) => (
                <li key={e.href}>
                  <a href={e.href} className="e-boton e-boton--hueco e-boton--chico">
                    {e.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          <p className="e-privado">
            <Lock size={14} aria-hidden="true" />
            Código privado · cifras tomadas del repositorio
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Trayectoria: un solo hilo
   -------------------------------------------------------------------------
   Cada etapa es una estación sobre el mismo trazo. Lo que sigue abierto (la
   carrera, el puesto) corre como un riel pegado al hilo desde su estación
   hasta «hoy», así que se ve de un vistazo qué se solapa con qué.
   ------------------------------------------------------------------------- */

function Hilo() {
  const etapas = portada.trayectoria;
  const ultima = etapas.length; // la estación «Hoy» va detrás de todas
  const abiertas = etapas
    .map((t, idx) => ({ ...t, idx, vivo: t.id === "fay" }))
    .filter((t) => t.hasta === null);
  const rieles = (k: number) =>
    abiertas
      .filter((a) => a.idx <= k)
      .map((a, n) => (
        <span
          key={a.id}
          aria-hidden="true"
          className={`e-riel ${a.vivo ? "e-riel--vivo" : ""} ${
            a.idx === k ? "e-riel--inicio" : k === ultima ? "e-riel--fin" : ""
          }`}
          style={var_({ "--off": `${14 + n * 8}px` })}
        />
      ));

  return (
    <ol className="e-hilo" aria-label="Trayectoria en orden cronológico">
      {etapas.map((t, k) => {
        const vivo = t.id === "fay";
        const enCurso = t.hasta === null;
        return (
          <li
            key={t.id}
            className={`e-estacion ${vivo ? "e-estacion--vivo" : enCurso ? "e-estacion--curso" : ""}`}
          >
            {rieles(k)}
            <span className="e-estacion-anio">{Math.floor(t.desde)}</span>
            <span className="e-estacion-nodo" aria-hidden="true" />
            <div className="e-estacion-cuerpo">
              <strong>{t.titulo}</strong>
              <span>{t.lugar}</span>
              <span className="e-estacion-periodo">
                {t.periodo}
                {vivo ? " · en curso" : enCurso ? " · en curso" : ""}
              </span>
            </div>
          </li>
        );
      })}
      <li className="e-estacion e-estacion--curso">
        {rieles(ultima)}
        <span className="e-estacion-anio">Hoy</span>
        <span className="e-estacion-nodo" aria-hidden="true" />
        <div className="e-estacion-cuerpo">
          <strong>{totals.apps} apps propias publicadas</strong>
          <span>En paralelo al trabajo y a la carrera, de la arquitectura a la publicación.</span>
          <ul className="e-estacion-apps">
            {apps.map((app) => {
              const { Mark, tinta } = MARCAS[app.brand as ProjectBrand];
              return (
                <li key={app.id}>
                  <a href={`#${app.id}`} style={var_({ "--tono": tinta })}>
                    <Mark />
                    {app.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </ol>
  );
}

/* -------------------------------------------------------------------------
   Página
   ------------------------------------------------------------------------- */


export default function Home() {
  const [puesto] = experience;

  return (
    <div className="escena">
      <Barra alias={profile.alias} />

      <main>
        {/* -------------------------------------------------------- HÉROE */}
        <section id="inicio" aria-labelledby="titulo-inicio" className="e-marco e-heroe">
          <div>
            <p className="e-estado e-entra" style={var_({ "--i": 0 })}>
              <span className="e-estado-vivo">
                <span className="e-pulso" aria-hidden="true" />
                <TiempoEnProduccion
                  anio={portada.enProduccionDesde.anio}
                  mes={portada.enProduccionDesde.mes}
                />
              </span>
              <span>{profile.location}</span>
            </p>

            <h1 id="titulo-inicio" className="e-nombre mt-8 e-entra" style={var_({ "--i": 1 })}>
              Daniel Alejandro
              <br />
              Estrada Olalde
            </h1>
            <p className="e-subtitulo mt-5 e-entra" style={var_({ "--i": 2, color: "var(--e-muted)" })}>
              {portada.posicionamiento}
            </p>

            <p className="e-entradilla mt-6 e-entra" style={var_({ "--i": 3 })}>
              {portada.entradilla}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 e-entra" style={var_({ "--i": 4 })}>
              <Link href="/cv" className="e-boton">
                Ver currículum
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={`mailto:${profile.email}`} className="e-boton e-boton--hueco">
                Escríbeme
              </a>
              <a href={profile.githubUrl} className="e-icono-boton" aria-label="GitHub">
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a href={profile.linkedinUrl} className="e-icono-boton" aria-label="LinkedIn">
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div className="e-marcador e-entra" style={var_({ "--i": 2 })}>
            <div className="e-marcador-cifra">
              <Rodillo valor={totals.tests} inmediato />
              <p className="e-marcador-unidad">pruebas automatizadas en verde</p>
            </div>

            <nav className="e-alineacion" aria-label="Pruebas por aplicación">
              {apps.map((app, i) => (
                <a
                  key={app.id}
                  href={`#${app.id}`}
                  className="e-tramo"
                  style={var_({ "--peso": app.tests, "--ink": MARCAS[app.brand as ProjectBrand].tinta, "--i": i })}
                >
                  <span className="e-tramo-barra" aria-hidden="true" />
                  <span className="e-tramo-dato">
                    <strong>{app.tests}</strong>
                    <span>{app.name}</span>
                  </span>
                </a>
              ))}
            </nav>

            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]" style={{ color: "var(--e-muted)" }}>
              <span>{totals.apps} apps propias</span>
              <span>{totals.files} ficheros Dart</span>
              <span>{puesto.clients.join(" · ")} en el trabajo</span>
            </p>
          </div>
        </section>

        {/* ---------------------------------------------- LANZAMIENTOS */}
        <section id="lanzamientos" aria-labelledby="titulo-lanzamientos">
          <div className="e-marco e-seccion !pb-16" style={{ borderTop: "1px solid var(--e-line)" }}>
            <div className="e-cabeza !mb-0">
              <h2 id="titulo-lanzamientos" className="e-titulo">
                Tres apps propias, de la arquitectura a la publicación
              </h2>
              <p className="e-texto">
                {portada.lanzamientos}
              </p>
            </div>
          </div>

          {apps.map((app, i) => (
            <Capitulo key={app.id} app={app} espejo={i % 2 === 1} />
          ))}

        </section>

        {/* ------------------------------------------------ TRAYECTORIA */}
        <section id="trayectoria" aria-labelledby="titulo-trayectoria" className="e-marco e-seccion">
          <div className="e-cabeza">
            <h2 id="titulo-trayectoria" className="e-titulo">
              Trayectoria
            </h2>
            <p className="e-texto">
              Diez años en un solo hilo: de técnico en programación a backend en
              producción, estudiando ingeniería al mismo tiempo.
            </p>
          </div>

          <Hilo />

          <div className="e-puesto">
            <div>
              <h3 className="e-subtitulo">{puesto.role}</h3>
              <p className="mt-2" style={{ color: "var(--e-muted)" }}>
                {puesto.company} · {puesto.period}
              </p>
              <p className="e-rotulo mt-8">Sistemas que usan</p>
              <ul className="e-clientes">
                {puesto.clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="e-logros">
                {puesto.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="e-chips" aria-label="Tecnologías del puesto">
                {puesto.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ STACK */}
        <section id="stack" aria-labelledby="titulo-stack" className="e-marco e-seccion">
          <div className="e-cabeza">
            <h2 id="titulo-stack" className="e-titulo">
              Stack, por capas
            </h2>
            <p className="e-texto">
              Ordenado como se dibuja una arquitectura: de lo que se escribe a lo
              que lo sostiene, y encima la práctica que decide cómo se usa todo lo
              demás.
            </p>
          </div>

          <div className="e-capas">
            {[...stackLayers].reverse().map((capa) => (
              <div key={capa.id} className={`e-capa ${capa.viva ? "e-capa--viva" : ""}`}>
                <p className="e-capa-nombre">{capa.label}</p>
                <ul>
                  {capa.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div>
              <h3 className="e-subtitulo mb-6">Formación</h3>
              <div className="e-formacion">
                {education.map((e) => (
                  <div key={e.title}>
                    <span className="e-periodo">{e.period}</span>
                    <span>
                      <strong className="font-semibold">{e.title}</strong>
                      <span className="block text-[0.9375rem]" style={{ color: "var(--e-muted)" }}>
                        {e.school}
                      </span>
                    </span>
                    <span className="text-[0.875rem]" style={{ color: "var(--e-muted)" }}>
                      {e.detail ?? ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="e-subtitulo mb-6">Idiomas</h3>
              <div className="e-formacion">
                {languages.map((l) => (
                  <div key={l.name} style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
                    <span>
                      <strong className="font-semibold">{l.name}</strong> · {l.level}
                      <span className="block text-[0.9375rem]" style={{ color: "var(--e-muted)" }}>
                        {l.detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- CONTACTO */}
        <section id="contacto" aria-labelledby="titulo-contacto" className="e-marco e-cierre">
          <h2 id="titulo-contacto" className="e-subtitulo max-w-[28ch]">
            {portada.cierre}
          </h2>
          <a href={`mailto:${profile.email}`} className="e-correo">
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.githubUrl} className="e-boton e-boton--hueco e-boton--chico">
              <GithubIcon className="h-4 w-4" /> github.com/{profile.github}
            </a>
            <a href={profile.linkedinUrl} className="e-boton e-boton--hueco e-boton--chico">
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 px-2 text-[0.9375rem]" style={{ color: "var(--e-muted)" }}>
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
          </div>

          <div className="e-formatos">
            <Link href="/cv" className="e-formato">
              <strong>Clásico <ArrowUpRight size={18} aria-hidden="true" /></strong>
              <span>Formato Harvard, blanco y negro, para convocatorias formales.</span>
            </Link>
            <Link href="/cv?formato=destacado" className="e-formato">
              <strong>Destacado <ArrowUpRight size={18} aria-hidden="true" /></strong>
              <span>Para empresa: jerarquía visual y color contenido.</span>
            </Link>
            <Link href="/cv?formato=operaciones" className="e-formato">
              <strong>Soporte TI <ArrowUpRight size={18} aria-hidden="true" /></strong>
              <span>El mismo expediente, ordenado para operaciones.</span>
            </Link>
          </div>

          <footer className="e-pie">
            <span>© 2026 {profile.name}</span>
            <a href="#inicio" className="e-enlace inline-flex items-center gap-1">
              Volver arriba <ArrowDown size={14} className="rotate-180" aria-hidden="true" />
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
}
