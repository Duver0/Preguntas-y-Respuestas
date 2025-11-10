import { useEffect, useMemo, useState } from "react";
import type { AnswerRecord } from "../hooks/useQuizEngine";

interface SummaryModalProps {
  isOpen: boolean;
  score: number;
  accuracy: number;
  history: AnswerRecord[];
  onReplay: () => void;
  onSave: (name: string) => void;
}

const SummaryModal = ({
  isOpen,
  score,
  accuracy,
  history,
  onReplay,
  onSave
}: SummaryModalProps) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
    }
  }, [isOpen]);

  const correctAnswers = useMemo(
    () => history.filter((entry) => entry.wasCorrect).length,
    [history]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-sm dark:bg-black/70">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl shadow-brand-900/20 dark:border-white/10 dark:bg-slate-900/90 dark:text-white">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700 dark:text-brand-200">
            ¡Reto completado!
          </p>
          <h3 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">{score} puntos</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            {correctAnswers} respuestas correctas · {accuracy}% de precisión
          </p>
        </header>

        <section className="mt-6 max-h-64 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/5 dark:bg-white/5">
          <p className="mb-3 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Historial
          </p>
          <ul className="space-y-3">
            {history.map((entry) => (
              <li
                key={entry.questionId}
                className="rounded-2xl border border-slate-100 bg-white px-3 py-2 dark:border-white/5 dark:bg-slate-900/60"
              >
                <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-200">
                  {entry.category}
                </p>
                <p className="text-slate-900 dark:text-white">{entry.question}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {entry.wasCorrect ? "Correcta" : "Incorrecta"} · +{entry.earnedPoints} pts
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Tu nombre para el ranking"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="flex-1 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-slate-500 dark:focus:border-brand-300"
          />
          <button
            type="button"
            disabled={!name.trim()}
            onClick={() => onSave(name.trim())}
            className="rounded-2xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-slate-200 dark:disabled:bg-slate-700"
          >
            Guardar récord
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <button
            type="button"
            onClick={onReplay}
            className="flex-1 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-white dark:hover:border-brand-300 dark:hover:text-brand-100"
          >
            Jugar otra vez
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
