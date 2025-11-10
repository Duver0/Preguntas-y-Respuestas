interface HeroProps {
  onStart: () => void;
  totalQuestions: number;
}

const Hero = ({ onStart, totalQuestions }: HeroProps) => (
  <section className="rounded-[40px] border border-slate-200 bg-white/90 p-10 text-slate-900 shadow-xl shadow-brand-900/10 transition-colors dark:border-white/10 dark:bg-gradient-to-br dark:from-brand-600/70 dark:via-slate-900/80 dark:to-slate-950/90 dark:text-white">
    <p className="text-sm uppercase tracking-[0.4em] text-brand-600 dark:text-brand-100">
      React · Tailwind · Bun
    </p>
    <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl">
      Juego de preguntas listo para compartirse en la web
    </h1>
    <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-brand-50">
      Practica conocimientos de desarrollo web con preguntas seleccionadas. Cada respuesta correcta suma puntos y desbloquea rachas con bonus.
    </p>
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onStart}
        className="rounded-2xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] dark:bg-white dark:text-slate-900"
      >
        Comenzar reto
      </button>
      <p className="text-sm uppercase tracking-widest text-brand-600 dark:text-brand-100">
        {totalQuestions}+ preguntas curadas
      </p>
    </div>
  </section>
);

export default Hero;
