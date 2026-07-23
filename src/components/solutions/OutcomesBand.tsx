import { Clock, RefreshCw, TrendingUp } from "lucide-react";

const outcomes = [
  {
    title: "Faster first response",
    description: "Reply on site.",
    icon: Clock,
  },
  {
    title: "Fewer dropped quotes",
    description: "Quotes keep moving.",
    icon: TrendingUp,
  },
  {
    title: "More repeat revenue",
    description: "Customers come back.",
    icon: RefreshCw,
  },
];

export default function OutcomesBand() {
  return (
    <section className="bg-[#0a1628] text-white bg-dots">
      <div className="container-wrapper py-12 lg:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[36px] font-semibold">
            What changes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div
                key={outcome.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center md:text-left"
              >
                <div className="mx-auto md:mx-0 mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8fdff] text-[#010B66]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold">{outcome.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
