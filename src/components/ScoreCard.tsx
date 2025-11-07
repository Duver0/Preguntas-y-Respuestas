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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-sm font-medium text-brand-200">Marcador</p>
      <p className="mt-2 text-4xl font-bold text-white">{score} pts</p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-white/5 px-3 py-4 text-center"
          >
            <p className="text-slate-300">{stat.label}</p>
            <p className="text-lg font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
