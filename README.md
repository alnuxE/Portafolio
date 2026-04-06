# Portafolio - Daniel Alejandro Estrada Olalde 🚀

Landing page profesional y generador de Currículum para presentarse en la industria del desarrollo de software.
Este proyecto funciona no solo como un escaparate de mis proyectos y experiencia, sino que también contiene un módulo nativo que renderiza automáticamente un formato de Currículum clásico (estilo Harvard) listo para imprimirse.

## ✨ Características Principales

*   **Página Principal Moderna:** Diseño fluido y estético con paleta de colores cálidos y amigables.
*   **Modo Oscuro Personalizado:** Botón dinámico que intercambia el set de componentes entre una paleta arena (claro) y café terracota (modo oscuro) utilizando un mecanismo nativo sólido con localStorage.
*   **Sección de Experiencia y Educación:** Líneas de tiempo atractivas sobre mi carrera académica y profesional.
*   **Generador de CV (Estilo Harvard):** Una vista separada (`/cv`) con estilo clásico y minimalista en blanco y negro con la fuente tradicional Serif. Incluye soporte de `@media print`, por lo que al imprimirlo (clickeando al botón en la vista o `Ctrl+P`) el navegador ajusta la hoja perfecta en A4, elimina elementos de la App Web y exporta un PDF súper profesional.

## 🛠️ Tecnologías

Este proyecto está construido con:
*   [Next.js](https://nextjs.org/) (App Router)
*   [Tailwind CSS v4](https://tailwindcss.com/)
*   [React](https://reactjs.org/)
*   [Lucide React](https://lucide.dev/) (Iconos)

## 🚀 Cómo Iniciar el Proyecto

Para hacer correr este proyecto localmente, asegúrate de tener [Node.js](https://nodejs.org/) instalado. Sigue estos pasos:

1.  **Clona el repositorio** o desempaqueta los archivos:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd portafolio
    ```

2.  **Instala las dependencias** esenciales (si aún no lo has hecho):
    ```bash
    npm install
    ```

3.  **Inicia el Servidor de Desarrollo:**
    Este es el comando principal. Ejecútalo en tu terminal:
    ```bash
    npm run dev
    ```

4.  **Abre el puerto:**
    Navega a [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página y probar las transiciones. 
    Para cargar la ruta del CV y presionar el botón de guardar como PDF, navega a `http://localhost:3000/cv`.

## 📌 Autor
**Daniel Alejandro Estrada Olalde**
*Estudiante Ingeniería en Informática | Desarrollador Backend*
