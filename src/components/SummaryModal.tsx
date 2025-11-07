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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
            ¡Reto completado!
          </p>
          <h3 className="mt-2 text-4xl font-bold text-white">{score} puntos</h3>
          <p className="mt-1 text-slate-300">
            {correctAnswers} respuestas correctas · {accuracy}% de precisión
          </p>
        </header>

        <section className="mt-6 max-h-64 overflow-y-auto rounded-2xl border border-white/5 bg-white/5 p-4 text-sm">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
            Historial
          </p>
          <ul className="space-y-3">
            {history.map((entry) => (
              <li
                key={entry.questionId}
                className="rounded-2xl border border-white/5 bg-slate-900/60 px-3 py-2"
              >
                <p className="text-xs font-semibold uppercase text-brand-200">
                  {entry.category}
                </p>
                <p className="text-white">{entry.question}</p>
                <p className="text-xs text-slate-400">
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
            className="flex-1 rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none"
          />
          <button
            type="button"
            disabled={!name.trim()}
            onClick={() => onSave(name.trim())}
            className="rounded-2xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-slate-700"
          >
            Guardar récord
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <button
            type="button"
            onClick={onReplay}
            className="flex-1 rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-brand-300 hover:text-brand-100"
          >
            Jugar otra vez
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
