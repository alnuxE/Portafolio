/**
 * Fuente única de contenido del sitio.
 *
 * El marcado no lleva textos sueltos: recorre estas estructuras. Cambiar una
 * cifra, una fecha o una descripción se hace aquí y se propaga a la portada y
 * al currículum, que de otro modo se desincronizan a la primera corrección.
 */

/* -------------------------------------------------------------------------
   Tipos
   ------------------------------------------------------------------------- */

export type Profile = {
  readonly name: string;
  readonly shortName: string;
  readonly alias: string;
  readonly role: string;
  readonly headline: string;
  readonly summary: readonly string[];
  readonly location: string;
  readonly address: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly github: string;
  readonly githubUrl: string;
  readonly linkedinUrl: string;
};

/* -------------------------------------------------------------------------
   Perfil
   ------------------------------------------------------------------------- */

export const profile: Profile = {
  name: 'Daniel Alejandro Estrada Olalde',
  shortName: 'Alejandro Estrada',
  alias: 'alnuxE',
  role: 'Desarrollador backend',
  headline:
    'Backend en producción para Walmart, Waldos y P&G. Tres apps propias en Flutter, 808 pruebas verdes.',
  summary: [
    'Estudiante de noveno semestre de Ingeniería en Informática en el Instituto Politécnico Nacional y desarrollador backend en activo desde abril de 2024. Trabajo a diario sobre sistemas que usan cadenas como Walmart, Waldos y P&G: volúmenes de datos altos, consultas que tienen que responder rápido y despliegues a producción con gente esperando al otro lado.',
    'Fuera del trabajo diseño y publico aplicaciones propias de principio a fin —arquitectura, pruebas, marca y publicación—, que es donde se aprende lo que un tutorial no enseña: qué hacer cuando la red se cae a mitad de una operación, cómo se prueba una capa sin arrastrar a las demás y por qué una decisión cómoda hoy se paga en tres meses.',
  ],
  location: 'Ciudad de México, México',
  address: 'Ignacio Manuel Altamirano 52, Sta. Cruz Meyehualco, CDMX',
  email: 'danyolalde@gmail.com',
  phone: '+52 55 6231 8519',
  phoneHref: '+525562318519',
  github: 'alnuxE',
  githubUrl: 'https://github.com/alnuxE',
  linkedinUrl:
    'https://www.linkedin.com/in/daniel-alejandro-estrada-olalde-532a16233/',
};

/** Una capa del stack. La sección se agrupa por capas porque un ingeniero que
 *  dice practicar arquitectura limpia tiene que enseñar que piensa por capas:
 *  la sección es su propia demostración. */
export type StackLayer = {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
  /** La única fila destacada: no es una tecnología, es un hábito. */
  readonly viva?: boolean;
};

export type ProjectBrand = 'classly' | 'prompt' | 'switch' | 'nebula';

/** Una app propia. Las cifras son enteros, no cadenas: la fila de resumen las
 *  suma, y una suma escrita a mano se desincroniza a la primera corrección. */
export type AppProject = {
  readonly id: string;
  readonly name: string;
  readonly brand: ProjectBrand;
  readonly tagline: string;
  readonly tests: number;
  readonly files: number;
  readonly version: string;
  readonly platforms: readonly string[];
  /** Nota al pie: solo la lleva el proyecto cuyo argumento la merece. */
  readonly note?: string;
};

/** El trabajo profesional tiene otra forma de tarjeta, y esa diferencia de
 *  forma es la que comunica que es otra categoría. */
export type WorkProject = {
  readonly id: string;
  readonly name: string;
  readonly client: string;
  readonly summary: string;
  readonly fields: readonly { readonly label: string; readonly value: readonly string[] }[];
};

/* -------------------------------------------------------------------------
   Stack
   ------------------------------------------------------------------------- */

export const stackLayers: readonly StackLayer[] = [
  {
    id: 'lenguajes',
    label: 'Lenguajes',
    items: ['PHP', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL'],
  },
  {
    id: 'backend',
    label: 'Backend y datos',
    items: ['Laravel', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Redis'],
  },
  { id: 'movil', label: 'Móvil', items: ['Flutter', 'Riverpod', 'Material 3'] },
  { id: 'web', label: 'Web', items: ['Next.js', 'React', 'Tailwind CSS'] },
  {
    id: 'plataforma',
    label: 'Plataforma',
    items: ['Linux', 'Docker', 'Nginx', 'Kubernetes', 'Git / GitHub'],
  },
  {
    id: 'practica',
    label: 'Práctica',
    items: [
      'Arquitectura limpia',
      'Arquitectura por capas',
      'Pruebas automatizadas',
      'Revisión de código',
      'Programación orientada a objetos',
      'Programación funcional',
      'Documentación de API',
      'Micro Servicios',
    ],
    viva: true,
  },
];

/* -------------------------------------------------------------------------
   Proyectos
   ------------------------------------------------------------------------- */

export const apps: readonly AppProject[] = [
  {
    id: 'switchiot',
    name: 'SwitchIot',
    brand: 'switch',
    tagline:
      'Control de una bomba de agua sobre ESP32, hablando directamente por la red local. Sin nube y sin cuenta.',
    tests: 338,
    files: 85,
    version: '1.1.0',
    platforms: ['Android', 'Linux', 'Windows'],
    note: 'Una prueba comprueba en cada ejecución que ninguna capa importe hacia arriba.',
  },
  {
    id: 'promptengine',
    name: 'PromptEngine',
    brand: 'prompt',
    tagline:
      'Compositor de prompts por secciones —rol, objetivo, contexto, formato— con vista previa en vivo y salida en Markdown.',
    tests: 320,
    files: 54,
    version: '1.4.0',
    platforms: ['Android', 'Web', 'Linux'],
  },
  {
    id: 'classly',
    name: 'Classly',
    brand: 'classly',
    tagline:
      'Horario académico y tareas para estudiantes, con el dominio modelado en tipos inmutables. Funciona sin conexión.',
    tests: 150,
    files: 79,
    version: '1.0.0',
    platforms: ['Android'],
  },
];

/** Suma real, calculada aquí para que nadie la desincronice al cambiar una cifra. */
export const totals = {
  apps: apps.length,
  tests: apps.reduce((suma, app) => suma + app.tests, 0),
  files: apps.reduce((suma, app) => suma + app.files, 0),
} as const;

export const work: WorkProject = {
  id: 'nebula',
  name: 'Gestión Nebula V2',
  client: 'Producción audiovisual',
  summary:
    'Sistema de gestión de producción audiovisual —proyectos, escaletas, inventario, cotizaciones, facturación y pagos— migrado de una versión heredada en Python con SQLite, que guardaba todo el negocio en un único blob JSON y calculaba los totales en el navegador.',
  fields: [
    { label: 'Rol', value: ['Full-stack'] },
    { label: 'Stack', value: ['Node.js · Express', 'React · Vite'] },
    { label: 'Datos', value: ['MongoDB 7', '19 colecciones'] },
    { label: 'Acceso', value: ['5 roles', 'reglas en servidor'] },
  ],
};

export type Experience = {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly periodShort: string;
  readonly clients: readonly string[];
  /** Versión corta para la portada: cuatro líneas que se leen de un vistazo. */
  readonly highlights: readonly string[];
  /** Versión larga para el currículum, donde el espacio se mide en líneas. */
  readonly bullets: readonly string[];
  readonly stack: readonly string[];
};

export type Education = {
  readonly title: string;
  readonly school: string;
  readonly period: string;
  readonly detail?: string;
  readonly current?: boolean;
};

export type Language = {
  readonly name: string;
  readonly level: string;
  readonly detail: string;
};

/* -------------------------------------------------------------------------
   Trayectoria
   ------------------------------------------------------------------------- */

export const experience: readonly Experience[] = [
  {
    company: 'Fay Publicidad · Metrix',
    role: 'Desarrollador Backend',
    period: 'Abril 2024 — Actualidad',
    periodShort: 'Abr 2024 — Actual',
    clients: ['Walmart', 'Waldos', 'P&G'],
    highlights: [
      'Mantenimiento y optimización de sistemas en producción.',
      'Consultas sobre volúmenes altos en MySQL y MongoDB.',
      'Funcionalidades nuevas de extremo a extremo con Laravel.',
      'Despliegues a producción con Git y GitHub.',
    ],
    bullets: [
      'Desarrollo y mantenimiento de aplicaciones Laravel dentro de un monorepo desplegado sobre Kubernetes (GKE Autopilot), con integración y despliegue continuos.',
      'Manejo de grandes volúmenes de datos y consultas complejas en MySQL y MongoDB, con foco en el tiempo de respuesta de los reportes de negocio.',
      'Implementación de nuevas funcionalidades de extremo a extremo, desde el modelo de datos hasta la interfaz.',
      'Diagnóstico y corrección de incidencias en producción, trabajando con el equipo para acotar la causa antes de tocar código.',
      'Control de versiones con Git y GitHub, y apoyo en los despliegues a producción.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Git'],
  },
];

export const education: readonly Education[] = [
  {
    title: 'Ingeniería en Informática',
    school: 'Instituto Politécnico Nacional (IPN)',
    period: '2022 — 2026',
    detail: '9.º semestre (último)',
    current: true,
  },
  {
    title: 'Programador Junior Java',
    school: 'Oracle Next Education · CDMX',
    period: '2022 — Jun 2023',
  },
  {
    title: 'Técnico en Informática · Programación',
    school: 'Colegio de Bachilleres, Plantel nº 6',
    period: 'Ago 2016 — Jul 2019',
  },
];

export const languages: readonly Language[] = [
  { name: 'Español', level: 'Nativo', detail: 'Lengua materna' },
  {
    name: 'Inglés',
    level: 'Intermedio (B1/B2)',
    detail: 'Documentación técnica y comunicación escrita',
  },
];

/* -------------------------------------------------------------------------
   Currículum orientado a soporte y operaciones
   -------------------------------------------------------------------------
   Una oferta de «operativo de soluciones tecnológicas» no lee el mismo
   documento que una de backend. No cambian los hechos —el puesto, las fechas,
   los proyectos son los mismos— sino qué parte de cada hecho va delante: la
   incidencia en producción antes que la funcionalidad nueva, el diagnóstico de
   red antes que el modelo de datos, la documentación antes que las pruebas.

   Todo lo que hay aquí es reencuadre de algo verificable. Si algo no se puede
   defender en una entrevista, no entra.
   ------------------------------------------------------------------------- */

export type AreaTecnica = {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
};

export type ProyectoOperaciones = {
  readonly id: string;
  readonly name: string;
  readonly meta: string;
  readonly body: string;
};

export const cvOperaciones = {
  /** Encabeza el documento en lugar de «Desarrollador backend»: es lo primero
   *  que lee quien filtra, y el filtro de esa oferta busca operaciones. */
  role: 'Soporte y operaciones de soluciones tecnológicas',
  summary: [
    'Estudiante de noveno semestre de Ingeniería en Informática en el IPN y desarrollador backend desde abril de 2024 sobre sistemas en producción que usan cadenas como Walmart, Waldos y P&G. Buena parte de mi trabajo diario es atender incidencias: reproducirlas, acotar la causa con el equipo y confirmar la corrección.',
    'Quiero moverme a operaciones de soluciones tecnológicas porque es donde ya está la parte del trabajo que mejor se me da: diagnóstico de red y de plataforma, documentar lo que se resuelve para que nadie tenga que reinvestigarlo, y coordinar con distintas áreas para cerrar un requerimiento.',
  ],
  areas: [
    {
      id: 'sistemas',
      label: 'Sistemas',
      items: ['Windows', 'Linux', 'Android', 'Línea de comandos'],
    },
    {
      id: 'redes',
      label: 'Redes',
      items: [
        'TCP/IP y direccionamiento',
        'Diagnóstico de conectividad',
        'Configuración de puntos de acceso',
      ],
    },
    {
      id: 'soporte',
      label: 'Soporte y operación',
      items: [
        'Atención y seguimiento de incidencias',
        'Análisis de causa raíz',
        'Monitoreo de plataformas',
        'Gestión de accesos',
      ],
    },
    {
      id: 'herramientas',
      label: 'Herramientas',
      items: ['Git y GitHub', 'Docker', 'Nginx', 'Microsoft Office'],
    },
    {
      id: 'plataformas',
      label: 'Plataformas',
      items: ['MySQL', 'MongoDB', 'Laravel · PHP', 'Kubernetes (GKE)'],
    },
  ] as readonly AreaTecnica[],
  /** Las mismas responsabilidades del puesto, contadas por el lado que la
   *  oferta pide: incidencia, monitoreo, accesos, documentación, coordinación. */
  highlights: [
    'Atención y seguimiento de incidencias en sistemas en producción: reproducir el fallo, acotar la causa con el equipo y confirmar la corrección.',
    'Monitoreo del comportamiento de los sistemas y del tiempo de respuesta de los reportes de negocio sobre MySQL y MongoDB.',
    'Participación en los despliegues a producción y control de cambios con Git y GitHub.',
    'Implementación de nuevas funcionalidades y documentación de lo implementado.',
    'Coordinación con las áreas responsables de cada sistema para cerrar requerimientos.',
  ],
  proyectos: [
    {
      id: 'switchiot',
      name: 'SwitchIot',
      meta: 'Android · Linux · Windows',
      body:
        'Alta, configuración y diagnóstico de equipos en red local: descubrimiento por difusión UDP con barrido de subred como respaldo, aprovisionamiento desde el punto de acceso del equipo, una credencial por dispositivo en el almacén seguro del sistema y registro de tiempos de extremo a extremo que sobrevive al cierre de la aplicación.',
    },
    {
      id: 'nebula',
      name: 'Gestión Nebula V2',
      meta: 'Proyecto de implementación',
      body:
        'Migración de un sistema heredado a una arquitectura por capas orquestada con Docker, con matriz de permisos de cinco roles y alta de accesos por perfil. Incluyó el traspaso de los datos históricos y la puesta en marcha del entorno.',
    },
    {
      id: 'promptengine',
      name: 'PromptEngine',
      meta: 'Android · Web · Linux',
      body:
        'Publicada en tres plataformas, con su sitio de presentación desplegado en un servidor propio mediante contenedores y Nginx como proxy inverso.',
    },
  ] as readonly ProyectoOperaciones[],
  /** Se dice de frente: la oferta pedía titulado y aún no lo está. Ocultarlo
   *  solo aplaza la conversación hasta la entrevista. */
  notaFormacion: 'Titulación en curso',
} as const;

/* -------------------------------------------------------------------------
   Navegación
   ------------------------------------------------------------------------- */

export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'stack', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
