const services = [
  {
    number: "01",
    title: "Anxiety Therapy",
    description:
      "Support for worry, overthinking, panic, body tension, sleep difficulties, and the feeling of always being on edge.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    description:
      "Carefully paced therapy for single-incident and complex trauma, with an emphasis on safety, stabilization, and regulation.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "A space to slow down, reconnect, and develop more sustainable ways of living and working without constant internal pressure.",
  },
];

const focusAreas = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Burnout",
  "Perfectionism",
  "Overthinking",
  "Stress",
  "Emotional Regulation",
];

const people = [
  {
    title: "Adults navigating anxiety",
    text: "For adults experiencing worry, overthinking, panic, body tension, sleep difficulties, or feeling constantly on edge.",
  },
  {
    title: "High-achieving professionals",
    text: "For professionals, entrepreneurs, and creatives experiencing burnout, perfectionism, and high internal pressure.",
  },
  {
    title: "Adults healing from difficult experiences",
    text: "For people working through past experiences that continue to affect relationships, confidence, emotional safety, or everyday life.",
  },
];

const faqs = [
  {
    question: "Where does Dr. Maya Reynolds practice?",
    answer:
      "Dr. Maya Reynolds offers in-person therapy from her office in Santa Monica, California.",
  },
  {
    question: "Does Dr. Maya offer online therapy?",
    answer:
      "Yes. Secure telehealth sessions are available for clients located in California.",
  },
  {
    question: "What concerns does Dr. Maya work with?",
    answer:
      "Her work often focuses on anxiety, panic, trauma, burnout, perfectionism, and the effects of earlier experiences on relationships, confidence, and a sense of safety.",
  },
  {
    question: "What therapeutic approaches does she use?",
    answer:
      "Her approach integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "What is her approach to trauma therapy?",
    answer:
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#29312F]">

      {/* ================= NAVBAR ================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#" className="group">
            <p className="font-serif text-lg tracking-wide">
              Dr. Maya Reynolds
            </p>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.24em] text-[#71877A]">
              Clinical Psychologist
            </p>
          </a>

          <div className="hidden items-center gap-7 md:flex">

            <a
              href="#about"
              className="text-[13px] transition-opacity hover:opacity-60"
            >
              About
            </a>

            <a
              href="#services"
              className="text-[13px] transition-opacity hover:opacity-60"
            >
              Services
            </a>

            <a
              href="#approach"
              className="text-[13px] transition-opacity hover:opacity-60"
            >
              Approach
            </a>

            <a
              href="#faq"
              className="text-[13px] transition-opacity hover:opacity-60"
            >
              FAQs
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#29312F] px-5 py-2.5 text-[13px] text-white transition-all hover:-translate-y-0.5"
            >
              Schedule a Consultation
            </a>

          </div>

          <details className="relative md:hidden">
  <summary className="cursor-pointer list-none rounded-full border border-[#29312F]/20 px-4 py-2 text-xs">
    Menu
  </summary>

  <div className="absolute right-0 top-12 w-48 rounded-2xl border border-[#29312F]/10 bg-white p-4 shadow-xl">
    <div className="flex flex-col gap-3 text-sm">
      <a href="#about" className="py-1 hover:opacity-60">
        About
      </a>

      <a href="#services" className="py-1 hover:opacity-60">
        Services
      </a>

      <a href="#approach" className="py-1 hover:opacity-60">
        Approach
      </a>

      <a href="#faq" className="py-1 hover:opacity-60">
        FAQs
      </a>

      <a
        href="#contact"
        className="mt-1 rounded-full bg-[#29312F] px-4 py-2.5 text-center text-xs text-white"
      >
        Schedule a Consultation
      </a>
    </div>
  </div>
</details>

        </nav>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="max-w-xl">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
              Therapy in Santa Monica & California
            </p>

            <h1 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
              Therapy for when life feels overwhelming, exhausting, or hard to
              slow down.
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#29312F]/70">
              Dr. Maya Reynolds offers warm, collaborative therapy for adults
              navigating anxiety, trauma, burnout, and perfectionism in Santa
              Monica and throughout California via secure telehealth.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">

              <a
                href="#contact"
                className="rounded-full bg-[#29312F] px-6 py-3.5 text-[13px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule a Free Consultation
              </a>

              <a
                href="#approach"
                className="group flex items-center gap-2 px-1 py-2 text-[13px] font-medium"
              >
                Learn about my approach

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>


          {/* Temporary Hero Image */}
          {/* HERO IMAGE */}
<div className="relative">

  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">

    <img
      src="/images/office1.jpeg"
      alt="Calm and naturally lit therapy office in Santa Monica"
      className="h-full w-full object-cover"
    />

  </div>

  <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-white px-5 py-4 shadow-lg sm:block">

    <p className="text-[9px] uppercase tracking-[0.2em] text-[#71877A]">
      In-person & online
    </p>

    <p className="mt-1 text-xs">
      Santa Monica, California
    </p>

  </div>

</div>
        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section
        id="about"
        className="bg-white px-6 py-20 lg:px-10 lg:py-24"
      >

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
              A place to slow down
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              You don't have to keep carrying everything alone.
            </h2>

          </div>

          <div className="max-w-2xl">

            <p className="text-[15px] leading-7 text-[#29312F]/75">
              You may be thoughtful, capable, and used to handling a lot on
              your own. But sometimes anxiety, past experiences, perfectionism,
              or constant pressure can make it difficult to feel grounded.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#29312F]/75">
              Therapy can offer a space to understand what is happening,
              develop practical tools, and reconnect with yourself at a pace
              that feels safe and manageable.
            </p>

            <div className="mt-7 h-px w-16 bg-[#B87862]" />

          </div>

        </div>

      </section>


      {/* ================= WHO I WORK WITH ================= */}
      <section className="px-6 py-20 lg:px-10 lg:py-24">

  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">

      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
        Who I work with
      </p>

      <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
        Support for thoughtful adults navigating a lot beneath the
        surface.
      </h2>

    </div>

    <div className="mt-11 grid gap-6 md:grid-cols-3">

      {people.map((item, index) => {

        const images = [
          "/images/who-adult.jpg",
          "/images/who-professionals.jpg",
          "/images/who-healing.jpg",
        ];

        return (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[1.25rem] border border-[#29312F]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="h-64 overflow-hidden">
              <img
                src={images[index]}
                alt=""
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 2 ? "object-top" : ""
                }`}
              />
            </div>

            <div className="p-7">

              <span className="text-xs text-[#B87862]">
                ●
              </span>

              <h3 className="mt-6 font-serif text-xl leading-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-[#29312F]/65">
                {item.text}
              </p>

              
            </div>

          </article>
        );

      })}

    </div>

  </div>

</section>


      {/* ================= FOCUS AREAS ================= */}
      <section className="overflow-hidden bg-[#29312F] px-6 py-12 text-white lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D8C7AE]">
            Areas of focus
          </p>

          <div className="flex flex-wrap justify-start gap-x-5 gap-y-2 lg:max-w-4xl lg:justify-end">

            {focusAreas.map((area) => (

              <span
                key={area}
                className="font-serif text-lg text-white/90 sm:text-xl"
              >
                {area}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="bg-white px-6 py-20 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
                Areas of support
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Therapy shaped around what you're experiencing.
              </h2>

            </div>

            <p className="max-w-sm text-[13px] leading-6 text-[#29312F]/60">
              Warm, collaborative care that combines practical tools with
              reflection and depth-oriented work.
            </p>

          </div>

          <div className="mt-11 divide-y divide-[#29312F]/10 border-y border-[#29312F]/10">

            {services.map((service) => (

              <article
                key={service.number}
                className="grid gap-4 py-7 md:grid-cols-[60px_0.8fr_1.2fr_50px] md:items-center"
              >

                <span className="text-xs text-[#B87862]">
                  {service.number}
                </span>

                <h3 className="font-serif text-xl">
                  {service.title}
                </h3>

                <p className="text-[13px] leading-6 text-[#29312F]/65">
                  {service.description}
                </p>

                <span className="text-right text-lg">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}
      <section
        id="approach"
        className="bg-[#F7F4EE] px-6 py-20 lg:px-10 lg:py-24"
      >

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          <div>

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
              My approach
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Warm, collaborative, and grounded.
            </h2>

            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#29312F]/65">
              Therapy can be structured enough to feel supportive while still
              leaving room for reflection and depth.
            </p>

          </div>


          <div>

            <div className="grid gap-8 sm:grid-cols-2">

              <div>
                <p className="font-serif text-xl">
                  Evidence-based care
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#29312F]/65">
                  I integrate cognitive-behavioral therapy, EMDR,
                  mindfulness-based practices, and body-oriented techniques.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl">
                  Mind & body
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#29312F]/65">
                  Our work can explore both the emotional and physiological
                  sides of what you are experiencing.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl">
                  Safety first
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#29312F]/65">
                  Trauma work is paced carefully with attention to safety,
                  stabilization, and regulation.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl">
                  Practical & reflective
                </p>

                <p className="mt-3 text-[13px] leading-6 text-[#29312F]/65">
                  Therapy combines practical tools with depth-oriented work
                  to support insight and resilience.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT MAYA ================= */}
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* Temporary portrait placeholder */}
          <div className="overflow-hidden rounded-[1.5rem]">

            <img
              src="/images/maya-reynolds.png"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              className="h-full w-full object-cover"
            />

          </div>


          <div>

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
              About Dr. Maya Reynolds
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              A space where you can feel respected, understood, and involved.
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#29312F]/70">
              Dr. Maya Reynolds is a licensed clinical psychologist based in
              Santa Monica, California. She works with adults who feel
              overwhelmed by anxiety, stress, or the lingering effects of past
              experiences.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#29312F]/70">
              Many of the people she works with are high-achieving,
              thoughtful, and self-aware, while internally feeling exhausted,
              stuck in overthinking, or emotionally on edge.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#29312F]/70">
              Her goal is not only symptom relief, but helping clients develop
              insight, resilience, and a stronger relationship with themselves
              over time.
            </p>

            <div className="mt-7 h-px w-16 bg-[#B87862]" />

          </div>

        </div>

      </section>


      {/* ================= OUR OFFICE ================= */}
      <section className="bg-[#F7F4EE] px-6 py-20 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
                Our office
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                A calm space to arrive, settle, and feel at ease.
              </h2>

            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#29312F]/70">
              Dr. Maya's Santa Monica office is a quiet, private space with
              natural light and a comfortable, uncluttered environment designed
              to feel calm and grounding.
            </p>

          </div>


          {/* Office image placeholders */}
         <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">

  {/* Main office image */}
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src="/images/office1.jpeg"
            alt="Therapy office with natural light and comfortable seating"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>


        {/* Secondary office image */}
        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src="/images/office2.jpeg"
            alt="Comfortable counseling space with seating and bookshelves"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>

      </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="border-t border-[#29312F]/15 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71877A]">
                Location
              </p>

              <p className="mt-2 text-sm">
                Santa Monica, California
              </p>
            </div>

            <div className="border-t border-[#29312F]/15 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71877A]">
                In-person
              </p>

              <p className="mt-2 text-sm">
                Santa Monica office
              </p>
            </div>

            <div className="border-t border-[#29312F]/15 pt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71877A]">
                Telehealth
              </p>

              <p className="mt-2 text-sm">
                Secure sessions across California
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-[#29312F] px-6 py-20 text-white lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[10px] uppercase tracking-[0.28em] text-[#D8C7AE]">
            Take the next step
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            You deserve a space where you feel understood.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-white/65">
            Therapy can be a place to slow down, reconnect, and develop a
            deeper understanding of yourself.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-[#F7F4EE] px-7 py-3.5 text-[13px] font-medium text-[#29312F] transition-all hover:-translate-y-0.5"
          >
            Schedule a Free Consultation
          </a>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section
        id="faq"
        className="bg-white px-6 py-20 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#71877A]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              A few things you may be wondering.
            </h2>

          </div>


          <div className="mt-12 divide-y divide-[#29312F]/10 border-y border-[#29312F]/10">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group py-5"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg">
                  {faq.question}

                  <span className="text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-[13px] leading-6 text-[#29312F]/65">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#F7F4EE] px-6 py-12 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 border-b border-[#29312F]/10 pb-10 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">

              <p className="font-serif text-2xl">
                Dr. Maya Reynolds
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#71877A]">
                Licensed Clinical Psychologist
              </p>

              <p className="mt-5 max-w-sm text-[13px] leading-6 text-[#29312F]/60">
                Warm, collaborative therapy for adults navigating anxiety,
                trauma, burnout, and perfectionism.
              </p>

            </div>


            <div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71877A]">
                Explore
              </p>

              <div className="mt-4 space-y-2 text-[13px]">

                <a href="#about" className="block hover:opacity-60">
                  About
                </a>

                <a href="#services" className="block hover:opacity-60">
                  Services
                </a>

                <a href="#approach" className="block hover:opacity-60">
                  Approach
                </a>

                <a href="#faq" className="block hover:opacity-60">
                  FAQs
                </a>

              </div>

            </div>


            <div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#71877A]">
                Practice
              </p>

              <div className="mt-4 space-y-2 text-[13px] text-[#29312F]/70">

                <p>Santa Monica, California</p>

                <p>In-person therapy</p>

                <p>Secure California telehealth</p>

              </div>

            </div>

          </div>


          <div className="flex flex-col justify-between gap-3 pt-6 text-[11px] text-[#29312F]/50 sm:flex-row">

            <p>
              © 2026 Dr. Maya Reynolds. All rights reserved.
            </p>

            <p>
              Santa Monica, California
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}