export default function Contact() {
  return (
    <section id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10">
        <h2 className="max-w-xl text-balance font-display text-4xl italic text-paper">
          Working on something that touches AI, robotics, or backend
          development? Let's talk.
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:ali.klay3500@gmail.com"
            className="rounded-full bg-violet px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            Email me
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
            href="https://www.linkedin.com/in/mohammed-ali-4b054a432"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-violet hover:text-violet"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-hairline px-6 py-6 text-center text-xs text-muted md:px-10">
        © {new Date().getFullYear()} Mohammed Ali
      </div>
    </section>
  );
}
