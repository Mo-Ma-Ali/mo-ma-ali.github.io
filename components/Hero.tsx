const readouts = [
  {
    label: "Primary focus",
    value: "AI / Machine Learning",
  },
  {
    label: "Specialization",
    value: "NLP · LLMs · Computer Vision",
  },
  {
    label: "Engineering",
    value: "Python · PyTorch · FastAPI",
  },
  {
    label: "Currently building",
    value: "Practical AI systems",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-content px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24"
    >
      <div className="grid gap-14 md:grid-cols-[1.45fr_0.85fr] md:items-end">
        {/* Main introduction */}
        <div>
          <p className="text-sm font-medium tracking-wide text-gold">
            AI / ML ENGINEER
          </p>

          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-paper md:text-7xl">
            Mohammed Ali
          </h1>

          <h2 className="mt-6 max-w-2xl text-2xl leading-tight text-paper/90 md:text-3xl">
            Building AI systems that move from models to applications.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
            I build practical AI systems across Machine Learning, NLP, Computer
            Vision, and Python backend development — from data processing and
            model development to fine-tuning, evaluation, and deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-muted">
            {[
              "Machine Learning",
              "Deep Learning",
              "NLP",
              "LLMs",
              "Computer Vision",
              "Python",
              "PyTorch",
              "FastAPI",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-hairline bg-panel px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
            >
              Explore my work
            </a>

            <a
              href="https://github.com/Mo-Ma-Ali"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-violet hover:text-violet"
            >
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-violet hover:text-violet"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile snapshot */}
        <div className="rounded-2xl border border-hairline bg-panel p-6 md:p-7">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-wider text-muted">
              Profile snapshot
            </p>

            <span className="h-2 w-2 rounded-full bg-violet" />
          </div>

          <dl className="mt-6 space-y-6">
            {readouts.map((item) => (
              <div
                key={item.label}
                className="border-t border-hairline pt-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {item.label}
                </dt>

                <dd className="mt-2 text-sm leading-relaxed text-paper">
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
