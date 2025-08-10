"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  purpose: z.string().optional(),
  message: z.string().min(5, "Please add a short message"),
  consent: z.boolean().refine(Boolean, "Please accept data processing"),
  // file is optional in this demo; API ignores it for now
});

type FormValues = z.infer<typeof Schema>;

export default function ContactFormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<FormValues>({ resolver: zodResolver(Schema), defaultValues: { consent: true } });

  const onSubmit = async (data: FormValues) => {
    // File upload is not handled in the demo API; we only send the JSON fields.
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset({ consent: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border p-6">
      {/* top fields */}
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs text-gray-500">Name</label>
          <input className="w-full rounded-xl border p-3" placeholder="Enter your full name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Email</label>
          <input className="w-full rounded-xl border p-3" placeholder="Enter your email address" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-xs text-gray-500">Purpose</label>
          <select className="w-full rounded-xl border p-3" defaultValue="" {...register("purpose")}>
            <option value="" disabled>Select.</option>
            <option>Project inquiry</option>
            <option>Consultation</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>
        </div>

        {/* message */}
        <div className="md:col-span-3">
          <label className="mb-1 block text-xs text-gray-500">Message</label>
          <textarea rows={5} className="w-full rounded-xl border p-3" placeholder="Enter your message" {...register("message")} />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>
      </div>

      {/* attach + consent + CTA */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <span>📎</span>
          <input type="file" className="hidden" />
          <span>Attach file</span>
        </label>

        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
          <label className="flex items-center gap-2 text-xs text-gray-600">
            <input type="checkbox" className="rounded" {...register("consent")} defaultChecked />
            I agree to personal data processing
          </label>

          <button
            disabled={isSubmitting}
            className="rounded-full bg-black px-5 py-3 text-sm text-white disabled:opacity-50"
          >
            Get a solution
          </button>

          {isSubmitSuccessful && (
            <span className="text-sm text-green-600">Thanks! We’ll get back to you soon.</span>
          )}
        </div>
      </div>
    </form>
  );
}
