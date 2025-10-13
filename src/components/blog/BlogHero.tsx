// components/blog/BlogHero.tsx
import Image from "next/image";

export function BlogHero() {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/blog-page/jpeg/blog-hero-bg.jpg"
          alt="Blog page header image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50" aria-hidden /> */}

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Blogs: Cod Sphere
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
