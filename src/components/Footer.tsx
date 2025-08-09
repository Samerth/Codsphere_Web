export default function Footer() {
    return (
      <footer className="bg-neutral-950 py-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img src="/images/logo-light.svg" alt="COD SPHERE" className="h-6 w-auto"/>
              <p className="mt-3 text-sm text-white/70">
                We’d love to get a first impression from you, your business and project or idea — for this,
                we just need some basic information. It will help both of us streamline the process and only
                takes 3 minutes.
              </p>
              <div className="mt-3 flex gap-3 text-white/70">◎ ◎ ◎</div>
            </div>
  
            <div className="text-sm text-white/80">
              <div className="mb-2 font-semibold">Important Links</div>
              <div className="space-y-1 opacity-80">
                <div>Home</div><div>Services</div><div>Case Studies</div><div>Insights</div>
              </div>
            </div>
  
            <div className="text-sm text-white/80">
              <div className="mb-2 font-semibold">Important Links</div>
              <div className="space-y-1 opacity-80">
                <div>Testimonials</div><div>About Us</div><div>Contact</div>
              </div>
            </div>
  
            <div className="text-sm text-white/80">
              <div className="mb-2 font-semibold">Subscribe</div>
              <div className="flex overflow-hidden rounded-full bg-white/10 p-1">
                <input className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/50" placeholder="Email" />
                <button className="rounded-full bg-white px-4 py-2 text-black">➤</button>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <div><b>Office</b><br/>Vancouver<br/>Mon—Fri<br/>09:00—21:00</div>
                <div><b>Contact Number</b><br/>+1 (604) 906-2693</div>
                <div><b>Email</b><br/>info@codsphere.ca</div>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/60">
            © 2025 Codsphere. All Rights Reserved. <span className="mx-2">•</span> Terms & Conditions <span className="mx-2">•</span> Privacy Policy
          </div>
        </div>
      </footer>
    );
  }
  