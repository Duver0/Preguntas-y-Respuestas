interface ScoreCardProps {
  score: number;
  currentQuestion: number;
  totalQuestions: number;
  streak: number;
  maxStreak: number;
  accuracy: number;
}

const ScoreCard = ({
  score,
  currentQuestion,
  totalQuestions,
  streak,
  maxStreak,
  accuracy
}: ScoreCardProps) => {
  const stats = [
    { label: "Pregunta", value: `${currentQuestion}/${totalQuestions}` },
    { label: "Racha", value: `${streak}` },
    { label: "Mejor racha", value: `${maxStreak}` },
    { label: "Precisión", value: `${accuracy}%` }
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-white/5 dark:backdrop-blur">
      <p className="text-sm font-medium text-brand-700 dark:text-brand-200">Marcador</p>
      <p className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">{score} pts</p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 text-center dark:border-white/5 dark:bg-white/5"
          >
            <p className="text-slate-500 dark:text-slate-300">{stat.label}</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
