"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Truck,
  Home,
  Building2,
  Package,
  Warehouse,
  Trash2,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Shield,
  Star,
  Loader2,
  AlertCircle,
  ChevronDown,
  Box,
  Users,
  CalendarDays,
} from "lucide-react";

/* ---------------- WAVY LINE SVG ---------------- */

function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      className={`w-48 h-5 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
        stroke="#3B82F6"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

/* ---------------- FORM DATA TYPES ---------------- */

interface QuoteFormData {
  // Step 1: Service Type
  serviceType: string;

  // Step 2: Move Details
  moveDate: string;
  flexibility: string;
  fromAddress: string;
  fromCity: string;
  fromState: string;
  fromZip: string;
  toAddress: string;
  toCity: string;
  toState: string;
  toZip: string;

  // Step 3: Property Details
  propertyType: string;
  bedrooms: string;
  squareFootage: string;
  hasStairs: string;
  hasElevator: string;
  specialItems: string[];

  // Step 4: Additional Services
  packingService: string;
  storageNeeded: string;
  storageDuration: string;

  // Step 5: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  additionalNotes: string;
}

const initialFormData: QuoteFormData = {
  serviceType: "",
  moveDate: "",
  flexibility: "",
  fromAddress: "",
  fromCity: "",
  fromState: "",
  fromZip: "",
  toAddress: "",
  toCity: "",
  toState: "",
  toZip: "",
  propertyType: "",
  bedrooms: "",
  squareFootage: "",
  hasStairs: "",
  hasElevator: "",
  specialItems: [],
  packingService: "",
  storageNeeded: "",
  storageDuration: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: "",
  additionalNotes: "",
};

/* ---------------- SERVICE OPTIONS ---------------- */

const serviceTypes = [
  {
    id: "local-moving",
    icon: <Truck className="w-8 h-8" />,
    title: "Local Moving",
    description: "Moving within the same city or nearby areas",
  },
  {
    id: "long-distance",
    icon: <MapPin className="w-8 h-8" />,
    title: "Long Distance",
    description: "Interstate or cross-country moves",
  },
  {
    id: "commercial",
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Moving",
    description: "Office, retail, or business relocation",
  },
  {
    id: "packing-only",
    icon: <Package className="w-8 h-8" />,
    title: "Packing Services",
    description: "Professional packing without moving",
  },
  {
    id: "storage",
    icon: <Warehouse className="w-8 h-8" />,
    title: "Storage",
    description: "Short or long-term storage solutions",
  },
  {
    id: "junk-removal",
    icon: <Trash2 className="w-8 h-8" />,
    title: "Junk Removal",
    description: "Remove unwanted items and debris",
  },
];

const specialItemsList = [
  "Piano",
  "Pool Table",
  "Safe/Gun Safe",
  "Antiques",
  "Artwork",
  "Wine Collection",
  "Hot Tub/Spa",
  "Motorcycle",
  "Exercise Equipment",
  "Large Electronics",
];

/* ---------------- STEP INDICATOR ---------------- */

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const steps = ["Service", "Locations", "Property", "Services", "Contact"];

  return (
    <div className="mb-8">
      {/* Mobile Version - Simple Progress Bar */}
      <div className="block md:hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-[#F5A623] rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Step Label */}
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">
            Step <span className="text-[#F5A623] font-bold">{currentStep}</span> of {totalSteps}
          </span>
          <span className="text-white font-medium text-sm">{steps[currentStep - 1]}</span>
        </div>
      </div>

      {/* Desktop Version - Full Step Indicator */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  index + 1 < currentStep
                    ? "bg-[#F5A623] text-black"
                    : index + 1 === currentStep
                      ? "bg-[#3B82F6] text-white"
                      : "bg-white/10 text-white/40"
                }`}
              >
                {index + 1 < currentStep ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
              </div>
              <span
                className={`text-xs mt-2 ${
                  index + 1 <= currentStep ? "text-white" : "text-white/40"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 lg:w-20 h-1 mx-2 rounded ${
                  index + 1 < currentStep ? "bg-[#F5A623]" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SERVICE TYPE CARD ---------------- */

interface ServiceTypeCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

function ServiceTypeCard({
  id,
  icon,
  title,
  description,
  selected,
  onClick,
}: ServiceTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-6 rounded-lg text-left transition-all duration-300 ${
        selected
          ? "bg-[#3B82F6] border-2 border-[#3B82F6]"
          : "bg-[#1a1a1a] border-2 border-white/10 hover:border-[#3B82F6]/50"
      }`}
    >
      <div className={`mb-3 ${selected ? "text-white" : "text-[#F5A623]"}`}>{icon}</div>
      <h3 className={`font-bold text-lg mb-1 ${selected ? "text-white" : "text-white"}`}>
        {title}
      </h3>
      <p className={`text-sm ${selected ? "text-white/80" : "text-white/50"}`}>{description}</p>
    </button>
  );
}

/* ---------------- FORM INPUT COMPONENTS ---------------- */

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  icon,
}: InputProps) {
  return (
    <div>
      <label className="block text-white/70 text-sm font-medium mb-2">
        {label} {required && <span className="text-[#F5A623]">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">{icon}</div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-[#1a1a1a] border border-white/10 text-white rounded-lg py-3 focus:outline-none focus:border-[#3B82F6] transition-colors ${
            icon ? "pl-12 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

function Select({ label, name, value, onChange, options, required }: SelectProps) {
  return (
    <div>
      <label className="block text-white/70 text-sm font-medium mb-2">
        {label} {required && <span className="text-[#F5A623]">*</span>}
      </label>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:border-[#3B82F6] transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
      </div>
    </div>
  );
}

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

function Textarea({ label, name, value, onChange, placeholder, rows = 4 }: TextareaProps) {
  return (
    <div>
      <label className="block text-white/70 text-sm font-medium mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-[#1a1a1a] border border-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
      />
    </div>
  );
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

function RadioGroup({ label, name, value, onChange, options, required }: RadioGroupProps) {
  return (
    <div>
      <label className="block text-white/70 text-sm font-medium mb-3">
        {label} {required && <span className="text-[#F5A623]">*</span>}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              value === opt.value
                ? "bg-[#3B82F6] text-white"
                : "bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-white/30"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function QuotePage() {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const totalSteps = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to form on step change
  useEffect(() => {
    if (formRef.current && currentStep > 1) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentStep]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecialItemToggle = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      specialItems: prev.specialItems.includes(item)
        ? prev.specialItems.filter((i) => i !== item)
        : [...prev.specialItems, item],
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.serviceType;
      case 2:
        return !!(
          formData.moveDate &&
          formData.fromCity &&
          formData.fromState &&
          formData.toCity &&
          formData.toState
        );
      case 3:
        return !!(formData.propertyType && formData.bedrooms);
      case 4:
        return true; // Optional step
      case 5:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData(initialFormData);
        setCurrentStep(1);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // GSAP Animations
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    let ctx: any;

    const initGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        const gsap = gsapModule.default;

        ctx = gsap.context(() => {
          gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
          );

          gsap.fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 },
          );
        }, pageRef);
      } catch (error) {
        console.warn("GSAP animation failed");
      }
    };

    initGSAP();
    return () => {
      if (ctx) ctx.revert();
    };
  }, [mounted]);

  // Render success state
  if (submitStatus === "success") {
    return (
      <div ref={pageRef} className="bg-black min-h-screen">
        <section className="py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
            <div className="w-20 h-20 bg-[#F5A623] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              QUOTE REQUEST <span className="text-[#F5A623]">SUBMITTED!</span>
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Thank you for your interest in SwiftMove! We've received your quote request and will
              get back to you within 24 hours with a detailed estimate.
            </p>
            <div className="bg-[#111] border border-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-white font-bold mb-4">What happens next?</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <span>Our team will review your requirements</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                  <span>We'll contact you within 24 hours with your quote</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/movers/home"
                className="inline-flex items-center gap-2 bg-[#3B82F6] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2563eb] transition-colors"
              >
                Back to Home
              </Link>
              <a
                href="tel:8007200411"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#e09000] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-black min-h-screen">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-[#111] to-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/movers/home" className="hover:text-[#F5A623] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#F5A623]">Get a Quote</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              GET YOUR <span className="text-[#F5A623]">FREE QUOTE</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-white/70 text-lg mb-6">
              Fill out the form below and we'll provide you with a detailed, no-obligation quote
              within 24 hours.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F5A623]" />
                No Obligation
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5A623]" />
                24hr Response
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#F5A623]" />
                Best Price Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-red-400">{errorMessage}</span>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-[#111] border border-white/10 rounded-xl p-6 lg:p-10">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Type */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">What service do you need?</h2>
                  <p className="text-white/60 mb-8">
                    Select the type of service you're looking for
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceTypes.map((service) => (
                      <ServiceTypeCard
                        key={service.id}
                        {...service}
                        selected={formData.serviceType === service.id}
                        onClick={() => handleRadioChange("serviceType", service.id)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Move Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">When and where?</h2>
                  <p className="text-white/60 mb-8">Tell us about your move date and locations</p>

                  {/* Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Input
                      label="Preferred Move Date"
                      name="moveDate"
                      type="date"
                      value={formData.moveDate}
                      onChange={handleInputChange}
                      required
                      icon={<Calendar className="w-5 h-5" />}
                    />
                    <Select
                      label="Date Flexibility"
                      name="flexibility"
                      value={formData.flexibility}
                      onChange={handleInputChange}
                      options={[
                        { value: "exact", label: "Exact date only" },
                        { value: "few-days", label: "± Few days" },
                        { value: "week", label: "± One week" },
                        { value: "flexible", label: "Very flexible" },
                      ]}
                    />
                  </div>

                  {/* From Address */}
                  <div className="mb-8">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#F5A623]" />
                      Moving From
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Input
                          label="Street Address"
                          name="fromAddress"
                          value={formData.fromAddress}
                          onChange={handleInputChange}
                          placeholder="123 Main St"
                        />
                      </div>
                      <Input
                        label="City"
                        name="fromCity"
                        value={formData.fromCity}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="State"
                          name="fromState"
                          value={formData.fromState}
                          onChange={handleInputChange}
                          placeholder="State"
                          required
                        />
                        <Input
                          label="ZIP"
                          name="fromZip"
                          value={formData.fromZip}
                          onChange={handleInputChange}
                          placeholder="ZIP"
                        />
                      </div>
                    </div>
                  </div>

                  {/* To Address */}
                  <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#3B82F6]" />
                      Moving To
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Input
                          label="Street Address"
                          name="toAddress"
                          value={formData.toAddress}
                          onChange={handleInputChange}
                          placeholder="456 New St"
                        />
                      </div>
                      <Input
                        label="City"
                        name="toCity"
                        value={formData.toCity}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="State"
                          name="toState"
                          value={formData.toState}
                          onChange={handleInputChange}
                          placeholder="State"
                          required
                        />
                        <Input
                          label="ZIP"
                          name="toZip"
                          value={formData.toZip}
                          onChange={handleInputChange}
                          placeholder="ZIP"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Property Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">
                    Tell us about your property
                  </h2>
                  <p className="text-white/60 mb-8">
                    Help us understand the size and scope of your move
                  </p>

                  <div className="space-y-8">
                    <RadioGroup
                      label="Property Type"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={(val) => handleRadioChange("propertyType", val)}
                      options={[
                        { value: "apartment", label: "Apartment" },
                        { value: "house", label: "House" },
                        { value: "condo", label: "Condo" },
                        { value: "townhouse", label: "Townhouse" },
                        { value: "office", label: "Office" },
                        { value: "storage", label: "Storage Unit" },
                      ]}
                      required
                    />

                    <RadioGroup
                      label="Number of Bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={(val) => handleRadioChange("bedrooms", val)}
                      options={[
                        { value: "studio", label: "Studio" },
                        { value: "1", label: "1 BR" },
                        { value: "2", label: "2 BR" },
                        { value: "3", label: "3 BR" },
                        { value: "4", label: "4 BR" },
                        { value: "5+", label: "5+ BR" },
                      ]}
                      required
                    />

                    <Select
                      label="Approximate Square Footage"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      options={[
                        { value: "under-500", label: "Under 500 sq ft" },
                        { value: "500-1000", label: "500 - 1,000 sq ft" },
                        { value: "1000-1500", label: "1,000 - 1,500 sq ft" },
                        { value: "1500-2000", label: "1,500 - 2,000 sq ft" },
                        { value: "2000-3000", label: "2,000 - 3,000 sq ft" },
                        { value: "3000+", label: "3,000+ sq ft" },
                      ]}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <RadioGroup
                        label="Are there stairs?"
                        name="hasStairs"
                        value={formData.hasStairs}
                        onChange={(val) => handleRadioChange("hasStairs", val)}
                        options={[
                          { value: "no", label: "No stairs" },
                          { value: "few", label: "Few stairs" },
                          { value: "1-flight", label: "1 flight" },
                          { value: "2+-flights", label: "2+ flights" },
                        ]}
                      />
                      <RadioGroup
                        label="Elevator available?"
                        name="hasElevator"
                        value={formData.hasElevator}
                        onChange={(val) => handleRadioChange("hasElevator", val)}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                          { value: "na", label: "N/A" },
                        ]}
                      />
                    </div>

                    {/* Special Items */}
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-3">
                        Any special items? (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {specialItemsList.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => handleSpecialItemToggle(item)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              formData.specialItems.includes(item)
                                ? "bg-[#F5A623] text-black"
                                : "bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-white/30"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Services */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">Additional services</h2>
                  <p className="text-white/60 mb-8">
                    Let us know if you need any extra help (optional)
                  </p>

                  <div className="space-y-8">
                    <RadioGroup
                      label="Do you need packing services?"
                      name="packingService"
                      value={formData.packingService}
                      onChange={(val) => handleRadioChange("packingService", val)}
                      options={[
                        { value: "none", label: "No, I'll pack myself" },
                        { value: "partial", label: "Partial packing (fragile items only)" },
                        { value: "full", label: "Full packing service" },
                        { value: "undecided", label: "Not sure yet" },
                      ]}
                    />

                    <RadioGroup
                      label="Will you need storage?"
                      name="storageNeeded"
                      value={formData.storageNeeded}
                      onChange={(val) => handleRadioChange("storageNeeded", val)}
                      options={[
                        { value: "no", label: "No" },
                        { value: "yes", label: "Yes" },
                        { value: "maybe", label: "Maybe" },
                      ]}
                    />

                    {formData.storageNeeded === "yes" && (
                      <Select
                        label="How long will you need storage?"
                        name="storageDuration"
                        value={formData.storageDuration}
                        onChange={handleInputChange}
                        options={[
                          { value: "less-than-month", label: "Less than 1 month" },
                          { value: "1-3-months", label: "1-3 months" },
                          { value: "3-6-months", label: "3-6 months" },
                          { value: "6+-months", label: "6+ months" },
                          { value: "unsure", label: "Not sure yet" },
                        ]}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Step 5: Contact Information */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-2xl font-black text-white mb-2">Your contact information</h2>
                  <p className="text-white/60 mb-8">
                    We'll use this to send your quote and follow up
                  </p>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        icon={<User className="w-5 h-5" />}
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        icon={<User className="w-5 h-5" />}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        icon={<Mail className="w-5 h-5" />}
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        required
                        icon={<Phone className="w-5 h-5" />}
                      />
                    </div>

                    <RadioGroup
                      label="Preferred contact method"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={(val) => handleRadioChange("preferredContact", val)}
                      options={[
                        { value: "email", label: "Email" },
                        { value: "phone", label: "Phone" },
                        { value: "text", label: "Text" },
                        { value: "any", label: "Any" },
                      ]}
                    />

                    <Textarea
                      label="Additional Notes (Optional)"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any other details we should know about your move..."
                    />

                    {/* Privacy Notice */}
                    <div className="bg-[#1a1a1a] rounded-lg p-4 text-sm text-white/50">
                      <p>
                        By submitting this form, you agree to receive communications from SwiftMove
                        regarding your quote request. We respect your privacy and will never share
                        your information with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-white/10">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className={`flex items-center gap-2 font-bold px-8 py-3 rounded-lg transition-all ${
                      validateStep(currentStep)
                        ? "bg-[#3B82F6] text-white hover:bg-[#2563eb]"
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!validateStep(currentStep) || isSubmitting}
                    className={`flex items-center gap-2 font-bold px-8 py-3 rounded-lg transition-all ${
                      validateStep(currentStep) && !isSubmitting
                        ? "bg-[#F5A623] text-black hover:bg-[#e09000]"
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Contact Alternative */}
          <div className="mt-10 text-center">
            <p className="text-white/50 mb-4">Prefer to speak with someone directly?</p>
            <a
              href="tel:8007200411"
              className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call us at 800.720.0411
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#111] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              WHY CHOOSE <span className="text-[#F5A623]">SWIFTMOVE?</span>
            </h2>
            <div className="flex justify-center">
              <WavyLine />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Fully Insured</h3>
              <p className="text-white/60">
                Your belongings are protected with comprehensive coverage throughout your move.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">5-Star Service</h3>
              <p className="text-white/60">
                Consistently rated excellent by thousands of satisfied customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">On-Time Guarantee</h3>
              <p className="text-white/60">
                We respect your schedule and arrive when promised, every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
