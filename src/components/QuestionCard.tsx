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
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/10 transition-colors dark:border-white/10 dark:bg-gradient-to-b dark:from-slate-900/70 dark:to-slate-900/40">
      <header className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-200">
        <span className="rounded-full bg-brand-100 px-3 py-1 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
          {question.category}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-white/5 dark:text-slate-200">
          {question.difficulty}
        </span>
        <span className="ml-auto text-slate-500 dark:text-slate-400">
          {index + 1} / {total}
        </span>
      </header>

      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{question.question}</h2>

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
        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-50">
          {question.explanation}
        </p>
      )}
    </article>
  );
};

export default QuestionCard;
