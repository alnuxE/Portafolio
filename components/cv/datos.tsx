/**
 * Derivaciones del contenido que necesitan las dos presentaciones del CV.
 *
 * Viven aquí y no en cada componente porque el CV clásico y el destacado
 * tienen que enseñar exactamente el mismo usuario y el mismo perfil: si cada
 * uno lo recorta a su manera, a la primera corrección dejan de coincidir.
 */

import { profile } from "../../content/site";

/** En papel una URL con esquema es ruido, pero el usuario tiene que quedar
 *  escrito para poder teclearlo. */
export const githubTexto = `github.com/${profile.github}`;

export const linkedinTexto = profile.linkedinUrl
  .replace(/^https?:\/\/(www\.)?/, "")
  .replace(/\/+$/, "");
