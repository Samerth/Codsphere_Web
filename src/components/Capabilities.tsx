import Image from "next/image";

export default function Capabilities() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-12">
      <p className="mb-8 text-center text-sm text-gray-600">
        Crafting digital experiences and products for inspiring brand across worldwide
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border p-4">
            <Image src="/images/cap-left-1.png" alt="" width={580} height={360} className="w-full rounded-xl"/>
          </div>
          <div className="text-xs text-gray-400">04+<br/>Year of building, breaking, fixing, and scaling digital systems</div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <Image src="/images/cap-center.png" alt="" width={88} height={160}/>
        </div>

        <div className="space-y-6">
          <div className="text-xs text-gray-400">150+<br/>Websites built and managed</div>
          <div className="rounded-2xl border p-4">
            <Image src="/images/cap-right-1.png" alt="" width={580} height={360} className="w-full rounded-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
