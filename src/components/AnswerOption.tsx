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
      return "border-white/10 text-white hover:border-brand-300 hover:bg-brand-500/10";
    }
    if (isSelected && isCorrect) {
      return "border-emerald-400 bg-emerald-500/10 text-emerald-100";
    }
    if (isSelected && !isCorrect) {
      return "border-rose-400 bg-rose-500/10 text-rose-100";
    }
    if (isCorrect) {
      return "border-emerald-400 text-white";
    }
    return "border-white/10 text-slate-300";
  })();

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      disabled={isDisabled}
      className={`group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${stateClass}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
        {optionLetter[index] ?? index + 1}
      </span>
      <span className="flex-1 text-base leading-snug">{label}</span>
    </button>
  );
};

export default AnswerOption;
