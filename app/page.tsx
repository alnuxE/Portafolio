import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "../components/theme-switcher";
import { SideNav } from "../components/side-nav";


export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-[var(--accent-light)] transition-colors duration-300">
      <SideNav />
      {/* Elementos flotantes decorativos cálidos */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[var(--bg-page)] overflow-hidden transition-colors duration-300">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[var(--accent-light)] rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--accent-light)] rounded-full blur-3xl animate-float delay-300 opacity-60"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24 relative z-10">

        {/* Header / Hero Section */}
        <section id="inicio" className="flex flex-col gap-6 opacity-0-init animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-page)] transition-colors duration-300">
              Daniel Alejandro Estrada Olalde
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--accent)] font-medium tracking-wide flex flex-wrap items-center gap-2 transition-colors duration-300">
              Estudiante Ing. Informática
              <span className="inline-block animate-bounce text-sm ml-1 md:ml-2">✨</span>
            </h2>
            <p className="text-[var(--text-page)]/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mt-4 font-medium transition-colors duration-300">
              Soy estudiante de séptimo semestre en el Politécnico Nacional. Colaboro en proyectos para grandes empresas, combinando aprendizaje rápido y enfoque práctico para resolver problemas eficientemente en arquitecturas Backend.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 mt-4 md:mt-6">
            <Link href="/cv" className="px-5 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-black dark:bg-[#E8E5E1] text-white dark:text-black font-bold border border-transparent hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Ver CV Clásico
            </Link>
            <ThemeSwitcher />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="scroll-mt-20 md:scroll-mt-24 opacity-0-init animate-fade-in-up delay-200">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 flex items-center gap-3 md:gap-4 text-[var(--text-page)] transition-colors duration-300">
            <span className="w-8 md:w-10 h-[3px] bg-[var(--accent)] rounded-full"></span>
            Experiencia Laboral
          </h3>

          <div className="relative border-l-2 border-[var(--border-line)] pl-6 md:pl-8 ml-2 md:ml-3 transition-colors duration-300">
            {/* Punto indicador de la línea de tiempo */}
            <div className="absolute w-4 h-4 bg-[var(--bg-page)] border-4 border-[var(--accent)] rounded-full -left-[9px] top-1.5 shadow-sm animate-pulse transition-colors duration-300"></div>

            <div className="flex flex-col gap-3 group relative bg-[var(--bg-card)] backdrop-blur-md p-5 md:p-6 rounded-2xl border border-transparent hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 md:gap-4">
                <h4 className="text-xl md:text-2xl font-bold text-[var(--text-page)] transition-colors duration-300">Fay Publicidad / Metrix</h4>
                <span className="text-xs md:text-sm text-[var(--accent)] font-mono bg-[var(--accent-light)] px-3 md:px-4 py-1.5 rounded-full w-fit font-semibold tracking-wide transition-colors duration-300">
                  Abril 2024 — Actual
                </span>
              </div>
              <h5 className="text-base md:text-lg text-[var(--text-page)]/80 font-medium tracking-wide transition-colors duration-300">Desarrollador Backend</h5>
              <p className="text-[var(--text-page)]/70 leading-relaxed mt-2 max-w-2xl transition-colors duration-300">
                Mantenimiento, optimización e implementación de soluciones de software para empresas de alto calibre como Walmart y P&G. Manejo de grandes volúmenes de datos con consultas complejas en MySQL y MongoDB, utilizando Laravel y arquitectura full-stack. Uso activo de Git/GitHub para despliegues a producción.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="educacion" className="scroll-mt-20 md:scroll-mt-24 opacity-0-init animate-fade-in-up delay-300">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 flex items-center gap-3 md:gap-4 text-[var(--text-page)] transition-colors duration-300">
            <span className="w-8 md:w-10 h-[3px] bg-[var(--accent)] rounded-full"></span>
            Formación Académica
          </h3>

          <div className="relative border-l-2 border-[var(--border-line)] pl-6 md:pl-8 ml-2 md:ml-3 transition-colors duration-300 flex flex-col gap-8 md:gap-10">
            {/* IPN */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[var(--bg-page)] border-4 border-[var(--accent)] rounded-full -left-[33px] md:-left-[41px] top-1.5 shadow-sm transition-colors duration-300"></div>
              <div className="flex flex-col gap-2 group relative border border-transparent hover:border-[var(--accent)] p-4 md:p-5 -mt-3 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-sec)]/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--text-page)] transition-colors duration-300">Ingeniería en Informática</h4>
                  <span className="text-xs text-[var(--accent)] font-mono bg-[var(--accent-light)] px-3 py-1 rounded-full w-fit font-semibold tracking-wide transition-colors duration-300">
                    Séptimo Semestre
                  </span>
                </div>
                <h5 className="text-sm md:text-base text-[var(--text-page)]/80 font-medium transition-colors duration-300">Instituto Politécnico Nacional (IPN)</h5>
              </div>
            </div>

            {/* Oracle Next Education */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[var(--bg-page)] border-4 border-[var(--accent)]/50 rounded-full -left-[33px] md:-left-[41px] top-1.5 shadow-sm transition-colors duration-300"></div>
              <div className="flex flex-col gap-2 group relative border border-transparent hover:border-[var(--accent)] p-4 md:p-5 -mt-3 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-sec)]/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--text-page)] transition-colors duration-300">Programador Junior Java</h4>
                  <span className="text-xs text-[var(--text-page)]/60 font-mono px-3 py-1 rounded-full w-fit transition-colors duration-300 border border-[var(--border-line)]">
                    2022 — Jun 2023
                  </span>
                </div>
                <h5 className="text-sm md:text-base text-[var(--text-page)]/80 font-medium transition-colors duration-300">Oracle Next Education | CDMX</h5>
              </div>
            </div>

            {/* Bachilleres */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-[var(--bg-page)] border-4 border-[var(--accent)]/50 rounded-full -left-[33px] md:-left-[41px] top-1.5 shadow-sm transition-colors duration-300"></div>
              <div className="flex flex-col gap-2 group relative border border-transparent hover:border-[var(--accent)] p-4 md:p-5 -mt-3 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-sec)]/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--text-page)] transition-colors duration-300">Informática Programador</h4>
                  <span className="text-xs text-[var(--text-page)]/60 font-mono px-3 py-1 rounded-full w-fit transition-colors duration-300 border border-[var(--border-line)]">
                    Ago 2016 — Jul 2019
                  </span>
                </div>
                <h5 className="text-sm md:text-base text-[var(--text-page)]/80 font-medium transition-colors duration-300">Colegio de Bachilleres Plantel Nº 6</h5>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section (Templates) */}
        <section id="proyectos" className="scroll-mt-20 md:scroll-mt-24 opacity-0-init animate-fade-in-up delay-400">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 flex items-center gap-3 md:gap-4 text-[var(--text-page)] transition-colors duration-300">
            <span className="w-8 md:w-10 h-[3px] bg-[var(--accent)] rounded-full"></span>
            Proyectos Destacados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Template 1 */}
            <div className="group rounded-3xl border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md p-6 hover:border-[var(--accent)] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col items-start gap-5 cursor-pointer animate-scale-in">
              <div className="w-full h-52 bg-[var(--bg-sec)] rounded-2xl relative overflow-hidden flex items-center justify-center border border-[var(--border-line)] group-hover:border-[var(--accent)] transition-colors duration-500">
                <span className="text-[var(--accent)] font-medium text-lg opacity-70">✨ Imagen del Proyecto</span>
              </div>
              <div className="w-full">
                <h4 className="text-xl font-bold text-[var(--text-page)] group-hover:text-[var(--accent)] transition-colors duration-300">Nombre del Proyecto 1</h4>
                <p className="text-[var(--text-page)]/70 text-sm line-clamp-3 mt-3 leading-relaxed transition-colors duration-300">
                  Breve descripción. Sustituye este texto explicando el propósito del sistema, el desafío principal y cómo tu arquitectura en el backend lo resolvió eficazmente.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                <span className="text-xs font-mono font-medium px-3 py-1.5 bg-[var(--accent-light)] text-[var(--accent)] rounded-lg transition-colors duration-300">Laravel</span>
                <span className="text-xs font-mono font-medium px-3 py-1.5 bg-[var(--accent-light)] text-[var(--accent)] rounded-lg transition-colors duration-300">API</span>
                <span className="text-xs font-mono font-medium px-3 py-1.5 bg-[var(--accent-light)] text-[var(--accent)] rounded-lg transition-colors duration-300">MongoDB</span>
              </div>
            </div>

            {/* Project Template 2 */}
            <div className="group rounded-3xl border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md p-6 hover:border-[var(--accent)] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col items-start gap-5 cursor-pointer animate-scale-in delay-100">
              <div className="w-full h-52 bg-[var(--bg-sec)] rounded-2xl relative overflow-hidden flex items-center justify-center border border-[var(--border-line)] group-hover:border-[var(--accent)] transition-colors duration-500">
                <span className="text-[var(--accent)] font-medium text-lg opacity-70">✨ Imagen del Proyecto</span>
              </div>
              <div className="w-full">
                <h4 className="text-xl font-bold text-[var(--text-page)] group-hover:text-[var(--accent)] transition-colors duration-300">Nombre del Proyecto 2</h4>
                <p className="text-[var(--text-page)]/70 text-sm line-clamp-3 mt-3 leading-relaxed transition-colors duration-300">
                  Breve descripción. Sustituye este texto explicando el propósito del sistema, el desafío principal y cómo tu arquitectura en el backend lo resolvió eficazmente.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                <span className="text-xs font-mono font-medium px-3 py-1.5 bg-[var(--accent-light)] text-[var(--accent)] rounded-lg transition-colors duration-300">Tecnología</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer className="mt-16 border-t border-[var(--border-line)] pt-8 md:pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 opacity-0-init animate-fade-in-up delay-400 transition-colors duration-300">
          <p className="text-[var(--text-page)]/60 text-sm font-medium transition-colors duration-300 text-center md:text-left">
            © {new Date().getFullYear()} Alejandro Estrada. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="https://www.linkedin.com/in/daniel-alejandro-estrada-olalde-532a16233/" className="flex items-center gap-2 text-[var(--text-page)]/70 hover:text-[var(--accent)] transition-colors font-medium text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn
            </a>
            <a href="https://github.com/alnuxE" className="flex items-center gap-2 text-[var(--text-page)]/70 hover:text-[var(--accent)] transition-colors font-medium text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              alnuxE
            </a>
            <a href="mailto:danyolalde@gmail.com" className="flex items-center gap-2 text-[var(--text-page)]/70 hover:text-[var(--accent)] transition-colors font-medium text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              danyolalde@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
