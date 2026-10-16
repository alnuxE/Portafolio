import { CvClasico } from "../../components/cv/cv-clasico";
import { CvDestacado } from "../../components/cv/cv-destacado";
import { CvOperaciones } from "../../components/cv/cv-operaciones";
import { VistaCv } from "../../components/cv/vista-cv";

/**
 * Una sola ruta con tres presentaciones conmutables, las tres imprimibles en A4.
 *
 * La página es un componente de servidor y no toca `searchParams`: se exporta
 * como sitio estático, donde `searchParams` es una API de tiempo de petición
 * que rompe el build. La elección de formato la resuelve `VistaCv` en el
 * cliente y allí está explicado por qué.
 *
 * Las tres presentaciones se renderizan en el servidor y se pasan como props;
 * `VistaCv` monta solo una, de modo que la página tiene un único <h1>.
 */
export default function CvPage() {
  return (
    <VistaCv
      clasico={<CvClasico />}
      destacado={<CvDestacado />}
      operaciones={<CvOperaciones />}
    />
  );
}
