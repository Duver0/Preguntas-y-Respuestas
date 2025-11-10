interface ProgressBarProps {
  value: number; // 0 - 1
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  const percentage = Math.min(100, Math.max(0, Number((value * 100).toFixed(2))));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
        <span>Progreso</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-brand-400 via-emerald-400 to-amber-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
