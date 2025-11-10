import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
    className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/90 text-slate-900 shadow-lg ring-1 ring-black/5 transition hover:scale-105 dark:border-white/10 dark:bg-slate-900/80 dark:text-white"
  >
    <span className="sr-only">Cambiar tema</span>
    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
  </button>
);

export default ThemeToggle;
