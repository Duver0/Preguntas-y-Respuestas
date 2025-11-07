import type { AnswerRecord } from "../hooks/useQuizEngine";

interface FailureBannerProps {
  failure: AnswerRecord;
  onRetry: () => void;
  onMenu: () => void;
}

const FailureBanner = ({ failure, onRetry, onMenu }: FailureBannerProps) => {
  const streakLabel =
    failure.streakCount === 1 ? "respuesta consecutiva" : "respuestas consecutivas";

  return (
    <div className="rounded-[32px] border border-rose-500/40 bg-rose-500/10 p-6 text-sm text-rose-50">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
        Respuesta incorrecta
      </p>
      <p className="mt-2 text-base text-white">
        Fallaste la pregunta:
        <span className="font-semibold"> “{failure.question}”</span>.
      </p>
      <p className="mt-1 text-rose-100">
        Tu opción: <span className="font-semibold">{failure.selectedLabel}</span>
        {failure.selectedLabel !== failure.correctLabel && (
          <>
            {" · "}
            Correcta: <span className="font-semibold">{failure.correctLabel}</span>
          </>
        )}
      </p>

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-rose-200">Puntuación</p>
          <p className="text-lg font-semibold text-white">{failure.totalScore} pts</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-rose-200">Racha lograda</p>
          <p className="text-lg font-semibold text-white">
            {failure.streakCount} {streakLabel}
          </p>
        </div>
      </div>

      <p className="mt-4 text-slate-200">
        ¿Qué deseas hacer ahora? Puedes volver al menú o reiniciar el reto desde cero.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onMenu}
          className="flex-1 rounded-2xl border border-white/10 px-4 py-3 font-semibold text-white transition hover:border-rose-200 hover:text-rose-100"
        >
          Ir al menú
        </button>
        <button
          type="button"
          onClick={onRetry}
          className="flex-1 rounded-2xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-400"
        >
          Volver a empezar
        </button>
      </div>
    </div>
  );
};

export default FailureBanner;
