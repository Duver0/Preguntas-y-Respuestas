import type { HighscoreEntry } from "../hooks/useHighscores";

interface HighscoreBoardProps {
  entries: HighscoreEntry[];
  onReset?: () => void;
  compact?: boolean;
}

const HighscoreBoard = ({ entries, onReset, compact = false }: HighscoreBoardProps) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-slate-900/60">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-brand-600 dark:text-brand-200">Hall de la fama</p>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">Top {entries.length || 0}</p>
      </div>
      {!compact && onReset && entries.length > 0 && (
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold uppercase tracking-wide text-rose-500 hover:text-rose-400 dark:text-rose-300 dark:hover:text-rose-200"
        >
          Limpiar
        </button>
      )}
    </div>

    <ul className="mt-4 space-y-3 text-sm">
      {entries.length === 0 && (
        <li className="rounded-2xl border border-dashed border-slate-200 px-4 py-6 text-center text-slate-500 dark:border-white/10 dark:text-slate-400">
          Aún no hay récords. ¡Sé la primera persona en registrar uno!
        </li>
      )}
      {entries.map((entry, idx) => (
        <li
          key={entry.id}
          className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-white/5 dark:bg-white/5"
        >
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              #{idx + 1} · {entry.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {new Date(entry.date).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short"
              })}
              , precisión {entry.accuracy}%
            </p>
          </div>
          <p className="text-base font-bold text-brand-600 dark:text-brand-200">{entry.score} pts</p>
        </li>
      ))}
    </ul>
  </div>
);

export default HighscoreBoard;
