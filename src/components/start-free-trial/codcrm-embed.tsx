"use client";

interface CodCRMEmbedProps {
  minHeight?: number;
}

export function CodCRMEmbed({ minHeight = 480 }: CodCRMEmbedProps) {
  return (
    <div className="rounded-[24px] p-[3px] bg-linear-to-r from-[#33FCFE] to-[#010B66] max-w-[900px] mx-auto">
      <div className="rounded-[22px] bg-[#F3F3F3] p-6 md:p-8">
        <iframe
          src="https://www.codcrm.com/f/codsphere-cuae/get-started-with-codsphere?embed=1"
          style={{ width: "100%", border: 0, minHeight }}
          title="Get Started with CodSphere"
          className="rounded-[14px] bg-white"
        />
      </div>
    </div>
  );
}