"use client";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: string;
  initials: string;
  name: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    initials: "VV",
    name: "Vishal Vijayvargiya",
    content:
      "A Seamless E-Commerce Experience! CodSphere transformed our online store by delivering a fully optimized e-commerce platform with streamlined product management and a hassle-free checkout system. Thanks to their commitment to democratizing access to technology, even small businesses like ours can now compete with industry giants. Their team was incredibly responsive, ensuring our platform was both scalable and secure.",
  },
  {
    id: "2",
    initials: "BS",
    name: "B Bek Shrestha",
    content:
      "Smarter Inventory Management for Better Control With CodSphere's inventory management system, we've eliminated stock shortages and over-ordering. Their automation-first approach ensures that even small businesses like ours have access to enterprise-level inventory tracking and order management.",
  },
  {
    id: "3",
    initials: "SS",
    name: "Shraddha Singh",
    content:
      "CodSphere doesn't just make empty promises—they deliver real, measurable marketing results. We saw a guaranteed increase in leads, and their transparent pricing ensured we got the best value for our investment. Their mission of fairness and accessibility shines through in their marketing solutions. Digital marketing that guarantees results",
  },
  {
    id: "4",
    initials: "SP",
    name: "Shane Pinto",
    content:
      "High-Performance WordPress Sites – Just as Promised! CodSphere delivered exactly what they promised—a fast, high-performance WordPress website that allowed us to launch quickly. Unlike other developers who overcomplicate things, CodSphere prioritizes simplicity, automation, and scalability, allowing businesses of all sizes to access top-tier web solutions without being trapped in restrictive platforms.",
  },
  {
    id: "5",
    initials: "KM",
    name: "Kirti Mishra",
    content:
      "Working with CodSphere has been an absolute pleasure. They revamped our website, making it both stunning and functional. The team really took the time to understand our needs and delivered beyond our expectations. Highly recommend their web development services!",
  },
  {
    id: "6",
    initials: "RJ",
    name: "Riya Jassal",
    content:
      "Bought 20 CRM Licenses for my sales team in Markham, Ontario. Onboarding was smooth and post sales services were great as well. Highly recommended.",
  },
  {
    id: "7",
    initials: "MS",
    name: "Mayuri Sahai",
    content:
      "This agency exceeded our expectations in every way! The new website design is modern, sleek, and easy to navigate. Their SEO expertise has driven more traffic to our site than ever before. We couldn't be happier with the results. Highly recommend!",
  },
  {
    id: "8",
    initials: "RK",
    name: "Rohan Kumar",
    content:
      "Absolutely thrilled with the web design and SEO services provided! The team was professional, creative, and truly understood our needs. Our website looks fantastic and our search engine rankings have improved significantly. Highly recommend this agency!",
  },
  {
    id: "9",
    initials: "SK",
    name: "Simran Kaur",
    content:
      "Exceptional service and fantastic results! The team transformed our website into a visually appealing, easy-to-navigate site. Their SEO expertise has also significantly improved our search rankings. We couldn’t be happier. Highly recommend!",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    if (!isScrolling || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;

      if (isAtEnd && scrollDirection === "left") {
        setScrollDirection("right");
      } else if (isAtStart && scrollDirection === "right") {
        setScrollDirection("left");
      }

      const scrollAmount = 4;
      if (scrollDirection === "left") {
        container.scrollLeft += scrollAmount;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollDirection, isScrolling]);

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
      {/* Testimonials Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onMouseEnter={() => setIsScrolling(false)}
        onMouseLeave={() => setIsScrolling(true)}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
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
            <p className="text-xs text-black/80 leading-relaxed grow text-justify">
              {testimonial.content}
            </p>
            {/* <p className="text-xs text-black/60 mt-3 italic">{testimonial.role}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
