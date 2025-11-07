import type { Question } from "../data/questions";
import AnswerOption from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelect: (index: number) => void;
  index: number;
  total: number;
}

const QuestionCard = ({ question, selectedOption, onSelect, index, total }: QuestionCardProps) => {
  const isAnswered = selectedOption !== null;

  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-6 shadow-2xl shadow-brand-900/30">
      <header className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-200">
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-brand-200">
          {question.category}
        </span>
        <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200">
          {question.difficulty}
        </span>
        <span className="ml-auto text-slate-400">
          {index + 1} / {total}
        </span>
      </header>

      <h2 className="text-2xl font-semibold text-white">{question.question}</h2>

      <div className="mt-6 flex flex-col gap-4">
        {question.options.map((option, pos) => (
          <AnswerOption
            key={option}
            index={pos}
            label={option}
            isSelected={selectedOption === pos}
            isCorrect={pos === question.answer}
            isDisabled={isAnswered}
            onSelect={onSelect}
          />
        ))}
      </div>

      {isAnswered && (
        <p className="mt-6 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-50">
          {question.explanation}
        </p>
      )}
    </article>
  );
};

export default QuestionCard;
