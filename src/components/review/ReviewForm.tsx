"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Star } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
};

export const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    review: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle" });
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".review-heading-script",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".review-heading-main",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".review-heading-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Star rating animation
      gsap.fromTo(
        ".star-rating-container",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Form fields stagger animation
      gsap.fromTo(
        ".review-form-field",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Submit button animation
      gsap.fromTo(
        ".review-submit-btn",
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formContainerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToPrivacy) {
      setFormStatus({
        type: "error",
        message: "Please agree to personal data processing",
      });
      return;
    }

    if (rating === 0) {
      setFormStatus({
        type: "error",
        message: "Please select a star rating",
      });
      return;
    }

    setFormStatus({ type: "loading" });

    try {
      const submitData = {
        ...formData,
        rating,
      };

      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      console.log("responseeeeee", response);

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message: result.message || "Thank you for your review! We appreciate your feedback.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          review: "",
        });
        setRating(0);
        setAgreedToPrivacy(false);
        toast.success("Review submitted successfully");

        setTimeout(() => {
          setFormStatus({ type: "idle" });
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to submit review");
      }
    } catch (error: unknown) {
      setFormStatus({
        type: "error",
        message:
          (error as Error)?.message ||
          "Failed to submit review. Please try again or contact us directly at info@codsphere.ca",
      });

      setTimeout(() => {
        setFormStatus({ type: "idle" });
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (formStatus.type === "error") {
      setFormStatus({ type: "idle" });
    }
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
    // Animate the selected star
    gsap.fromTo(
      `.star-${starIndex}`,
      { scale: 1.3 },
      { scale: 1, duration: 0.3, ease: "back.out(1.7)" },
    );
  };

  return (
    <section ref={sectionRef} className="">
      <div className="container-wrapper py-more">
        {/* Section heading */}
        <div ref={headingRef} className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto">
          <p className="review-heading-script font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">
            Your feedback matters to us
          </p>
          <h2 className="review-heading-main text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Share Your Experience With Us
          </h2>
          <p className="review-heading-sub mt-2 text-[20px] font-light">
            We value every piece of feedback. Your review helps us improve and deliver better
            solutions. Share your experience working with CodSphere.
          </p>
        </div>

        {/* Status Messages */}
        {formStatus.type !== "idle" && (
          <div
            className={`mb-6 p-4 rounded-lg text-center mx-auto ${
              formStatus.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : formStatus.type === "error"
                  ? "bg-red-100 text-red-700 border border-red-200"
                  : formStatus.type === "loading"
                    ? "bg-blue-100 text-blue-700 border border-blue-200"
                    : ""
            }`}
          >
            {formStatus.type === "loading" ? "Submitting your review..." : formStatus.message}
          </div>
        )}

        {/* Form container */}
        <div ref={formContainerRef} className="mx-auto">
          {/* Rating Section */}
          <div className="my-6 md:my-8">
            <p className="text-black text-[24px] md:text-[28px] lg:text-[32px] font-normal mb-1">
              Rate Your Experience
            </p>
            <p className="text-[#9A9A9A] text-[16px] md:text-[17px] lg:text-[18px] font-light mb-4">
              Click on the stars to rate
            </p>

            {/* Star Rating */}
            <div className="star-rating-container flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <button
                  key={starIndex}
                  type="button"
                  onClick={() => handleStarClick(starIndex)}
                  onMouseEnter={() => setHoveredRating(starIndex)}
                  onMouseLeave={() => setHoveredRating(0)}
                  disabled={formStatus.type === "loading"}
                  className={`star-${starIndex} transition-all duration-200 hover:scale-110 disabled:cursor-not-allowed`}
                >
                  <Star
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 transition-colors duration-200",
                      (hoveredRating || rating) >= starIndex
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-transparent text-gray-300",
                    )}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="ml-3 text-[16px] text-gray-600">
                  {rating === 1 && "Poor"}
                  {rating === 2 && "Fair"}
                  {rating === 3 && "Good"}
                  {rating === 4 && "Very Good"}
                  {rating === 5 && "Excellent"}
                </span>
              )}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {/* Name, Email, Company - responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name field */}
              <div className="review-form-field">
                <label htmlFor="name" className="block text-[20px] text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-11 md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                  disabled={formStatus.type === "loading"}
                />
              </div>

              {/* Email field */}
              <div className="review-form-field">
                <label htmlFor="email" className="block text-[20px] text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-11 md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                  disabled={formStatus.type === "loading"}
                />
              </div>

              {/* Company field */}
              <div className="review-form-field">
                <label htmlFor="company" className="block text-[20px] text-black mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
                  className="w-full h-11 md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  disabled={formStatus.type === "loading"}
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div className="review-form-field">
              <label htmlFor="service" className="block text-[20px] text-black mb-2">
                Service Used
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full md:w-1/3 h-11 md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 pr-10 text-[14px] md:text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer text-gray-600 transition-all"
                  required
                  disabled={formStatus.type === "loading"}
                >
                  <option value="" className="text-gray-400">
                    Select a service...
                  </option>
                  <option value="CRM Development">CRM Development</option>
                  <option value="ERP Implementation">ERP Implementation</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none md:hidden">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review field */}
            <div className="review-form-field">
              <label htmlFor="review" className="block text-[20px] text-black mb-2">
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Tell us about your experience working with CodSphere..."
                rows={5}
                className="w-full bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 py-3 text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none transition-all"
                required
                disabled={formStatus.type === "loading"}
              />
            </div>

            {/* Privacy checkbox */}
            <div className="review-form-field">
              <label className="flex items-start gap-2 text-sm text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  required
                  className="w-4 h-4 mt-0.5 rounded border-gray-300"
                  disabled={formStatus.type === "loading"}
                />
                <span>
                  I consent to the processing of my personal data and agree that my review may be
                  used for testimonial purposes on CodSphere's website and marketing materials. Your
                  information is securely stored and handled under strict data-protection standards.
                </span>
              </label>
            </div>

            {/* Submit button */}
            <div className="review-submit-btn flex justify-center pt-4">
              <button
                type="submit"
                disabled={formStatus.type === "loading"}
                className="w-fit rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px] cursor-pointer disabled:from-gray-500 disabled:to-[#010B66] disabled:cursor-not-allowed"
              >
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-full px-4 py-3 bg-black",
                    "bg-linear-to-l from-[#33FCFE] to-[#010b6698] hover:bg-gray-700",
                    formStatus.type === "loading" ? "bg-gray-400" : "bg-black hover:bg-gray-700",
                  )}
                >
                  {formStatus.type === "loading" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <div className="bg-white text-black rounded-full p-0.5">
                        <ArrowRight />
                      </div>
                      Submit Review
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
