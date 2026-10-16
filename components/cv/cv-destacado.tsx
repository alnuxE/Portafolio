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
 * Presentación «Destacado» — para empresa.
 *
 * Para un reclutador que ve cuarenta CV en una tarde: tiene que ganar la
 * comparación en cinco segundos y seguir funcionando fotocopiado en blanco y
 * negro. Por eso la jerarquía la cargan el tamaño, el peso y el grosor de los
 * filetes, y el color aparece en cuatro sitios y ni uno más:
 *
 *   1. el filete guinda de 2 mm bajo la banda de cabecera,
 *   2. el filete de 0,75 pt bajo cada encabezado de sección,
 *   3. las cifras de las filas de proyecto,
 *   4. el tinte gris del raíl izquierdo.
 *
 * El nombre va en negro, no en guinda: impreso en B/N el guinda se convierte
 * en un gris medio y el nombre perdería peso justo donde más lo necesita.
 */
export function CvDestacado() {
  const [puesto] = experience;

  return (
    <article className="hoja cv-destacado">
      <header className="cd-cabecera">
        <h1 className="cd-nombre">{profile.name}</h1>
        <p className="cd-rol">{profile.role}</p>
        <p className="cd-contacto">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </p>
      </header>

      <div className="cd-filete-guinda" aria-hidden="true" />

      <div className="cd-cuerpo">
        <aside className="cd-rail">
          <section className="cd-seccion" aria-labelledby="cd-contacto">
            <h2 id="cd-contacto">Contacto</h2>
            <p className="cd-dato">{profile.address}</p>
            <p className="cd-dato">
              <a href={profile.githubUrl}>{githubTexto}</a>
            </p>
            <p className="cd-dato">
              <a href={profile.linkedinUrl}>{linkedinTexto}</a>
            </p>
          </section>

          {/* El stack agrupado por capas: un ingeniero que dice practicar
              arquitectura limpia tiene que enseñar que piensa por capas. */}
          <section className="cd-seccion" aria-labelledby="cd-stack">
            <h2 id="cd-stack">Stack</h2>
            {stackLayers.map((capa) => (
              <div className="cd-capa" key={capa.id}>
                <span
                  className={
                    capa.viva ? "cd-capa-rotulo cd-viva" : "cd-capa-rotulo"
                  }
                >
                  {capa.label}
                </span>
                <span className="cd-capa-items">{capa.items.join(", ")}</span>
              </div>
            ))}
          </section>

          <section className="cd-seccion" aria-labelledby="cd-idiomas">
            <h2 id="cd-idiomas">Idiomas</h2>
            {languages.map((idioma) => (
              <p className="cd-dato" key={idioma.name}>
                {idioma.name}: {idioma.level}
              </p>
            ))}
          </section>

          <section className="cd-seccion" aria-labelledby="cd-formacion">
            <h2 id="cd-formacion">Formación</h2>
            {education.map((estudio) => (
              <div className="cd-entrada item-formacion" key={estudio.title}>
                <h3
                  className={estudio.current ? "cd-titulo cd-viva" : "cd-titulo"}
                >
                  {estudio.title}
                </h3>
                <p className="cd-sub">{estudio.school}</p>
                <p className="cd-sub">
                  {estudio.detail
                    ? `${estudio.period} — ${estudio.detail}`
                    : estudio.period}
                </p>
              </div>
            ))}
          </section>
        </aside>

        <div>
          <section className="cd-seccion" aria-labelledby="cd-perfil">
            <h2 id="cd-perfil">Perfil</h2>
            {/* El titular de la portada es un gancho de tres segundos; un
                reclutador que abre el PDF espera un perfil, no un eslogan. */}
            {profile.summary.map((parrafo) => (
              <p key={parrafo.slice(0, 24)}>{parrafo}</p>
            ))}
          </section>

          <section className="cd-seccion" aria-labelledby="cd-experiencia">
            <h2 id="cd-experiencia">Experiencia</h2>
            <div className="item-experiencia">
              <div className="cd-puesto">
                <h3 className="cd-puesto-titulo">{puesto.role}</h3>
                <span className="cd-periodo">{puesto.periodShort}</span>
              </div>
              <p className="cd-sub">{puesto.company}</p>
              <ul className="cd-logros">
                {puesto.highlights.map((logro) => (
                  <li key={logro}>{logro}</li>
                ))}
              </ul>
              <div className="cd-clientes">
                <span className="cd-clientes-rotulo">Clientes</span>
                <span className="cd-clientes-lista">
                  {puesto.clients.map((cliente) => (
                    <span key={cliente}>{cliente}</span>
                  ))}
                </span>
              </div>
            </div>
          </section>

          <section className="cd-seccion" aria-labelledby="cd-proyectos">
            <h2 id="cd-proyectos">Proyectos</h2>

            <p className="cd-totales">
              <span>
                <span className="fp-cifra">{totals.apps}</span> apps propias
              </span>
              <span>
                <span className="fp-cifra">{totals.tests}</span> pruebas
              </span>
              <span>
                <span className="fp-cifra">{totals.files}</span> ficheros Dart
              </span>
            </p>

            <div className="cd-tabla">
              {apps.map((app) => (
                <div className="fila-proyecto" key={app.id}>
                  <span className="fp-nombre">{app.name}</span>
                  <span className="fp-dato">v{app.version}</span>
                  <span className="fp-dato">{app.platforms.join(" · ")}</span>
                  <span className="fp-dato">
                    <span className="fp-par">
                      <span className="fp-cifra">{app.tests}</span> pruebas
                    </span>{" "}
                    ·{" "}
                    <span className="fp-par">
                      <span className="fp-cifra">{app.files}</span> ficheros
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {apps
              .filter((app) => app.note)
              .map((app) => (
                <p className="cd-nota" key={app.id}>
                  <span>{app.note}</span>
                </p>
              ))}

            <div className="cd-obra item-experiencia">
              <div className="cd-obra-linea">
                <h3 className="cd-titulo">{work.name}</h3>
                <span className="cd-periodo">{work.client}</span>
              </div>
              <p className="cd-sub">
                {work.fields
                  .map((campo) => `${campo.label}: ${campo.value.join(", ")}`)
                  .join(" · ")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
