import Image from "next/image";
import {
  ArrowRight,
  Bike,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { BookingCalendar } from "@/components/booking-calendar";

const services = [
  {
    name: "Flat Tire Fix",
    price: "$25",
    note: "Tube swap, pressure check, and a quick wheel inspection.",
    icon: Zap,
    accent: "teal",
    features: ["30-min turnaround", "Walk-ins welcome"],
  },
  {
    name: "Commuter Tune",
    price: "$85",
    note: "Brake, gear, and drivetrain tuning for daily campus rides.",
    icon: Bike,
    accent: "coral",
    features: ["Most popular", "Ready within 48 hours"],
  },
  {
    name: "Pro Overhaul",
    price: "$160",
    note: "A deep workshop reset for performance bikes and long rides.",
    icon: Wrench,
    accent: "lime",
    features: ["Full strip and clean", "Hydraulic bleed check"],
  },
];

const process = [
  {
    title: "Book or drop by",
    text: "Pick a time online or roll into the shop between classes.",
    icon: CalendarCheck,
  },
  {
    title: "Free diagnosis",
    text: "We explain what is wrong before any paid work starts.",
    icon: Sparkles,
  },
  {
    title: "Back on the road",
    text: "Most commuter fixes are finished the same day.",
    icon: Bike,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f8f1] text-[#171d1c]">
      <header className="sticky top-0 z-50 border-b border-[#007a74]/20 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a className="text-2xl font-black tracking-tight text-[#556600]" href="#top">
            VéloVite
          </a>
          <div className="hidden items-center gap-10 text-sm font-semibold text-[#3f4742] md:flex">
            <a className="text-[#007a74] underline decoration-[#dfff2f] decoration-4 underline-offset-8" href="#top">
              Home
            </a>
            <a className="transition hover:text-[#007a74]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#007a74]" href="#location">
              Location
            </a>
            <a className="transition hover:text-[#007a74]" href="#booking">
              Booking
            </a>
          </div>
          <a
            className="rounded-2xl border border-[#171d1c] bg-[#e6ff2f] px-5 py-3 text-sm font-black text-[#596800] shadow-[0_4px_0_#171d1c] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#171d1c]"
            href="#booking"
          >
            Book a Repair
          </a>
        </nav>
      </header>

      <section id="top" className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#79ece9] px-4 py-2 text-sm font-black text-[#006c68]">
              <Zap className="size-4" /> Same-day service near campus
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#171d1c] sm:text-6xl lg:text-7xl">
              Fast fixes with workshop precision.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4d5650] sm:text-xl">
              A middle-ground bike shop for students, commuters, and performance riders: bright, quick, transparent service backed by serious mechanics.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ff6f75] px-7 py-4 text-base font-black text-[#2a080b] shadow-[0_5px_0_#171d1c] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#171d1c]"
                href="#booking"
              >
                Book Service <ArrowRight className="size-5" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#007a74]/30 bg-white px-7 py-4 text-base font-black text-[#007a74] transition hover:border-[#007a74] hover:bg-[#edfffb]"
                href="#location"
              >
                See Location <MapPin className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[620px]">
            <div className="absolute inset-y-0 -right-32 left-10 hidden -skew-x-6 rounded-l-[4rem] bg-[#1baaa3] shadow-2xl shadow-[#007a74]/20 lg:block" />
            <div className="relative mx-auto flex h-full max-w-xl flex-col justify-center rounded-[2.25rem] bg-[#1baaa3] p-5 shadow-2xl shadow-[#007a74]/20 lg:mt-4 lg:rounded-[2.75rem]">
              <div className="rounded-[1.75rem] bg-[radial-gradient(circle_at_25%_20%,#dfff2f_0_9%,transparent_10%),linear-gradient(135deg,#d7fcff,#f4fff7_44%,#7de8e3)] p-6 shadow-2xl shadow-[#005955]/30">
                <div className="flex items-center justify-between text-sm font-black uppercase tracking-[0.28em] text-[#007a74]">
                  <span>Repair bay</span>
                  <span>Open now</span>
                </div>
                <div className="relative mt-8 min-h-[380px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-xl backdrop-blur">
                  <Image
                    alt="A cyclist with a freshly repaired bike"
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 90vw"
                    src="/bike.avif"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171d1c]/65 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-white/95 p-4 shadow-sm backdrop-blur">
                      <p className="text-2xl font-black">15</p>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#677069]">min flats</p>
                    </div>
                    <div className="rounded-2xl bg-[#171d1c]/95 p-4 text-white shadow-sm backdrop-blur">
                      <p className="text-2xl font-black">48h</p>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">tunes</p>
                    </div>
                    <div className="rounded-2xl bg-[#e6ff2f]/95 p-4 text-[#596800] shadow-sm backdrop-blur">
                      <p className="text-2xl font-black">4.9</p>
                      <p className="text-xs font-bold uppercase tracking-wider">rating</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 right-0 max-w-[280px] rounded-3xl border border-white/70 bg-[#f5fffb]/95 p-6 shadow-2xl shadow-[#005955]/20 backdrop-blur sm:right-8">
                <p className="text-sm font-black text-[#596800]">Expert mechanics</p>
                <p className="mt-2 leading-7 text-[#2c3431]">
                  Clear quotes, fast repairs, and no tech-babble before your next commute.
                </p>
                <p className="mt-3 text-xl font-black text-[#d8f71f]">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9e4de] bg-[#e8f1f3] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 rounded-[2rem] border-t-4 border-[#007a74] bg-white p-6 shadow-xl shadow-[#2c3c36]/5 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-[#007a74]">
                <span className="size-3 rounded-full bg-[#007a74]" /> Quick help for cyclists
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Open now, closes at 6pm</h2>
              <p className="mt-3 max-w-2xl text-[#59615d]">
                Walk-ins are welcome for quick checks, tube swaps, brake rub, chain slip, and light adjustments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#f2f3ef] px-6 py-5 text-center">
                <Wrench className="mx-auto size-6 text-[#007a74]" />
                <p className="mt-2 text-xs font-black uppercase">Flat fix</p>
                <p className="text-2xl font-black">15 min</p>
              </div>
              <div className="rounded-2xl bg-[#f2f3ef] px-6 py-5 text-center">
                <Clock3 className="mx-auto size-6 text-[#007a74]" />
                <p className="mt-2 text-xs font-black uppercase">Brake tune</p>
                <p className="text-2xl font-black">20 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#b3353d]">Transparent pricing</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Swift repairs for your daily dash</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#59615d]">
              The bright student-friendly pricing from the split mockups, with the serious maintenance packages from the precision layout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const isPopular = service.accent === "coral";
              const accentClasses = {
                teal: "border-[#007a74] text-[#007a74] bg-[#79ece9]",
                coral: "border-[#ff6f75] text-[#b3353d] bg-[#ff6f75]",
                lime: "border-[#dfff2f] text-[#596800] bg-[#e6ff2f]",
              }[service.accent];

              return (
                <article
                  className={`relative rounded-[1.75rem] border-t-4 bg-white p-8 shadow-xl shadow-[#243832]/5 ${accentClasses}`}
                  key={service.name}
                >
                  {isPopular ? (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#b3353d] px-5 py-2 text-xs font-black uppercase tracking-widest text-white">
                      Most popular
                    </span>
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-2xl bg-current/10 p-4">
                      <Icon className="size-7" />
                    </span>
                    <div className="text-right">
                      <p className="text-4xl font-black">{service.price}</p>
                      <p className="text-xs font-black uppercase tracking-wider text-[#68716c]">Flat rate</p>
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-black text-[#171d1c]">{service.name}</h3>
                  <p className="mt-4 min-h-20 leading-7 text-[#59615d]">{service.note}</p>
                  <ul className="mt-7 space-y-3 text-sm font-bold text-[#28312d]">
                    {service.features.map((feature) => (
                      <li className="flex items-center gap-2" key={feature}>
                        <CheckCircle2 className="size-4 text-[#007a74]" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl border px-5 py-4 font-black text-[#171d1c] transition hover:-translate-y-0.5 ${
                      isPopular ? "border-[#171d1c] bg-[#ff6f75] shadow-[0_4px_0_#171d1c]" : "border-current bg-white hover:bg-[#f8fff1]"
                    }`}
                    href="#booking"
                  >
                    Select Fix
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Your road to recovery</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#dfff2f]" />
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute left-16 right-16 top-8 hidden h-px bg-[#a9b5aa] md:block" />
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article className="relative text-center" key={step.title}>
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full border-4 border-white bg-[#e6ff2f] text-[#596800] shadow-md">
                    <Icon className="size-7" />
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#007a74]">Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-sm leading-7 text-[#59615d]">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#dfe9ec] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-[#171d1c] p-6 text-white shadow-2xl shadow-[#1a2e2c]/20 sm:p-8">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#0f3432,#38433b_42%,#dfff2f)] p-7">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#79ece9]">Technical standard</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Workshop precision</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/78">
                Every bike gets torque checks, cable tension calibration, drivetrain inspection, and a plain-English quote before the repair begins.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <ShieldCheck className="size-7 text-[#dfff2f]" />
                  <p className="mt-4 text-lg font-black">Certified mechanics</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">Shimano and commuter drivetrain specialists.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <Clock3 className="size-7 text-[#ff8a8f]" />
                  <p className="mt-4 text-lg font-black">Live status</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">Pending, in progress, and ready updates.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="location" className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#9da29d] p-8 shadow-2xl shadow-[#66706b]/20">
              <div className="absolute inset-12 rounded-[1.5rem] bg-[#edf0ed] opacity-90" />
              <div className="absolute left-0 top-1/3 h-8 w-full rotate-[-14deg] bg-white/75" />
              <div className="absolute left-0 top-2/3 h-6 w-full rotate-[18deg] bg-white/65" />
              <div className="absolute bottom-0 left-1/3 h-full w-8 rotate-[9deg] bg-white/70" />
              <div className="relative flex h-full items-center justify-center">
                <div className="rounded-full bg-[#e6ff2f] p-5 text-[#596800] shadow-xl">
                  <Bike className="size-10" />
                </div>
                <div className="absolute top-[58%] rounded-xl bg-white px-6 py-3 text-sm font-black shadow-lg">VéloVite Shop</div>
              </div>
            </div>
            <div className="grid content-between gap-6">
              <div className="rounded-[2rem] border border-[#dfff2f] bg-[#fcffe7] p-8">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#596800]">Right around the corner</p>
                <h3 className="mt-4 text-3xl font-black">2 minutes from Main Library</h3>
                <p className="mt-4 leading-8 text-[#59615d]">
                  Located just outside the campus gate for quick drop-off before class or your morning commute.
                </p>
              </div>
              <div className="rounded-[2rem] bg-[#171d1c] p-8 text-white">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff8a8f]">Need to call ahead?</p>
                <p className="mt-4 text-3xl font-black">01 23 45 67 89</p>
                <p className="mt-2 text-white/55">Mon-Fri: 8am-6pm</p>
                <a className="mt-6 inline-flex size-12 items-center justify-center rounded-full bg-[#007a74] text-white" href="tel:0123456789">
                  <Phone className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#007a74]">Book your fix</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Pick a date, know the cost, ride away.</h2>
            <p className="mt-5 text-lg leading-8 text-[#59615d]">
              The booking mockups merge here: clean calendar controls, bold selected times, and a compact repair summary.
            </p>
          </div>

          <BookingCalendar />
        </div>
      </section>

      <footer className="bg-[#151d1c] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4 lg:px-10">
          <div className="md:col-span-2">
            <p className="text-3xl font-black">VéloVite</p>
            <p className="mt-5 max-w-md leading-8 text-white/60">
              Friendly campus-speed service with professional mechanical standards in the heart of Ottawa.
            </p>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff8a8f]">Explore</p>
            <div className="mt-5 grid gap-3 text-white/70">
              <a href="#services">Services</a>
              <a href="#location">Location</a>
              <a href="#booking">Booking</a>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ff8a8f]">Connect</p>
            <div className="mt-5 flex gap-3">
              <a className="flex size-11 items-center justify-center rounded-full border border-white/20" href="tel:0123456789">
                <Phone className="size-5" />
              </a>
              <a className="flex size-11 items-center justify-center rounded-full border border-white/20" href="#location">
                <MapPin className="size-5" />
              </a>
            </div>
            <p className="mt-8 text-sm text-white/35">© 2026 VéloVite. Designed <a href="https://d1.byaditya.com" className="hover:text-underlined">by Aditya.</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
