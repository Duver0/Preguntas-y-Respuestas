export type Difficulty = "Fácil" | "Media" | "Difícil";

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
  category: string;
  difficulty: Difficulty;
  explanation: string;
}

export const QUESTIONS: Question[] = [
  {
    id: "html-01",
    question: "¿Qué significan las siglas HTML?",
    options: [
      "HyperText Markup Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language",
      "Hypermedia Transfer Markup Language"
    ],
    answer: 0,
    category: "Frontend",
    difficulty: "Fácil",
    explanation:
      "HTML significa HyperText Markup Language y es el lenguaje base para estructurar el contenido de la web."
  },
  {
    id: "css-01",
    question: "¿Qué propiedad de CSS se utiliza para cambiar el color del texto?",
    options: ["color", "font-style", "background", "text-decoration"],
    answer: 0,
    category: "Frontend",
    difficulty: "Fácil",
    explanation: "La propiedad color controla el tono del texto renderizado en pantalla."
  },
  {
    id: "js-01",
    question: "¿Cuál es el método de JavaScript que agrega elementos al final de un arreglo?",
    options: ["shift", "unshift", "push", "concat"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Fácil",
    explanation: "array.push(elemento) inserta el valor al final del arreglo y devuelve la nueva longitud."
  },
  {
    id: "react-01",
    question: "¿Qué hook de React permite manejar estado en componentes funcionales?",
    options: ["useMemo", "useState", "useLayoutEffect", "useId"],
    answer: 1,
    category: "React",
    difficulty: "Fácil",
    explanation: "useState devuelve un valor y una función para actualizarlo, habilitando estado local en componentes funcionales."
  },
  {
    id: "git-01",
    question: "¿Qué comando de Git crea una nueva rama?",
    options: ["git init", "git merge", "git branch", "git fetch"],
    answer: 2,
    category: "Git",
    difficulty: "Fácil",
    explanation: "git branch <nombre> registra un nuevo puntero de rama en el repositorio local."
  },
  {
    id: "http-01",
    question: "¿Qué indica el código de estado HTTP 404?",
    options: [
      "Error interno del servidor",
      "Recurso no encontrado",
      "Solicitud correcta",
      "Acceso no autorizado"
    ],
    answer: 1,
    category: "Web",
    difficulty: "Fácil",
    explanation: "El estado 404 se devuelve cuando el servidor no encuentra el recurso solicitado en la ruta indicada."
  },
  {
    id: "db-01",
    question: "¿Qué significa SQL?",
    options: [
      "Sequential Query Language",
      "Structured Query Language",
      "Systematic Query Logic",
      "Simple Query Listing"
    ],
    answer: 1,
    category: "Bases de Datos",
    difficulty: "Media",
    explanation: "SQL corresponde a Structured Query Language, el estándar para manipular datos relacionales."
  },
  {
    id: "alg-01",
    question: "¿Cuál es la complejidad temporal promedio de la búsqueda binaria?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: 1,
    category: "Algoritmos",
    difficulty: "Media",
    explanation: "Búsqueda binaria divide el espacio a la mitad cada vez, logrando complejidad O(log n)."
  },
  {
    id: "react-02",
    question: "¿Qué herramienta recomienda el equipo de React para crear proyectos modernos?",
    options: ["Next.js", "Create React App", "Vite", "Parcel"],
    answer: 2,
    category: "React",
    difficulty: "Media",
    explanation:
      "Desde 2023 el equipo sugiere Vite (o frameworks basados en él) para proyectos SPA modernos por su velocidad."
  },
  {
    id: "ts-01",
    question: "¿Qué ventaja principal ofrece TypeScript sobre JavaScript puro?",
    options: [
      "Ejecución más rápida",
      "Tipado estático y chequeo en tiempo de compilación",
      "Compatibilidad con navegadores antiguos",
      "Uso reducido de memoria"
    ],
    answer: 1,
    category: "TypeScript",
    difficulty: "Media",
    explanation: "TypeScript añade tipado estático opcional que permite detectar errores antes de ejecutar el código."
  },
  {
    id: "css-02",
    question: "¿Qué módulo de CSS permite crear diseños bidimensionales con filas y columnas?",
    options: ["Flexbox", "Grid", "Inline-block", "Positioning"],
    answer: 1,
    category: "Frontend",
    difficulty: "Media",
    explanation: "CSS Grid define explícitamente filas y columnas, ideal para composiciones complejas y responsivas."
  },
  {
    id: "devops-01",
    question: "¿Qué servicio gratuito de GitHub facilita el despliegue de sitios estáticos?",
    options: ["GitHub Workers", "GitHub Pages", "GitHub Apps", "GitHub Codespaces"],
    answer: 1,
    category: "DevOps",
    difficulty: "Fácil",
    explanation: "GitHub Pages publica automáticamente contenido estático desde tu repositorio sin costo."
  },
  {
    id: "node-01",
    question: "¿Qué gestor de paquetes viene integrado con Bun?",
    options: ["npm", "pnpm", "yarn", "Un gestor nativo propio"],
    answer: 3,
    category: "JavaScript",
    difficulty: "Media",
    explanation: "Bun incluye su propio gestor y runtime, por lo que no necesita npm para instalar dependencias."
  },
  {
    id: "webperf-01",
    question: "¿Cuál es una métrica clave para evaluar la carga percibida por el usuario?",
    options: [
      "Time To First Byte",
      "Largest Contentful Paint",
      "Heap Snapshot Size",
      "CPU Idle Time"
    ],
    answer: 1,
    category: "Performance",
    difficulty: "Media",
    explanation: "Largest Contentful Paint (LCP) refleja cuándo el contenido principal aparece, indicador directo de UX."
  },
  {
    id: "react-03",
    question: "¿Qué hook usarías para memorizar el resultado de una función costosa?",
    options: ["useMemo", "useReducer", "useRef", "useId"],
    answer: 0,
    category: "React",
    difficulty: "Media",
    explanation: "useMemo guarda el resultado de una computación hasta que cambien sus dependencias."
  },
  {
    id: "sec-01",
    question: "¿Qué cabecera HTTP mitiga ataques de clickjacking?",
    options: ["Content-Type", "X-Frame-Options", "Cache-Control", "Accept"],
    answer: 1,
    category: "Seguridad",
    difficulty: "Difícil",
    explanation: "X-Frame-Options controla si una página puede ser embebida en un iframe, bloqueando intentos de clickjacking."
  },
  {
    id: "db-02",
    question: "¿Qué patrón de base de datos permite escribir en una réplica y leer desde otras?",
    options: [
      "Sharding",
      "Replica-set activo/activo",
      "Patrón primario-secundario",
      "CQRS"
    ],
    answer: 2,
    category: "Bases de Datos",
    difficulty: "Difícil",
    explanation: "El patrón primario-secundario (master-slave) centraliza escrituras en un nodo y replica a secundarios de solo lectura."
  },
  {
    id: "css-03",
    question: "¿Qué unidad de medida se adapta mejor al tamaño del viewport?",
    options: ["px", "em", "rem", "vw"],
    answer: 3,
    category: "Frontend",
    difficulty: "Fácil",
    explanation: "Las unidades vw/vh utilizan el porcentaje del ancho/alto del viewport, ideales para layouts fluidos."
  },
  {
    id: "js-02",
    question: "¿Cuál es la diferencia entre == y === en JavaScript?",
    options: [
      "No existe diferencia",
      "=== compara valor y tipo, == solo valor",
      "== compara valor y tipo, === solo valor",
      "=== es solo para objetos"
    ],
    answer: 1,
    category: "JavaScript",
    difficulty: "Fácil",
    explanation: "=== es el operador de igualdad estricta que evalúa tipo y valor sin coerción."
  },
  {
    id: "arch-01",
    question: "¿Qué patrón separa la lectura de la escritura en servicios distribuidos?",
    options: ["Saga", "CQRS", "Circuit Breaker", "Factory"],
    answer: 1,
    category: "Arquitectura",
    difficulty: "Difícil",
    explanation: "Command Query Responsibility Segregation (CQRS) independiza el modelo de lectura del de escritura."
  },
  {
    id: "devops-02",
    question: "¿Qué archivo describe los workflows de GitHub Actions?",
    options: ["workflow.yml", ".github/workflows/*.yml", "ci.json", "Dockerfile"],
    answer: 1,
    category: "DevOps",
    difficulty: "Media",
    explanation: "Las acciones se configuran con archivos YAML dentro de .github/workflows/ en el repositorio."
  },
  {
    id: "api-01",
    question: "¿Qué es idempotencia en una API REST?",
    options: [
      "Que siempre responde en caché",
      "Que produce el mismo resultado aunque se repita la misma solicitud",
      "Que sólo acepta GET",
      "Que cifra todo el tráfico"
    ],
    answer: 1,
    category: "APIs",
    difficulty: "Media",
    explanation: "Una operación idempotente no altera el estado con llamadas repetidas usando los mismos parámetros."
  },
  {
    id: "ux-01",
    question: "¿Qué principio de UX indica que los elementos cercanos se perciben relacionados?",
    options: [
      "Ley de Miller",
      "Ley de Fitts",
      "Ley de Proximidad",
      "Ley de Hicks"
    ],
    answer: 2,
    category: "UX",
    difficulty: "Media",
    explanation: "La ley de proximidad establece que los elementos cercanos visualmente se interpretan como un grupo."
  },
  {
    id: "cloud-01",
    question: "¿Qué modelo de servicio en la nube entrega plataformas listas para desplegar apps?",
    options: ["IaaS", "PaaS", "SaaS", "BaaS"],
    answer: 1,
    category: "Cloud",
    difficulty: "Media",
    explanation: "Platform as a Service (PaaS) abstrae la infraestructura y ofrece entornos preconfigurados para desplegar aplicaciones."
  },
  {
    id: "testing-01",
    question: "¿Qué tipo de prueba valida componentes aislados del sistema?",
    options: ["Pruebas de humo", "Pruebas unitarias", "Pruebas de carga", "Pruebas end-to-end"],
    answer: 1,
    category: "Testing",
    difficulty: "Fácil",
    explanation: "Las pruebas unitarias ejercitan unidades pequeñas como funciones o componentes individuales."
  },
  {
    id: "react-04",
    question: "¿Qué hook manejarías para ejecutar efectos al montar y desmontar un componente?",
    options: ["useRef", "useEffect", "useContext", "useMemo"],
    answer: 1,
    category: "React",
    difficulty: "Media",
    explanation: "useEffect ejecuta lógica secundaria al montar, actualizar o desmontar según sus dependencias."
  },
  {
    id: "bun-01",
    question: "¿Qué comando de Bun ejecuta un script definido en package.json?",
    options: ["bun script", "bunx", "bun run", "bun exec"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Fácil",
    explanation: "bun run <script> ejecuta las tareas declaradas en package.json de forma similar a npm."
  },
  {
    id: "perf-02",
    question: "¿Cuál es una técnica para dividir el bundle de una SPA?",
    options: [
      "Lazy loading con dynamic import",
      "Minificar CSS",
      "Usar cookies seguras",
      "Incrementar el caché del navegador"
    ],
    answer: 0,
    category: "Performance",
    difficulty: "Media",
    explanation: "Los dynamic import() permiten crear chunks que se descargan sólo cuando se necesitan."
  },
  {
    id: "css-04",
    question: "¿Qué hace la clase flex-col en Tailwind CSS?",
    options: [
      "Apila elementos en fila",
      "Apila elementos en columna",
      "Centra horizontalmente",
      "Agrega separación automática"
    ],
    answer: 1,
    category: "Frontend",
    difficulty: "Fácil",
    explanation: "flex-col cambia la dirección del contenedor flex a columna."
  },
  {
    id: "ai-01",
    question: "¿Qué técnica de IA genera texto token por token?",
    options: ["Árboles de decisión", "Modelos generativos autoregresivos", "Redes CNN", "K-means"],
    answer: 1,
    category: "IA",
    difficulty: "Difícil",
    explanation: "Los modelos autoregresivos generan cada token condicionado en los anteriores, como GPT."
  },
  {
    id: "sec-02",
    question: "¿Qué protocolo añade cifrado a HTTP?",
    options: ["FTP", "SSH", "TLS", "SCP"],
    answer: 2,
    category: "Seguridad",
    difficulty: "Fácil",
    explanation: "Transport Layer Security (TLS) combina cifrado simétrico y asimétrico para proteger HTTP."
  }
];
