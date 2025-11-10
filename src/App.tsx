import { useMemo } from "react";
import FailureBanner from "./components/FailureBanner";
import Hero from "./components/Hero";
import HighscoreBoard from "./components/HighscoreBoard";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ScoreCard from "./components/ScoreCard";
import SummaryModal from "./components/SummaryModal";
import ThemeToggle from "./components/ThemeToggle";
import { QUESTIONS } from "./data/questions";
import { useHighscores } from "./hooks/useHighscores";
import { useQuizEngine } from "./hooks/useQuizEngine";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const quiz = useQuizEngine(QUESTIONS, { rounds: 15, basePoints: 120, streakBonus: 20 });
  const { entries, addEntry, reset } = useHighscores();
  const { theme, toggleTheme } = useTheme();

  const topFive = useMemo(() => entries.slice(0, 5), [entries]);

  const hasStarted = quiz.status !== "idle";
  const actionLabel =
    quiz.currentIndex + 1 === quiz.totalRounds ? "Finalizar reto" : "Siguiente pregunta";

  const handleSaveScore = (name: string) => {
    addEntry({ name, score: quiz.score, accuracy: quiz.accuracy });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 transition-colors duration-300 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-white">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 lg:space-y-12 lg:py-16">
        <header className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-brand-700 dark:text-brand-300">
            Preguntas y Respuestas · React
          </p>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Juego interactivo
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Componentes reutilizables impulsados por Bun + Tailwind, listos para compartirse en la web.
          </p>
        </header>

        {!hasStarted && quiz.failure ? (
          <FailureBanner failure={quiz.failure} onRetry={quiz.start} onMenu={quiz.clearFailure} />
        ) : (
          !hasStarted && <Hero onStart={quiz.start} totalQuestions={QUESTIONS.length} />
        )}

        {hasStarted && quiz.currentQuestion && (
          <main className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <section className="space-y-6">
              <ProgressBar value={quiz.progress} />
              <QuestionCard
                question={quiz.currentQuestion}
                selectedOption={quiz.selectedOption}
                onSelect={quiz.selectOption}
                index={quiz.currentIndex}
                total={quiz.totalRounds}
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (quiz.selectedOption === null) {
                      return;
                    }
                    quiz.goNext();
                  }}
                  disabled={quiz.selectedOption === null}
                  className="rounded-2xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-700"
                >
                  {actionLabel}
                </button>
                <button
                  type="button"
                  onClick={quiz.restart}
                  className="rounded-2xl border border-slate-200 px-6 py-3 font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-white dark:hover:text-brand-100"
                >
                  Reiniciar ronda
                </button>
              </div>
            </section>

            <aside className="space-y-6">
              <ScoreCard
                score={quiz.score}
                currentQuestion={quiz.currentIndex + 1}
                totalQuestions={quiz.totalRounds}
                streak={quiz.streak}
                maxStreak={quiz.maxStreak}
                accuracy={quiz.accuracy}
              />
              <HighscoreBoard entries={topFive} onReset={reset} />
            </aside>
          </main>
        )}
      </div>

      <SummaryModal
        isOpen={quiz.status === "finished"}
        score={quiz.score}
        accuracy={quiz.accuracy}
        history={quiz.history}
        onReplay={quiz.restart}
        onSave={handleSaveScore}
      />
    </div>
  );
};

export default App;
