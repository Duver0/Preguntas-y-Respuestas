import type { HighscoreEntry } from "../hooks/useHighscores";

interface HighscoreBoardProps {
  entries: HighscoreEntry[];
  onReset?: () => void;
  compact?: boolean;
}

const HighscoreBoard = ({ entries, onReset, compact = false }: HighscoreBoardProps) => (
  <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-medium text-brand-200">Hall de la fama</p>
        <p className="text-lg font-semibold text-white">Top {entries.length || 0}</p>
      </div>
      {!compact && onReset && entries.length > 0 && (
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold uppercase tracking-wide text-rose-300 hover:text-rose-200"
        >
          Limpiar
        </button>
      )}
    </div>

    <ul className="mt-4 space-y-3 text-sm">
      {entries.length === 0 && (
        <li className="rounded-2xl border border-dashed border-white/10 px-4 py-6 text-center text-slate-400">
          Aún no hay récords. ¡Sé la primera persona en registrar uno!
        </li>
      )}
      {entries.map((entry, idx) => (
        <li
          key={entry.id}
          className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
        >
          <div>
            <p className="text-white font-semibold">#{idx + 1} · {entry.name}</p>
            <p className="text-xs text-slate-400">
              {new Date(entry.date).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short"
              })}
              , precisión {entry.accuracy}%
            </p>
          </div>
          <p className="text-base font-bold text-brand-200">{entry.score} pts</p>
        </li>
      ))}
    </ul>
  </div>
);

export default HighscoreBoard;
