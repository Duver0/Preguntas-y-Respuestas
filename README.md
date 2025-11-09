# Preguntas y Respuestas · React + Tailwind

Aplicación de quiz interactivo construida con React, Vite, Tailwind CSS y Bun, lista para desplegarse gratis en GitHub Pages. Incluye preguntas curadas de desarrollo web, rachas con bonus, historial detallado y un ranking persistido en `localStorage`.

## Características principales
- ⚛️ Componentes reutilizables con hooks personalizados (`useQuizEngine`, `useHighscores`).
- 🎯 Más de 30 preguntas categorizadas por dificultad (HTML, CSS, JS, React, DevOps, etc.).
- 📈 Sistema de puntuación con bonus por racha, precisión y resumen detallado luego de cada partida.
- 🛡️ Al fallar ves un banner con la explicación y puedes elegir entre volver al menú o reiniciar al instante.
- 🏆 Tablero de récords local con opción para limpiarlo.
- 🎨 UI responsiva con Tailwind CSS y gradientes optimizados para móviles y desktop.
- 🚀 Configuración de Vite lista para GitHub Pages (`base` apuntando al nombre del repo).

## Requisitos

- [Bun](https://bun.sh/) ≥ 1.2

## Scripts disponibles

```bash
# Instala dependencias
bun install

# Servidor de desarrollo
bun run dev

# Linter de TypeScript
bun run lint

# Build optimizado (necesario antes de publicar)
bun run build

# Previsualizar el build
bun run preview
```

## Estructura del proyecto

```
├─ src/
│  ├─ App.tsx              # Layout principal y orquestación del quiz
│  ├─ components/          # UI modular: Hero, ScoreCard, QuestionCard, etc.
│  ├─ data/questions.ts    # Banco de preguntas (puedes agregar o editar aquí)
│  ├─ hooks/               # Lógica reutilizable: engine y highscores
│  └─ index.css            # Entrada de estilos (incluye Tailwind)
├─ index.html              # Entrada Vite (compatible con GitHub Pages)
├─ tailwind.config.js
├─ vite.config.ts          # Base configurada a /Preguntas-y-Respuestas/
└─ package.json
```

## Personalización

1. Añade o modifica preguntas editando `src/data/questions.ts`. Cada pregunta acepta categoría, dificultad y explicación para reforzar el aprendizaje.
2. Ajusta los parámetros del hook (`rounds`, `basePoints`, `streakBonus`) en `src/App.tsx`.
3. Cambia la paleta de color en `tailwind.config.js` dentro de `theme.extend.colors.brand`.

## Despliegue en GitHub Pages

Este repositorio incluye un workflow (`.github/workflows/deploy.yml`) que construye el sitio con Bun y publica automáticamente el contenido optimizado en GitHub Pages.

1. En Settings → Pages selecciona **Source: GitHub Actions**.
2. Haz push a `main` (o ejecuta el workflow manualmente en la pestaña Actions). El flujo corre `bun run build`, copia `index.html` como `404.html` para manejar rutas internas y sube la carpeta `dist/` como artefacto de Pages.
3. Cuando el job **deploy** termine, la URL pública aparecerá en la sección Pages. Gracias al `base` de `vite.config.ts`, los assets se servirán desde `https://<usuario>.github.io/Preguntas-y-Respuestas/`.

¡Listo! Cada cambio en `main` se publica con fallback para rutas internas de la SPA.
