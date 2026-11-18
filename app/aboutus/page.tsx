import type { Metadata } from "next";
import { Lightbulb, PackageCheck, Sparkles, Waypoints } from "lucide-react";
export const metadata: Metadata = { title: "About" };

const values = [
  { icon: Waypoints, number: "01", title: "Designed Around Everyday Life", body: "We create intuitive, practical products that fit naturally into modern homes and simplify daily routines." },
  { icon: Lightbulb, number: "02", title: "Innovation Made Simple", body: "We combine smart technology with thoughtful design to make everyday cleaning easier and more effortless." },
  { icon: PackageCheck, number: "03", title: "Quality Through Expertise", body: "Backed by manufacturing experience and an integrated supply chain, we deliver consistent quality and dependable performance." },
  { icon: Sparkles, number: "04", title: "Better Value, Smarter Living", body: "By optimizing design and production, we make quality home solutions more accessible without compromising performance." },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-24 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold leading-[1] tracking-[0.15em] text-brand-600 uppercase">
              About TIDEA
            </p>
            <h1 className="mt-4 max-w-[18ch] text-balance text-[35px] font-semibold leading-[1.08] tracking-[0.045em] uppercase">
              Our Story
            </h1>
            <p className="mt-8 max-w-[62ch] text-[clamp(1.0625rem,1.5vw,1.125rem)] leading-[1.4] text-black/70">
              At TIDEA, we believe that a better home starts with thoughtful design, practical innovation, and products that make everyday life easier. We create home solutions that bring together performance, simplicity, and exceptional value.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[32px] bg-[#e7edf8]">
            <video
              aria-label="TIDEA products designed for modern living"
              autoPlay
              className="absolute inset-0 size-full object-cover"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/video/about-v.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-[#567dbd] py-12 text-white md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12">
          <h2 className="max-w-3xl text-balance text-[35px] font-semibold leading-[1.1] tracking-[0.05em] uppercase">
            Designed for Better Everyday Living.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[32px] bg-white/20 md:grid-cols-2">
            {values.map((value) => (
              <div className="bg-[#567dbd] p-8 md:p-12" key={value.number}>
                <div className="flex items-center justify-between text-white/85">
                  <value.icon aria-hidden size={48} />
                  <span>{value.number}</span>
                </div>
                <h3 className="mt-12 text-[clamp(1.25rem,2vw,1.5rem)] font-semibold leading-[1.25]">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-[1.6] text-white/85">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
