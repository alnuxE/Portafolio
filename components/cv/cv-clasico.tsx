import {
  apps,
  education,
  experience,
  languages,
  profile,
  stackLayers,
  totals,
  work,
} from "../../content/site";
import { githubTexto, linkedinTexto } from "./datos";

/**
 * Presentación «Clásico» — formato Harvard.
 *
 * Para convocatorias formales, bolsas de trabajo del IPN y cualquier sitio
 * donde el CV lo lee un humano que espera un documento y no una pieza de
 * diseño. EB Garamond en todo, una sola columna, ningún color: tinta negra
 * sobre papel blanco y un filete bajo cada encabezado. Ni una mono, ni una
 * sans.
 *
 * El orden de secciones es el que ya estaba bien planteado y se respeta:
 * Perfil → Experiencia → Formación → Proyectos → Habilidades / Idiomas.
 */
export function CvClasico() {
  return (
    <article className="hoja cv-clasico">
      <header>
        <h1 className="cl-nombre">{profile.name}</h1>
        <p className="cl-rol">{profile.role}</p>

        {/* Los separadores son CSS, no texto suelto en el marcado. */}
        <p className="cl-contacto">
          <span>{profile.phone}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.address}</span>
          <a href={profile.githubUrl}>{githubTexto}</a>
          <a href={profile.linkedinUrl}>{linkedinTexto}</a>
        </p>
      </header>

      <section className="cl-seccion" aria-labelledby="cl-perfil">
        <h2 id="cl-perfil">Perfil</h2>
        <p>{profile.summary[0]}</p>
      </section>

      <section className="cl-seccion" aria-labelledby="cl-experiencia">
        <h2 id="cl-experiencia">Experiencia</h2>
        {experience.map((puesto) => (
          <div className="cl-entrada item-experiencia" key={puesto.company}>
            {/* Manda el puesto, no la empresa: al que contrata le importa
                primero qué hacía. */}
            <div className="cl-linea">
              <h3 className="cl-titulo">{puesto.role}</h3>
              <span className="cl-fecha">{puesto.period}</span>
            </div>
            <p className="cl-sub">{puesto.company}</p>
            <ul className="cl-lista">
              {puesto.bullets.map((logro) => (
                <li key={logro}>{logro}</li>
              ))}
            </ul>
            <p className="cl-clientes">
              <span className="cl-rotulo">Clientes:</span>{" "}
              {puesto.clients.join(", ")}
            </p>
          </div>
        ))}
      </section>

      <section className="cl-seccion" aria-labelledby="cl-formacion">
        <h2 id="cl-formacion">Formación</h2>
        {education.map((estudio) => (
          <div className="cl-entrada item-formacion" key={estudio.title}>
            <div className="cl-linea">
              <h3 className="cl-titulo">{estudio.title}</h3>
              <span className="cl-fecha">{estudio.period}</span>
            </div>
            <p className="cl-sub">
              {estudio.detail
                ? `${estudio.school} — ${estudio.detail}`
                : estudio.school}
            </p>
          </div>
        ))}
      </section>

      <section className="cl-seccion" aria-labelledby="cl-proyectos">
        <h2 id="cl-proyectos">Proyectos</h2>
        <ul className="cl-lista">
          {apps.map((app) => (
            <li key={app.id} className="fila-proyecto">
              <span className="cl-rotulo">{app.name}</span> v{app.version} —{" "}
              {app.platforms.join(", ")}. {app.tests} pruebas automatizadas y{" "}
              {app.files} ficheros Dart.
              {app.note ? ` ${app.note}` : ""}
            </li>
          ))}
          <li className="fila-proyecto">
            <span className="cl-rotulo">{work.name}</span> — {work.client}.{" "}
            {/* Solo el dato de cabecera de cada campo: el desglose completo
                vive en la portada. Un CV de una página enseña el titular. */}
            {work.fields
              .map((campo) => `${campo.label}: ${campo.value[0]}`)
              .join(". ")}
            .
          </li>
        </ul>
        <p className="cl-total">
          {totals.apps} aplicaciones propias publicadas, {totals.tests} pruebas
          automatizadas y {totals.files} ficheros Dart en total.
        </p>
      </section>

      <div className="cl-dosc">
        <section className="cl-seccion" aria-labelledby="cl-habilidades">
          <h2 id="cl-habilidades">Habilidades</h2>
          <ul className="cl-plana">
            {stackLayers.map((capa) => (
              <li key={capa.id}>
                <span className="cl-rotulo">{capa.label}:</span>{" "}
                {capa.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="cl-seccion" aria-labelledby="cl-idiomas">
          <h2 id="cl-idiomas">Idiomas</h2>
          <ul className="cl-plana">
            {languages.map((idioma) => (
              <li key={idioma.name}>
                <span className="cl-rotulo">{idioma.name}:</span> {idioma.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
