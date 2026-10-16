import {
  cvOperaciones,
  education,
  experience,
  languages,
  profile,
} from "../../content/site";
import { githubTexto, linkedinTexto } from "./datos";

/**
 * Presentación «Soporte TI» — currículum orientado a operaciones.
 *
 * Misma hoja y misma retícula que «Destacado», porque el trabajo de maquetación
 * ya está resuelto ahí y dos rejillas distintas serían dos cosas que mantener.
 * Lo que cambia es el orden de lectura, que es lo único que de verdad hay que
 * adaptar a una oferta:
 *
 *   · El rol de cabecera dice «soporte y operaciones», no «backend».
 *   · El raíl abre con las áreas técnicas que pide el puesto —sistemas, redes,
 *     soporte— en lugar del stack por capas, que a un puesto de operación le
 *     dice menos.
 *   · Los logros del puesto se cuentan por el lado de la incidencia y del
 *     monitoreo, no por el de la funcionalidad nueva.
 *   · Los proyectos se describen por lo que demuestran de operación:
 *     descubrimiento en red, aprovisionamiento, credenciales, registro.
 *
 * Los hechos son los mismos que en las otras dos presentaciones. Lo que cambia
 * es cuál va delante.
 */
export function CvOperaciones() {
  const [puesto] = experience;

  return (
    <article className="hoja cv-destacado cv-operaciones">
      <header className="cd-cabecera">
        <h1 className="cd-nombre">{profile.name}</h1>
        <p className="cd-rol">{cvOperaciones.role}</p>
        <p className="cd-contacto">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </p>
      </header>

      <div className="cd-filete-guinda" aria-hidden="true" />

      <div className="cd-cuerpo">
        <aside className="cd-rail">
          <section className="cd-seccion" aria-labelledby="co-contacto">
            <h2 id="co-contacto">Contacto</h2>
            <p className="cd-dato">{profile.address}</p>
            <p className="cd-dato">
              <a href={profile.githubUrl}>{githubTexto}</a>
            </p>
            <p className="cd-dato">
              <a href={profile.linkedinUrl}>{linkedinTexto}</a>
            </p>
          </section>

          <section className="cd-seccion" aria-labelledby="co-areas">
            <h2 id="co-areas">Áreas técnicas</h2>
            {cvOperaciones.areas.map((area) => (
              <div className="cd-capa" key={area.id}>
                <span className="cd-capa-rotulo">{area.label}</span>
                <span className="cd-capa-items">{area.items.join(", ")}</span>
              </div>
            ))}
          </section>

          <section className="cd-seccion" aria-labelledby="co-idiomas">
            <h2 id="co-idiomas">Idiomas</h2>
            {/* En una línea: dos idiomas no justifican tres renglones cuando la
                columna va justa y la formación tiene que caber debajo. */}
            <p className="cd-dato">
              {languages
                .map(
                  (idioma) =>
                    // Solo la inicial: `toLowerCase()` entero convertía
                    // «B1/B2» en «b1/b2», que es un nivel que no existe.
                    `${idioma.name} ${idioma.level.charAt(0).toLowerCase()}${idioma.level.slice(1)}`,
                )
                .join(" · ")}
            </p>
          </section>

          <section className="cd-seccion" aria-labelledby="co-formacion">
            <h2 id="co-formacion">Formación</h2>
            {education.map((estudio) => (
              <div className="cd-entrada item-formacion" key={estudio.title}>
                <h3
                  className={estudio.current ? "cd-titulo cd-viva" : "cd-titulo"}
                >
                  {estudio.title}
                </h3>
                <p className="cd-sub">{estudio.school}</p>
                <p className="cd-sub">
                  {[
                    estudio.period,
                    estudio.detail,
                    estudio.current ? cvOperaciones.notaFormacion : undefined,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
            ))}
          </section>
        </aside>

        <div>
          <section className="cd-seccion" aria-labelledby="co-perfil">
            <h2 id="co-perfil">Perfil</h2>
            {cvOperaciones.summary.map((parrafo) => (
              <p key={parrafo.slice(0, 24)}>{parrafo}</p>
            ))}
          </section>

          <section className="cd-seccion" aria-labelledby="co-experiencia">
            <h2 id="co-experiencia">Experiencia</h2>
            <div className="item-experiencia">
              <div className="cd-puesto">
                <h3 className="cd-puesto-titulo">{puesto.role}</h3>
                <span className="cd-periodo">{puesto.periodShort}</span>
              </div>
              <p className="cd-sub">{puesto.company}</p>
              <ul className="cd-logros">
                {cvOperaciones.highlights.map((logro) => (
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

          <section className="cd-seccion" aria-labelledby="co-proyectos">
            <h2 id="co-proyectos">Proyectos</h2>
            {cvOperaciones.proyectos.map((proyecto) => (
              <div className="cd-obra item-experiencia" key={proyecto.id}>
                <div className="cd-obra-linea">
                  <h3 className="cd-titulo">{proyecto.name}</h3>
                  <span className="cd-periodo">{proyecto.meta}</span>
                </div>
                <p className="cd-obra-cuerpo">{proyecto.body}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
