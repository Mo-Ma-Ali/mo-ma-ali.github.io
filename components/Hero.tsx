const readouts = [
  { label: "Repositories", value: "13" },
  { label: "Domains crossed", value: "4" },
  { label: "Languages in active use", value: "Python · C# · PHP" },
  { label: "Current focus", value: "Transformers / NLP / Backend " },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-content px-6 pb-20 pt-16 md:px-10 md:pt-24"
    >
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div>
          <p className="text-sm text-gold">AI/ML Engineer</p>
          {/* <h1 className="mt-4 max-w-xl text-balance font-display text-5xl leading-[1.08] text-paper md:text-6xl">
            I build systems that learn, move, and hold together under load.
          </h1> */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            I build practical AI systems across Machine Learning, NLP, Computer
            Vision, and Python backend development — from data processing and
            model development to fine-tuning, evaluation, and deployment.
            Machine Learning · Deep Learning · NLP · Computer Vision · Python ·
            PyTorch · FastAPI
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
            >
              view the projects
            </a>
            <a
              href="https://github.com/Mo-Ma-Ali"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-violet hover:text-violet"
            >
              github.com/Mo-Ma-Ali
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-hairline bg-panel p-6">
          <p className="text-xs text-muted">Profile snapshot</p>
          <dl className="mt-5 space-y-5">
            {readouts.map((item) => (
              <div
                key={item.label}
                className="border-t border-hairline pt-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-xs text-muted">{item.label}</dt>
                <dd className="mt-1 font-mono text-lg text-paper">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
