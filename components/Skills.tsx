const groups = [
  {
    domain: "Machine learning",
    items: [
      "Python",
      "Computer vision",
      "NLP",
      "PyTorch",
      "Transformers",
      "FastAPI",
    ],
  },
  {
    domain: "Robotics & simulation",
    items: ["Control logic", "Unity", "C#", "Physics simulation"],
  },
  {
    domain: "Applied web",
    items: ["PHP", "Laravel", "Express.js", "Next.js", "React"],
  },
  // {
  //   domain: "Languages",
  //   items: ["Arabic NLP tooling", "English documentation"],
  // },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10">
      <h2 className="mb-10 font-display text-3xl italic text-paper">Toolset</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.domain} className="border-l border-hairline pl-5">
            <p className="text-sm text-gold">{group.domain}</p>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
