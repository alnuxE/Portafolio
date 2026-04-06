"use client";

import React from 'react';
import Link from 'next/link';
import { Printer, ArrowLeft } from 'lucide-react';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-200 p-4 sm:p-8 flex justify-center font-serif text-black print:bg-white print:p-0">
      
      {/* Botones Flotantes (No Imprimibles) */}
      <div className="fixed top-6 left-6 flex flex-col gap-3 print:hidden z-50">
        <Link href="/" title="Volver al inicio" className="p-3 bg-white hover:bg-neutral-100 rounded-full shadow-lg text-neutral-800 transition-transform hover:-translate-y-1">
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button 
          onClick={handlePrint}
          className="px-6 py-3 bg-[#D97757] hover:bg-[#c26244] text-white font-sans font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Printer size={20} />
          <span className="hidden sm:inline">Imprimir PDF</span>
        </button>
      </div>

      {/* Hoja A4 del CV */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white md:shadow-2xl print:shadow-none mx-auto px-8 py-12 sm:px-12 print:p-0">
        
        {/* Encabezado */}
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-black">
            Daniel Alejandro Estrada Olalde
          </h1>
          <h2 className="text-sm sm:text-base uppercase tracking-widest text-neutral-700 mt-2 font-semibold">
            ESTUDIANTE ING. INFORMÁTICA
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 text-xs sm:text-sm text-neutral-800">
            <span>+52 5562318519</span>
            <span>|</span>
            <span>danyolald@gmail.com</span>
            <span>|</span>
            <span>Ignacio Manuel Altamirano 52, Sta Cruz Meyehualco, CDMX</span>
          </div>
        </header>

        {/* Sección: Sobre Mí */}
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase border-b border-black mb-3 pb-1 tracking-wide">
            Sobre Mí
          </h3>
          <p className="text-sm leading-relaxed text-justify">
            Soy estudiante de séptimo semestre de Ingeniería en Informática y me he desarrollado en un entorno profesional donde he colaborado en proyectos utilizados por grandes empresas. Esta experiencia me ha permitido fortalecer habilidades como la comunicación, la colaboración en equipo, la adaptabilidad y la gestión eficiente del tiempo.
          </p>
          <p className="text-sm leading-relaxed text-justify mt-2">
            Destaco por mi capacidad para aprender rápidamente, analizar problemas con una mentalidad práctica y mantenerme enfocado en encontrar soluciones efectivas. Disfruto trabajar en equipo, aportar ideas y apoyar a otros para alcanzar objetivos comunes.
          </p>
        </section>

        {/* Sección: Experiencia Laboral */}
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase border-b border-black mb-3 pb-1 tracking-wide">
            Experiencia Laboral
          </h3>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-base">Fay Publicidad</h4>
              <span className="text-sm italic">14 de abril del 2024 — Presente</span>
            </div>
            <div className="italic text-sm mb-2 text-neutral-700">Desarrollador back-end</div>
            <ul className="list-disc list-inside text-sm space-y-1 ml-1 marker:text-black">
              <li>Mantenimiento, optimización e implementación de soluciones de software utilizadas por empresas como Walmart, Waldos y P&G.</li>
              <li>Manejo de grandes volúmenes de datos y ejecución de consultas complejas en MySQL y MongoDB.</li>
              <li>Desarrollo de nuevas funcionalidades con Laravel y tecnologías full-stack.</li>
              <li>Trabajo en equipo para solución de problemas y mejora de sistemas.</li>
              <li>Uso de Git/GitHub para control de versiones y apoyo en despliegues a producción.</li>
            </ul>
          </div>
        </section>

        {/* Sección: Datos Académicos */}
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase border-b border-black mb-3 pb-1 tracking-wide">
            Datos Académicos
          </h3>
          
          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-sm">Ingeniería en Informática</h4>
            </div>
            <div className="text-sm">Instituto Politécnico Nacional | Estudiante de séptimo semestre</div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-sm">Programador junior java</h4>
              <span className="text-sm italic">2022 - 04/06/2023</span>
            </div>
            <div className="text-sm">Oracle Next Education | CDMX, México</div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-sm">INFORMATICA PROGRAMADOR</h4>
              <span className="text-sm italic">15/08/2016 - 09/07/2019</span>
            </div>
            <div className="text-sm">Colegio de bachilleres plantel número 6</div>
          </div>
        </section>

        {/* Agrupación de Habilidades e Idiomas */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Habilidades */}
          <section>
            <h3 className="text-lg font-bold uppercase border-b border-black mb-3 pb-1 tracking-wide">
              Habilidades
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1 ml-1 marker:text-black">
              <li>HTML5, CSS3, JavaScript</li>
              <li>Laravel</li>
              <li>php</li>
              <li>mysql</li>
              <li>mongoDB</li>
              <li>java</li>
            </ul>
          </section>

          {/* Idiomas */}
          <section>
            <h3 className="text-lg font-bold uppercase border-b border-black mb-3 pb-1 tracking-wide">
              Idiomas
            </h3>
            <div className="text-sm space-y-2">
              <div>
                <span className="font-bold">Español:</span> Nativo
              </div>
              <div>
                <span className="font-bold">Inglés:</span> Básico
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
