import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Vishal Vijayvargiya",
      role: "Founder & CEO - DYU India",
      content:
        "A Seamless E-Commerce Experience! CodSphere transformed our online store by delivering a fully optimized e-commerce platform with streamlined product management and a hassle-free checkout system. Thanks to their commitment to democratizing access to technology, even small businesses like ours can now compete with industry giants. Their team was incredibly responsive, ensuring our platform was both scalable and secure.",
      initials: "VV",
    },
    {
      name: "B Bek Shrestha",
      role: "Partner Business Management for Bharat Gold",
      content:
        "Smarter Inventory Management for Better Control. With CodSphere's inventory management system, we've eliminated stock shortages and over-ordering. Their automation-first approach ensures that even small businesses like ours have access to enterprise-level inventory tracking and order management.",
      initials: "BS",
    },
    {
      name: "Shraddha Singh",
      role: "Business Operations Manager, TIS",
      content:
        "CodSphere doesn't just make empty promises—they deliver real, measurable marketing results. We saw a guaranteed increase in leads, and their transparent pricing ensured we got the best value for our investment. Their mission of fairness and accessibility shines through in their marketing solutions. Digital marketing that guarantees results",
      initials: "SS",
    },
    {
      name: "Nikhil Sharma",
      role: "Tech Lead",
      content:
        "High-performance systems built for scale. Just as a business grows, so does CodSphere's solutions, with tools that perform at an enterprise level while allowing small teams access to other things. The flexibility simply scaled with us, allowing us limitless access to powerful features without being overwhelmed.",
      initials: "NS",
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="container-wrapper pt-more pb-less bg-white overflow-hidden">
      <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12">
        {/* <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]"></p> */}
        <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
          Trusted by 100+ teams to automate workflows and reduce reporting time by 50%
        </h2>
        <p className="mt-2 text-[20px] font-light">
          From early-stage startups to global enterprises, our clients share one thing in common — a
          vision to build smarter with CodSphere.
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-hidden animate-scroll-left hover:paused">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-[350px] bg-white p-6 flex flex-col relative rounded-xl"
              style={{
                border: "3px solid transparent",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(to right, #33FCFE, #010B66)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-200/20 text-black rounded-full flex justify-center items-center">
                  {testimonial.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-black text-sm">{testimonial.name}</h3>
                  <div className="flex gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-black/80 leading-relaxed grow">{testimonial.content}</p>
              {/* <p className="text-xs text-black/60 mt-3 italic">{testimonial.role}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
