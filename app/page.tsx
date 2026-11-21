const navLinks = [
  { label: "Problems", href: "#problems" },
  { label: "Features", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Cost", href: "#cost" },
];

const problems = [
  {
    icon: "📅",
    title: "Routine on paper and WhatsApp",
    text: "The daily routine is written on paper, photographed and posted in groups. To find a free teacher, the admin has to call everyone.",
  },
  {
    icon: "📝",
    title: "Daily exams are ignored",
    text: "Printed daily exams are not taken seriously, so students score poorly and the center gets little useful data.",
  },
  {
    icon: "💸",
    title: "Script checking is slow and costly",
    text: "Checking about 200 scripts a month costs around 3,000 taka and takes days before students see their marks.",
  },
];

const modules = [
  {
    icon: "🗓️",
    title: "Online Routine and Availability",
    points: [
      "Create the daily routine with automatic clash detection",
      "Published routines reach teachers and students with a notification",
      "One availability request goes to all teachers, and the admin sees a live table",
    ],
  },
  {
    icon: "🏆",
    title: "Online Exams and Leaderboards",
    points: [
      "MCQ and CQ exams with timer, random order and auto-submit",
      "Daily, weekly and monthly leaderboards with friends ranking",
      "Private progress graph for every student",
    ],
  },
  {
    icon: "🤖",
    title: "AI-Assisted Script Checking",
    points: [
      "Students upload photos of handwritten CQ answers",
      "AI suggests marks using a rubric and model answer",
      "A teacher approves or corrects the marks before they are final",
    ],
  },
];

const roles = [
  {
    name: "Admin",
    text: "Creates routines, sends availability requests, manages exams and reviews results.",
  },
  {
    name: "Teacher",
    text: "Sees the routine, replies to availability requests and approves graded scripts.",
  },
  {
    name: "Student",
    text: "Checks the routine, takes exams online, views the leaderboard and tracks progress.",
  },
];

const routine = [
  { time: "4:00 PM", batch: "HSC 26 - A", subject: "Physics", teacher: "Mr. Rahim" },
  { time: "5:30 PM", batch: "HSC 27 - B", subject: "ICT", teacher: "Ms. Nila" },
  { time: "7:00 PM", batch: "SSC 26", subject: "Math", teacher: "Mr. Karim" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold text-indigo-600">
          Adommo Avash
        </a>
        <ul className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a
            href="#"
            className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Login
          </a>
          <a
            href="#"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Coaching Center Management System
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Run your coaching center online
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Adommo Avash replaces paper routines and WhatsApp messages with one
            system for routines, exams, leaderboards and AI-assisted script
            checking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              Explore Features
            </a>
            <a
              href="#problems"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Why Adommo Avash?
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Works on mobile and desktop, and can be installed on a phone.
          </p>
        </div>

        {/* Preview card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Today&apos;s Routine</h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              Published
            </span>
          </div>
          <div className="space-y-3">
            {routine.map((item) => (
              <div
                key={item.time}
                className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
              >
                <div>
                  <p className="font-semibold text-slate-800">{item.subject}</p>
                  <p className="text-sm text-slate-500">
                    {item.batch} - {item.teacher}
                  </p>
                </div>
                <span className="text-sm font-medium text-indigo-600">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problems" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        Problems we solve
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
        These three problems were observed in the daily work of the coaching
        center.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="text-3xl">{p.icon}</div>
            <h3 className="mt-3 text-lg font-bold text-slate-800">{p.title}</h3>
            <p className="mt-2 text-slate-600">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Three modules, one system
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {modules.map((m) => (
            <div key={m.title} className="rounded-xl bg-white p-6 shadow-md">
              <div className="text-3xl">{m.icon}</div>
              <h3 className="mt-3 text-lg font-bold text-indigo-700">
                {m.title}
              </h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {m.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-indigo-500">✔</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        Built for three roles
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {roles.map((r) => (
          <div
            key={r.name}
            className="rounded-xl border-t-4 border-indigo-600 bg-white p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-800">{r.name}</h3>
            <p className="mt-2 text-slate-600">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cost() {
  return (
    <section id="cost" className="bg-indigo-600 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold">Lower cost for script checking</h2>
        <p className="mt-2 text-indigo-100">
          Estimate for about 200 scripts per month, with 3 CQ each.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-wide text-indigo-200">
              Manual checking
            </p>
            <p className="mt-2 text-4xl font-extrabold">3,000 tk</p>
            <p className="text-indigo-100">per month</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-slate-800">
            <p className="text-sm uppercase tracking-wide text-indigo-600">
              AI-assisted checking
            </p>
            <p className="mt-2 text-4xl font-extrabold text-indigo-600">
              800 - 1,600 tk
            </p>
            <p className="text-slate-500">per month, with teacher approval</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <p className="font-semibold text-slate-700">Adommo Avash</p>
      <p>Coaching Center Management System</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Problems />
      <Features />
      <Roles />
      <Cost />
      <Footer />
    </main>
  );
}