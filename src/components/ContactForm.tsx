"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  purpose: z.string().optional(),
  message: z.string().min(5),
});

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } =
    useForm({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: any) => {
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    reset();
  };

  return (
    <section id="contact" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-sm italic text-gray-400">We are here to help you</p>
        <h3 className="mb-2 text-center text-2xl font-semibold">Ready to start? Contact us today.</h3>
        <p className="mb-8 text-center text-sm text-gray-500">
          Tell about your project and ask questions — we’ll get back to you
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <input className="rounded-xl border p-3" placeholder="Name" {...register("name")} />
            <input className="rounded-xl border p-3" placeholder="Email" {...register("email")} />
            <select className="rounded-xl border p-3" defaultValue="" {...register("purpose")}>
              <option value="" disabled>Purpose</option>
              <option>Project inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
            </select>
            <textarea className="md:col-span-3 rounded-xl border p-3" rows={5} placeholder="Message" {...register("message")} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              <span className="mr-2">📎</span>Attach file
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-gray-500">
                <input type="checkbox" className="rounded" defaultChecked /> I agree to personal data processing
              </label>
              <button
                disabled={isSubmitting}
                className="rounded-full bg-black px-5 py-3 text-white disabled:opacity-50"
              >
                Get a solution
              </button>
              {isSubmitSuccessful && <span className="text-sm text-green-600">Thanks! We’ll reply soon.</span>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
