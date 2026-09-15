export default function About() {
  return (
    <section id="about" className="border-t border-hairline bg-panel/30">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.4fr] md:gap-16 md:px-10">
        <h2 className="font-display text-3xl italic text-paper">About</h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I move between fields more than most engineers do on purpose. A
            medical imaging model needs a completely different intuition than a
            robotic controller, and a soft-body physics simulation shares almost
            nothing with an Arabic NLP pipeline — except the underlying
            discipline of specifying a problem precisely enough that code can
            solve it.
          </p>
          <p>
            That range is deliberate. Working across computer vision, language
            processing, robotics, and simulation keeps me from over-fitting to
            one way of thinking about a system, and it means I usually have a
            useful analogy on hand from an unrelated domain when something new
            gets stuck.
          </p>
        </div>
      </div>
    </section>
  );
}
