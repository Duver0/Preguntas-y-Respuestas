interface HeroProps {
  onStart: () => void;
  totalQuestions: number;
}

const Hero = ({ onStart, totalQuestions }: HeroProps) => (
  <section className="rounded-[40px] border border-white/10 bg-gradient-to-br from-brand-600/70 via-slate-900/80 to-slate-950/90 p-10 text-white">
    <p className="text-sm uppercase tracking-[0.4em] text-brand-100">React · Tailwind · Bun</p>
    <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
      Quiz interactivo listo para GitHub Pages
    </h1>
    <p className="mt-4 max-w-2xl text-lg text-brand-50">
      Practica conocimientos de desarrollo web con preguntas seleccionadas. Cada respuesta correcta suma puntos y desbloquea rachas con bonus.
    </p>
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={onStart}
        className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:scale-[1.02]"
      >
        Comenzar reto
      </button>
      <p className="text-sm uppercase tracking-widest text-brand-100">
        {totalQuestions}+ preguntas curadas
      </p>
    </div>
  </section>
);

export default Hero;
