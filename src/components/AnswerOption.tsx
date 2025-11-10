interface AnswerOptionProps {
  index: number;
  label: string;
  isSelected: boolean;
  isCorrect: boolean;
  isDisabled: boolean;
  onSelect: (index: number) => void;
}

const optionLetter = ["A", "B", "C", "D", "E", "F"];

const AnswerOption = ({
  index,
  label,
  isSelected,
  isCorrect,
  isDisabled,
  onSelect
}: AnswerOptionProps) => {
  const stateClass = (() => {
    if (!isDisabled) {
      return "border-slate-300 text-slate-900 hover:border-brand-400 hover:bg-brand-50 dark:border-white/10 dark:text-white dark:hover:border-brand-300 dark:hover:bg-brand-500/10";
    }
    if (isSelected && isCorrect) {
      return "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-400 dark:bg-emerald-500/10 dark:text-emerald-100";
    }
    if (isSelected && !isCorrect) {
      return "border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-400 dark:bg-rose-500/10 dark:text-rose-100";
    }
    if (isCorrect) {
      return "border-emerald-500 text-emerald-700 dark:border-emerald-400 dark:text-white";
    }
    return "border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300";
  })();

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      disabled={isDisabled}
      className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${stateClass}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-900 dark:bg-white/10 dark:text-white">
        {optionLetter[index] ?? index + 1}
      </span>
      <span className="flex-1 text-base leading-snug">{label}</span>
    </button>
  );
};

export default AnswerOption;
