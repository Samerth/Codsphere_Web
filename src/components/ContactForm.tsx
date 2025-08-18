// ContactForm.tsx
export default function ContactForm(){
  return (
    <section className="cs-container px-6 pb-16">
      <form className="mx-auto grid max-w-[1260px] grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-[20px]">Name</label>
          <input className="cs-input" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="mb-1 block text-[20px]">Email</label>
          <input className="cs-input" placeholder="Enter your email address" />
        </div>
        <div>
          <label className="mb-1 block text-[20px]">Purpose</label>
          <div className="relative">
            <select className="cs-input pr-10">
              <option value="">Select..</option>
              <option>Project Inquiry</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 i-caret-gray" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-[20px]">Message</label>
          <textarea className="cs-input h-[90px]" placeholder="Enter your message" />
        </div>

        <div className="flex items-center gap-3 md:col-span-2">
          <span className="inline-grid h-6 w-6 place-items-center i-attach" />
          <span className="text-[20px]">Attach file</span>
        </div>

        <div className="mt-2 flex w-full items-center justify-between md:col-span-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            <span className="text-[20px]">I agree to personal data processing</span>
          </label>

          {/* CTA button same as Figma style */}
          <button className="inline-flex items-center gap-3 rounded-[41.5px] bg-black px-8 py-5 text-white">
            <span className="grid h-[51px] w-[51px] place-items-center rounded-full bg-white rotate-[-90deg]">
              <span className="i-arrow-grad" />
            </span>
            <span className="text-[20px]">Get a solution</span>
          </button>
        </div>
      </form>
    </section>
  );
}
